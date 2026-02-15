'use client';

import { useState } from 'react';
import { Menu, Home, Settings, BarChart3, Users, FileText, LogOut, ChevronDown } from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems = [
    { label: 'Dashboard', icon: Home, href: '#' },
    { label: 'Analytics', icon: BarChart3, href: '#' },
    { label: 'Users', icon: Users, href: '#' },
    { label: 'Reports', icon: FileText, href: '#' },
    { label: 'Settings', icon: Settings, href: '#' },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className="fixed left-0 top-16 z-30 h-[calc(100vh-64px)] w-64 bg-white border-r border-slate-200 transition-transform duration-300 overflow-y-auto md:translate-x-0"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
        suppressHydrationWarning
      >
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  <span>{item.label}</span>
                </div>
              </button>
            </div>
          ))}

          {/* Divider */}
          <div className="my-6 border-t border-slate-200" />

          {/* Logout */}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </>
  );
}
