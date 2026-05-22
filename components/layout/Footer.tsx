import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface/80 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold gradient-text mb-2">BookHive</h3>
          <p className="text-gray-400 text-sm">The neon marketplace for book lovers.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/books" className="hover:text-primary">Browse Books</Link></li>
            <li><Link href="/sell" className="hover:text-primary">Sell a Book</Link></li>
            <li><Link href="/exchanges" className="hover:text-primary">Exchanges</Link></li>
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-white">Stay in the loop</h4>
          <p className="text-sm text-gray-400 mb-3">Get notified about new arrivals and deals.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 border border-gray-700 rounded-lg text-sm bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="neon-btn px-4 py-2 text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BookHive. All rights reserved.
      </div>
    </footer>
  )
}