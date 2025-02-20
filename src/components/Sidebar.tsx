import React from 'react';
import { Calendar, Clock, Users, FileText, LogOut } from 'lucide-react';

const navItems = [
  { icon: Users, label: 'Team' },
  { icon: Calendar, label: 'Calendar' },
  { icon: FileText, label: 'Reports' },
  { icon: Clock, label: 'Time' },
];

const employees = new Array(10).fill({
  name: 'Bhaskar Sharma',
  role: 'Sales Manager | Sales Dept.',
  image: 'photo.jpeg'
});

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 min-h-screen flex flex-col py-4 text-white">
      <div className="w-12 h-12 bg-white text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 font-bold text-lg">
        P
      </div>

      <div className="space-y-2 px-4">
        {employees.map((employee, index) => (
          <div key={index} className="flex items-center p-2 rounded-lg hover:bg-blue-800 cursor-pointer">
            <img src={employee.image} alt={employee.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <p className="text-sm font-medium">{employee.name}</p>
              <p className="text-xs opacity-75">{employee.role}</p>
            </div>
          </div>
        ))}
      </div>

      <nav className="mt-6 px-4">
        {navItems.map((item, index) => (
          <button key={index} className="flex items-center p-2 w-full hover:bg-blue-800 rounded-lg">
            <item.icon size={20} className="mr-3" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto px-4">
        <button className="flex items-center p-2 w-full text-red-300 hover:bg-blue-800 rounded-lg">
          <LogOut size={20} className="mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}
