'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Browse', href: '/books' },
  { name: 'Sell', href: '/sell' },
  { name: 'Exchanges', href: '/exchanges' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold gradient-text">📚 BookHive</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-primary transition-colors font-medium">
                {link.name}
              </Link>
            ))}
            <Link href="/login" className="neon-btn">
              Sign In
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-300">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/90 backdrop-blur-lg border-t border-white/10"
          >
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:text-primary" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Link href="/login" className="neon-btn text-center" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}