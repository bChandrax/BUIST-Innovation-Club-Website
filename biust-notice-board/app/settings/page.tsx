export default function SettingsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="max-w-2xl space-y-6">
        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Display Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your display name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button className="w-12 h-6 bg-gray-200 rounded-full relative">
                <span className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <button className="w-12 h-6 bg-gray-200 rounded-full relative">
                <span className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 