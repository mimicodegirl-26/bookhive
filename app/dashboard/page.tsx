'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [books, setBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
      } else {
        setUser(session.user)
        fetchBooks(session.access_token)
      }
    }
    checkSession()
  }, [])

  const fetchBooks = async (token: string) => {
    try {
      const res = await fetch('/api/user/books', {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setBooks(data)
      }
    } catch (err) {
      toast.error('Failed to load your books')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (!user) return null

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <button onClick={handleLogout} className="neon-btn">Logout</button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="glass p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Total Listings</p>
            <p className="text-2xl font-bold text-white">{books.length}</p>
          </div>
          <div className="glass p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Sold</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
          <div className="glass p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Exchanges</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
          <div className="glass p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Favorites</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-white">Your Listings</h2>
          <Link href="/sell" className="neon-btn">+ New Listing</Link>
        </div>

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : books.length === 0 ? (
          <div className="glass p-8 text-center rounded-2xl">
            <p className="text-gray-300 text-lg">You haven't listed any books yet.</p>
            <Link href="/sell" className="text-primary hover:underline mt-2 inline-block">Sell your first book</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book: any) => (
              <motion.div key={book.id} whileHover={{ scale: 1.02 }} className="glass p-4 rounded-2xl">
                {book.images[0] && (
                  <img src={book.images[0].url} alt={book.title} className="w-full h-40 object-cover rounded-xl mb-3" />
                )}
                <h3 className="font-bold text-white truncate">{book.title}</h3>
                <p className="text-gray-400 text-sm">{book.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary font-bold">${parseFloat(book.price).toFixed(2)}</span>
                  <span className="text-xs text-gray-500">{book.condition}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}