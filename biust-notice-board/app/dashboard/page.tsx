'use client'

import {
  Users,
  FileText,
  Bell,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const stats = [
  {
    title: 'Total Notices',
    value: '156',
    icon: FileText,
    change: '+12%',
    trend: 'up'
  },
  {
    title: 'Active Users',
    value: '2,345',
    icon: Users,
    change: '+8%',
    trend: 'up'
  },
  {
    title: 'Notifications',
    value: '89',
    icon: Bell,
    change: '-3%',
    trend: 'down'
  },
  {
    title: 'Approval Rate',
    value: '94%',
    icon: CheckCircle,
    change: '+2%',
    trend: 'up'
  }
]

const recentActivities = [
  {
    type: 'notice',
    title: 'New Academic Calendar Released',
    status: 'published',
    time: '2 hours ago',
    author: 'Dr. Smith'
  },
  {
    type: 'notice',
    title: 'Sports Day Announcement',
    status: 'pending',
    time: '4 hours ago',
    author: 'Sports Dept.'
  },
  {
    type: 'user',
    title: 'New User Registration',
    status: 'completed',
    time: '5 hours ago',
    author: 'John Doe'
  },
  {
    type: 'notification',
    title: 'System Maintenance',
    status: 'scheduled',
    time: '1 day ago',
    author: 'IT Department'
  }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-neutral-800">Dashboard Overview</h1>
        <p className="text-neutral-600">Welcome back to your moderator dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">{stat.title}</p>
                <p className="text-2xl font-bold text-neutral-800 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="p-3 bg-teal-50 rounded-full">
                <stat.icon className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span
                className={`text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-neutral-600 ml-2">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-neutral-800">
            Recent Activities
          </h2>
        </div>
        <div className="divide-y divide-slate-200">
          {recentActivities.map((activity, index) => (
            <div key={index} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-teal-50 rounded-full">
                    {activity.type === 'notice' ? (
                      <FileText className="w-5 h-5 text-teal-600" />
                    ) : activity.type === 'user' ? (
                      <Users className="w-5 h-5 text-teal-600" />
                    ) : (
                      <Bell className="w-5 h-5 text-teal-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-800">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      By {activity.author}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : activity.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : activity.status === 'scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {activity.status}
                  </span>
                  <span className="text-sm text-neutral-600 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 