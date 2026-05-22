'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiMail, HiLockClosed, HiUser, HiEye, HiEyeOff } from 'react-icons/hi'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }
    })
    if (error) setError(error.message)
    else router.push('/login?message=Check your email to confirm your account')
    setLoading(false)
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
          <div className="text-8xl mb-8">📖</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Join <span className="gradient-text">BookHive</span> today
          </h1>
          <p className="text-lg text-gray-400">
            Create your free account and start buying, selling, or exchanging books.
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
              <h2 className="text-3xl font-bold font-poppins text-white">Create Account</h2>
              <p className="text-gray-400 mt-2">Fill in the details to get started</p>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl text-sm mb-6">
                {error}
              </motion.div>
            )}

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white placeholder-gray-400" placeholder="John Doe" />
                </div>
              </div>

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
                <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters</p>
              </div>

              <button type="submit" disabled={loading} className="neon-btn w-full py-3">
                {loading ? 'Creating account...' : 'Sign Up'}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}