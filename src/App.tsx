import React, { useState, useCallback, useMemo } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { AttendanceRow } from './components/AttendanceRow';
import { MonthSelector } from './components/MonthSelector';
import { exportToCsv } from './utils/exportCsv';
import dummyData from './data/dummy.json';

function App() {
  const [selectedMonth, setSelectedMonth] = useState('All');
  const { employees, navigationTabs, months } = dummyData;

  const filteredAttendance = useMemo(() => {
    return employees.flatMap(employee => 
      employee.attendance
        .filter(record => selectedMonth === 'All' || record.month === selectedMonth)
        .map(record => ({
          employee,
          record
        }))
    );
  }, [employees, selectedMonth]);

  const handleExport = useCallback(() => {
    const filename = selectedMonth === 'All' 
      ? 'attendance-all-2025.csv'
      : `attendance-${selectedMonth.toLowerCase()}-2025.csv`;
    
    exportToCsv(filteredAttendance, filename);
  }, [filteredAttendance, selectedMonth]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-sm">
          {/* Header Navigation */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <div className="flex space-x-6 px-6 min-w-max">
              {navigationTabs.map((item) => (
                <button 
                  key={item}
                  className={`py-4 px-2 border-b-2 whitespace-nowrap ${
                    item === 'Final Reports' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500'
                  } hover:text-blue-600 transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-auto pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter size={16} />
                <span>Filters</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <span>Rows</span>
                <ChevronDown size={16} />
              </button>
              <MonthSelector
                months={['All', ...months]}
                selectedMonth={selectedMonth}
                onMonthSelect={setSelectedMonth}
              />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleExport}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Export CSV
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <span>Detailed View</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Attendance List */}
          <div className="divide-y divide-gray-100">
            {filteredAttendance.length > 0 ? (
              filteredAttendance.map((item, index) => (
                <AttendanceRow
                  key={`${item.employee.id}-${index}`}
                  employee={item.employee}
                  record={item.record}
                />
              ))
            ) : (
              <div className="py-8 text-center text-gray-500">
                No attendance records found {selectedMonth !== 'All' && `for ${selectedMonth}`}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;