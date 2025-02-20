import React from 'react';
import { Clock3, MoreVertical } from 'lucide-react';

interface AttendanceRecord {
  date: string;
  plannedTime: string;
  actualTime: string;
  status: string;
  lateBy?: string;
  overtime?: string;
  earlyBy?: string;
  bonus: number;
  fine: number;
}

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  avatar: string;
  attendance: AttendanceRecord[];
}

interface AttendanceRowProps {
  employee: Employee;
  record: AttendanceRecord;
}

export function AttendanceRow({ employee, record }: AttendanceRowProps) {
  const getStatusDisplay = () => {
    switch (record.status) {
      case 'late':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-red-100 text-red-600">
            <Clock3 size={14} className="mr-1" />
            Late by {record.lateBy}
          </span>
        );
      case 'overtime':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-green-100 text-green-600">
            Overtime {record.overtime}
          </span>
        );
      case 'earlyLeave':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-600">
            Early by {record.earlyBy}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-green-100 text-green-600">
            On Time
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-gray-100 hover:bg-gray-50 px-4 gap-4 md:gap-0">
      <div className="flex items-center flex-1">
        <img
          src={employee.avatar}
          className="w-10 h-10 rounded-full mr-3"
          alt={employee.name}
        />
        <div>
          <h3 className="font-medium">{employee.name}</h3>
          <p className="text-sm text-gray-500">
            {employee.position} · {employee.department}
          </p>
        </div>
      </div>
      <div className="flex-1 text-sm">{record.date}</div>
      <div className="flex-1 text-sm">{record.plannedTime}</div>
      <div className="flex-1">{getStatusDisplay()}</div>
      <div className="flex-1">
        {record.bonus > 0 && (
          <span className="text-green-600">+₹{record.bonus}</span>
        )}
        {record.fine > 0 && (
          <span className="text-red-400 ml-2">-₹{record.fine}</span>
        )}
      </div>
      <div className="flex items-center">
        <button className="p-1 hover:bg-gray-100 rounded transition-colors duration-200">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
}