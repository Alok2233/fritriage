import React from 'react'
import { useLocation } from 'react-router-dom'
import { Bell, Search } from 'lucide-react'

const titles = {
  '/dashboard': 'Dashboard',
  '/dashboard/triage': 'Triage Analyzer',
  '/dashboard/tickets': 'Tickets',
  '/dashboard/settings': 'Settings',
}

export default function Navbar() {
  const { pathname } = useLocation()
  const title = titles[pathname] || 'Dashboard'

  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 sticky top-0 z-10">
      <div className="flex-1">
        <h1 className="text-base font-semibold text-gray-900 font-display">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
          <Search size={16} />
        </button>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors relative">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
        </button>
      </div>
    </header>
  )
}
