import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement moderator authentication
    console.log("Login attempt with:", { email, password })
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-2 border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-neutral-800">Welcome Back</CardTitle>
          <CardDescription className="text-neutral-600">
            Enter your moderator credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-neutral-800">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="moderator@biust.ac.bw"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-neutral-800">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-teal-600 hover:text-teal-800"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button 
                  type="submit" 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Sign in as Moderator
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-neutral-600">
              Need help? Contact{" "}
              <a href="mailto:support@biust.ac.bw" className="text-teal-600 hover:text-teal-800">
                support
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
