import React from 'react';
import { Calendar, Clock, Users, FileText, LogOut } from 'lucide-react';

const navItems = [
  { icon: Users, label: 'Team' },
  { icon: Calendar, label: 'Calendar' },
  { icon: FileText, label: 'Reports' },
  { icon: Clock, label: 'Time' },
];

export function Sidebar() {
  return (
    <aside className="w-16 bg-blue-600 min-h-screen flex flex-col items-center py-4 text-white">
      <div className="w-8 h-8 bg-white text-blue-600 rounded-lg flex items-center justify-center mb-8">
        P
      </div>
      <nav className="space-y-6">
        {navItems.map((Item, index) => (
          <button
            key={index}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200 group relative"
            title={Item.label}
          >
            <Item.icon size={20} />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {Item.label}
            </span>
          </button>
        ))}
      </nav>
      <button className="mt-auto p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200">
        <LogOut size={20} />
      </button>
    </aside>
  );
}