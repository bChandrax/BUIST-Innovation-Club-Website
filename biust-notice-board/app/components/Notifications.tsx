import React, { useState, useEffect } from 'react';
import { getNotifications } from '../../lib/firestore';

interface CountdownEvent {
  title: string;
  date: string;
  daysLeft: number;
}

interface Notification {
  id: string;
  title: string;
  content: string;
  priority: number;
  isActive: boolean;
  createdAt: Date;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback events
  const fallbackEvents: CountdownEvent[] = [
    {
      title: "Registration Deadline",
      date: "2024-04-15",
      daysLeft: 5
    },
    {
      title: "Mid-term Exams",
      date: "2024-04-20",
      daysLeft: 10
    }
  ];

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        const fetchedNotifications = await getNotifications(5);
        setNotifications(fetchedNotifications as Notification[]);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="w-full space-y-4">
      {loading ? (
        <div className="text-center py-4">
          <p>Loading notifications...</p>
        </div>
      ) : (
        <>
          {/* Firebase Notifications */}
          {notifications.map((notification, index) => (
            <div key={notification.id} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg w-full">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 flex-grow">
                  <h3 className="text-sm font-medium text-red-800">{notification.title}</h3>
                  <p className="text-sm text-red-700 mt-1">{notification.content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Fallback Important Notification if no Firebase notifications */}
          {notifications.length === 0 && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg w-full">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 flex-grow">
                  <h3 className="text-sm font-medium text-red-800">Important Notice</h3>
                  <p className="text-sm text-red-700 mt-1">
                    All students must complete their course registration by April 15th
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Countdown Events */}
          {fallbackEvents.map((event, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-blue-600">{event.daysLeft} days left</p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Notifications; 