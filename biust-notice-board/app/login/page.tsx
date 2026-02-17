'use client'
import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-100 p-6 md:p-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="w-32 h-10 bg-teal-500 flex items-center justify-center mx-auto mb-4">
            <h1 className="text-2xl font-bold text-white">Moderator</h1>
          </div>
          <p className="mt-2 text-sm text-neutral-800">Access the moderator dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
