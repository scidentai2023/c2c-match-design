'use client'

import { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import TopBar from '../components/layout/TopBar'
import DashboardContent from '../components/dashboard/DashboardContent'

export default function Home() {
  const [currentView, setCurrentView] = useState('overview')

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Left Sidebar Navigation */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <TopBar />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto">
          <DashboardContent view={currentView} />
        </main>
      </div>
    </div>
  )
}
