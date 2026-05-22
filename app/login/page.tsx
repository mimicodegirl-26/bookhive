'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiMail, HiLockClosed, HiEye, HiEyeOff } from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else router.push('/dashboard')
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    })
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-beige dark:from-gray-900 dark:via-black dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex w-1/2 bg-surface/90 items-center justify-center p-12"
      >
        <div className="text-center max-w-md">
          <div className="text-8xl mb-8">📚</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome back to <span className="gradient-text">BookHive</span>
          </h1>
          <p className="text-lg text-gray-400">
            Sign in to your account and continue your book journey.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-full lg:w-1/2 items-center justify-center p-6"
      >
        <div className="w-full max-w-md">
          <div className="glass p-8 md:p-10 rounded-3xl shadow-xl border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-poppins text-white">Sign In</h2>
              <p className="text-gray-400 mt-2">Enter your credentials to access your account</p>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm mb-6">
                {error}
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-400" placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiLockClosed className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-12 py-3 bg-white/10 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-400" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200">
                    {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={loading} className="neon-btn w-full py-3">
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-700" /></div>
              <div className="relative flex justify-center text-sm"><span className="px-4 bg-surface text-gray-400">or continue with</span></div>
            </div>

            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 py-3 border border-gray-700 rounded-xl hover:bg-white/10 transition-colors text-gray-200 font-medium">
              <FcGoogle className="h-5 w-5" />
              Sign in with Google
            </button>

            <p className="mt-8 text-center text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-primary font-semibold hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}