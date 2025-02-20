import React, { useMemo } from 'react';
import dummyData from '../data/dummy.json';

interface AttendanceTableProps {
  selectedMonth: string;
}

export default function AttendanceTable({ selectedMonth }: AttendanceTableProps) {
  const filteredData = useMemo(() => {
    return dummyData.attendance.filter(record => selectedMonth === 'All' || record.month === selectedMonth);
  }, [selectedMonth]);

  return (
    <div className="bg-white shadow-sm mt-4 p-4 overflow-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Planned Time</th>
            <th className="p-2">Actual Time</th>
            <th className="p-2">Fine/Bonus</th>
            <th className="p-2">Error</th>
            <th className="p-2">Final Att.</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className="border-b text-center">
              <td className="p-2">{row.date}</td>
              <td className="p-2">{row.plannedTime}</td>
              <td className="p-2">{row.actualTime}</td>
              <td className="p-2">{row.fineBonus}</td>
              <td className="p-2">{row.error}</td>
              <td className="p-2">{row.finalAtt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
