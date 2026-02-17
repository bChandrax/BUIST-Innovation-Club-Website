'use client'

import { useState } from 'react'
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  Edit,
  Trash,
  Eye,
  CheckCircle,
  XCircle
} from 'lucide-react'

const notices = [
  {
    id: 1,
    title: 'Academic Calendar 2024',
    category: 'Academic',
    status: 'published',
    author: 'Dr. Smith',
    date: '2024-03-15',
    views: 1234
  },
  {
    id: 2,
    title: 'Sports Day Announcement',
    category: 'Events',
    status: 'pending',
    author: 'Sports Dept.',
    date: '2024-03-14',
    views: 567
  },
  {
    id: 3,
    title: 'Library Maintenance',
    category: 'Facilities',
    status: 'draft',
    author: 'Library Staff',
    date: '2024-03-13',
    views: 0
  },
  {
    id: 4,
    title: 'Scholarship Applications',
    category: 'Academic',
    status: 'published',
    author: 'Financial Aid',
    date: '2024-03-12',
    views: 2345
  }
]

export default function NoticesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-800">Notices</h1>
          <p className="text-neutral-600">Manage and publish notices</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">
          <Plus className="w-5 h-5 mr-2" />
          New Notice
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search notices..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <button className="flex items-center px-4 py-2 border border-slate-200 rounded-md hover:bg-slate-50">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </button>
      </div>

      {/* Notices Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-neutral-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {notices.map((notice) => (
                <tr key={notice.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-neutral-800">
                      {notice.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        notice.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : notice.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {notice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {notice.author}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {notice.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {notice.views}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 hover:bg-slate-100 rounded">
                        <Eye className="w-4 h-4 text-neutral-600" />
                      </button>
                      <button className="p-1 hover:bg-slate-100 rounded">
                        <Edit className="w-4 h-4 text-teal-600" />
                      </button>
                      <button className="p-1 hover:bg-slate-100 rounded">
                        <Trash className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 