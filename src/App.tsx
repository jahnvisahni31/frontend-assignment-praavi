"use client"
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNavigation from './components/Topnavigation';
import AttendanceTable from './components/AttendanceRow';
import data from './data/dummy.json';

const App: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('All');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />

      <div className="flex-1">
        {/* Top Navigation for Month Selection */}
        <TopNavigation selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />

        {/* Attendance Table with Filtered Data */}
        <AttendanceTable selectedMonth={selectedMonth} data={data.attendance} />
      </div>
    </div>
  );
};

export default App;
