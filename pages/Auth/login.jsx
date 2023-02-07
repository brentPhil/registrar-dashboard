import React, { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa"
import { useAuth } from "@/context/AuthContext"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoggingIn, setIsLoggingIn] = useState(true)

  const { login, signup, currentUser } = useAuth()
  console.log(currentUser)
  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password")
      return
    }
    if (isLoggingIn) {
      try {
        await login(email, password)
      } catch (err) {
        setError("incorrect email and pass")
      }
      return
    }
    await signup(email, password)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid gap-2 w-1/3  p-4 shadow-md border bg-white">
        <h2 className="text-lg font-medium mb-4">Login</h2>
        {error && (<div className="px-3 py-2 rounded-sm border border-red-700 text-red-700 bg-red-500/30">{error}</div>)}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="username">
            Username
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600"
            onClick={submitHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
