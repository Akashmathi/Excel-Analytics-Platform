import { redirect } from "next/navigation"
import { LoginForm } from "@/components/login-form"

export default function HomePage() {
  // In a real app, check authentication status here
  const isAuthenticated = false

  if (isAuthenticated) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Excel Analytics</h1>
          <p className="text-gray-600">Transform your data into insights</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
