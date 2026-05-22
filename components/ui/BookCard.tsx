'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BookProps {
  book: {
    id: number
    title: string
    author: string
    price: number
    image: string
  }
}

export default function BookCard({ book }: BookProps) {
  return (
    <Link href={`/books/${book.id}`}>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        className="glass p-4 rounded-2xl cursor-pointer group"
      >
        <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center overflow-hidden">
          <span className="text-5xl group-hover:scale-110 transition-transform">📚</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg truncate text-white">{book.title}</h3>
          <p className="text-gray-400 text-sm">{book.author}</p>
          <p className="text-primary font-bold mt-2 text-xl">${book.price.toFixed(2)}</p>
        </div>
      </motion.div>
    </Link>
  )
}