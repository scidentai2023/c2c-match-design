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
        className={`fixed left-0 top-16 z-30 h-[calc(100vh-64px)] w-64 bg-card border-r border-border transition-transform duration-300 overflow-y-auto md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="space-y-2 p-4">
          {menuItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-card-foreground hover:bg-background transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                  <span>{item.label}</span>
                </div>
              </button>
            </div>
          ))}

          {/* Divider */}
          <div className="my-6 border-t border-border" />

          {/* Logout */}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-destructive hover:bg-background transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    </>
  );
}
