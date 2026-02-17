'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Bell,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react'

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Notices',
    href: '/dashboard/notices',
    icon: FileText
  },
  {
    title: 'Notifications',
    href: '/dashboard/notifications',
    icon: Bell
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: Users
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings
  }
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-teal-500 text-white lg:hidden"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-center bg-teal-500">
            <h1 className="text-xl font-bold text-white">Moderator Panel</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-neutral-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.title}
                </Link>
              )
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <button
              onClick={() => {
                // TODO: Implement logout
                console.log('Logout clicked')
              }}
              className="flex items-center w-full px-4 py-2 text-red-600 rounded-md hover:bg-red-50"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`min-h-screen transition-all duration-200 ease-in-out ${
          isSidebarOpen ? 'lg:ml-64' : ''
        }`}
      >
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
} 