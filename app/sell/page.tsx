'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const conditions = ['new', 'like_new', 'good', 'fair', 'poor']

export default function SellPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [condition, setCondition] = useState('good')
  const [price, setPrice] = useState('')
  const [exchangeAvailable, setExchangeAvailable] = useState(false)
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [images, setImages] = useState<File[]>([])
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login')
      } else {
        setUser(session.user)
      }
    })
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(() => {})
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setImages(prev => [...prev, ...files])
    }
  }

  const uploadImages = async (): Promise<string[]> => {
    const urls: string[] = []
    for (const file of images) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)
      formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!)
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      )
      const data = await res.json()
      if (data.secure_url) urls.push(data.secure_url)
    }
    return urls
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const uploadedUrls = await uploadImages()
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) throw new Error('Not authenticated')

      const res = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title, author, isbn, categoryId: categoryId || null,
          condition, price, exchangeAvailable, description, location,
          imageUrls: uploadedUrls
        })
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Failed to create listing')
      }
      toast.success('Book listed successfully!')
      router.push('/dashboard')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-3xl border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">List a Book for Sale</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-1">Title *</label>
              <input type="text" required value={title} onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Author *</label>
              <input type="text" required value={author} onChange={e => setAuthor(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-1">ISBN</label>
                <input type="text" value={isbn} onChange={e => setIsbn(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Category</label>
                <select value={categoryId} onChange={e => setCategoryId(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none">
                  <option value="">Select category</option>
                  {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-1">Condition *</label>
                <select required value={condition} onChange={e => setCondition(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none">
                  {conditions.map(c => (
                    <option key={c} value={c}>{c.replace('_', ' ')}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Price *</label>
                <input type="number" step="0.01" required value={price} onChange={e => setPrice(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="exchange" checked={exchangeAvailable} onChange={e => setExchangeAvailable(e.target.checked)}
                className="w-5 h-5 rounded border-gray-500 bg-white/10 text-primary focus:ring-primary" />
              <label htmlFor="exchange" className="text-gray-300">Available for exchange</label>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Description</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Location</label>
              <input type="text" value={location} onChange={e => setLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Images</label>
              <input type="file" multiple accept="image/*" onChange={handleImageChange}
                className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark" />
              {images.length > 0 && (
                <p className="text-sm text-gray-400 mt-1">{images.length} file(s) selected</p>
              )}
            </div>
            <button type="submit" disabled={loading}
              className="neon-btn w-full py-3 text-lg">
              {loading ? 'Uploading...' : 'List Book'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}