'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { BarChart3, Users, FileText, TrendingUp } from 'lucide-react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12.5%', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'Revenue', value: '$45,231', change: '+8.2%', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
    { label: 'Orders', value: '8,432', change: '+23.1%', icon: FileText, color: 'bg-purple-100 text-purple-600' },
    { label: 'Analytics', value: '2.4k', change: '+5.3%', icon: BarChart3, color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content */}
      <main className="pt-16 md:ml-64">
        <div className="p-4 md:p-8 bg-slate-50">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, John!</h1>
            <p className="text-slate-600">Here's what's happening with your business today.</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-600 text-sm font-medium mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-2">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main chart area */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
              <div className="h-72 bg-slate-100 rounded-lg flex items-center justify-center">
                <p className="text-slate-500">Chart placeholder - Your analytics go here</p>
              </div>
            </div>

            {/* Sidebar card */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h2>
              <nav className="space-y-3">
                {['View Reports', 'Settings', 'Help Center', 'Documentation'].map((link) => (
                  <a key={link} href="#" className="block px-4 py-2 rounded-lg text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

