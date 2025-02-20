import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import MonthSelector from './MonthSelector';
import { exportToCsv } from '../utils/exportCsv';

interface TopNavigationProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  filteredData: any[]; // Expecting an array of attendance records
}

const months = [
  'All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October', 'November', 'December'
];

const TopNavigation: React.FC<TopNavigationProps> = ({ selectedMonth, setSelectedMonth, filteredData }) => {
  return (
    <div className="bg-white shadow-sm p-4 flex flex-wrap justify-between items-center">
      {/* Left Controls (Search, Filters, Rows, Month Selector) */}
      <div className="flex space-x-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="border p-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button className="border p-2 rounded-md flex items-center hover:bg-gray-100">
          <Filter size={16} className="mr-2" /> Filters
        </button>
        
        <button className="border p-2 rounded-md flex items-center hover:bg-gray-100">
          Rows <ChevronDown size={16} className="ml-2" />
        </button>

        <MonthSelector selectedMonth={selectedMonth} onMonthSelect={setSelectedMonth} months={months} />
      </div>

      {/* Right Controls (Export CSV, Detailed View) */}
      <div className="flex space-x-4">
        <button
          onClick={() => exportToCsv(filteredData, `attendance-${selectedMonth.toLowerCase()}.csv`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Export CSV
        </button>
        
        <button className="border p-2 rounded-md flex items-center hover:bg-gray-100">
          Detailed View <ChevronDown size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;
