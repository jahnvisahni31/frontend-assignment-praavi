import React from 'react';

interface MonthSelectorProps {
  months: string[];
  selectedMonth: string;
  onMonthSelect: (month: string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ months, selectedMonth, onMonthSelect }) => {
  return (
    <div className="relative">
      <select
        value={selectedMonth}
        onChange={(e) => onMonthSelect(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
