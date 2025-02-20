import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MonthSelectorProps {
  months: string[];
  selectedMonth: string;
  onMonthSelect: (month: string) => void;
}

export function MonthSelector({ months, selectedMonth, onMonthSelect }: MonthSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
      >
        <span>{selectedMonth}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="py-1 max-h-64 overflow-y-auto">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => {
                  onMonthSelect(month);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                  selectedMonth === month ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}