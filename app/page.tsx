'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { BarChart3, Users, FileText, TrendingUp } from 'lucide-react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { label: 'Total Users', value: '12,543', change: '+12.5%', icon: Users, color: 'bg-blue-500/20 text-blue-400' },
    { label: 'Revenue', value: '$45,231', change: '+8.2%', icon: TrendingUp, color: 'bg-green-500/20 text-green-400' },
    { label: 'Orders', value: '8,432', change: '+23.1%', icon: FileText, color: 'bg-purple-500/20 text-purple-400' },
    { label: 'Analytics', value: '2.4k', change: '+5.3%', icon: BarChart3, color: 'bg-orange-500/20 text-orange-400' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content */}
      <main className="pt-16 md:ml-64">
        <div className="p-4 md:p-8">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
            <p className="text-muted">Here's what's happening with your business today.</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted text-sm font-medium mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-green-400 mt-2">{stat.change} from last month</p>
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
            <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
              <div className="h-72 bg-background rounded-lg flex items-center justify-center">
                <p className="text-muted">Chart placeholder - Your analytics go here</p>
              </div>
            </div>

            {/* Sidebar card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Quick Links</h2>
              <nav className="space-y-3">
                {['View Reports', 'Settings', 'Help Center', 'Documentation'].map((link) => (
                  <a key={link} href="#" className="block px-4 py-2 rounded-lg text-sm text-accent hover:bg-background transition-colors">
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

