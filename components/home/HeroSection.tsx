'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-1/4 left-1/4 text-6xl opacity-20"
        >📖</motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-1/3 right-1/4 text-7xl opacity-20"
        >📚</motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
          className="absolute bottom-1/4 right-1/3 text-5xl opacity-20"
        >📕</motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-poppins mb-6"
        >
          <span className="gradient-text">BookHive</span>
          <br />
          <span className="text-white">Where Stories Come Alive</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Buy, sell, and exchange second‑hand books in a vibrant community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/books" className="neon-btn text-lg px-10 py-4">
            Explore Books
          </Link>
          <Link href="/sell" className="neon-btn text-lg px-10 py-4 bg-transparent border-2 border-primary text-primary hover:text-white">
            Sell Your Book
          </Link>
        </motion.div>
      </div>
    </section>
  )
}