import React from 'react';
import Image from 'next/image';

interface NotificationItem {
  title: string;
  description: string;
  date: string;
  type: 'major' | 'event';
  daysLeft?: number;
}

const Notification: React.FC = () => {
  const notifications: NotificationItem[] = [
    {
      title: "Semester Registration",
      description: "Registration for the new semester is now open",
      date: "2024-03-20",
      type: "major",
    },
    {
      title: "Research Symposium",
      description: "Annual research symposium for all departments",
      date: "2024-04-15",
      type: "event",
      daysLeft: 25,
    },
    {
      title: "Scholarship Applications",
      description: "Merit-based scholarship applications are now open",
      date: "2024-03-25",
      type: "major",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-8 mb-6">
        <div className="w-24 h-8 bg-teal-500 flex items-center justify-center">
          <span className="text-white text-xl font-semibold capitalize leading-7">Updates</span>
        </div>
        <span className="text-neutral-800 text-xl font-semibold capitalize leading-7">Important</span>
      </div>

      <div className="space-y-6">
        {notifications.map((notification, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start gap-4">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                notification.type === 'major' ? 'bg-red-500' : 'bg-blue-500'
              }`} />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-neutral-800 mb-1">
                  {notification.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-2">
                  {notification.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    {notification.date}
                  </span>
                  {notification.type === 'event' && notification.daysLeft && (
                    <span className="text-xs font-medium text-teal-500">
                      {notification.daysLeft} days left
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification; 