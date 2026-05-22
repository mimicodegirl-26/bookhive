import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <div className="glass bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl p-12 md:p-20 shadow-xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">Ready to Start Your Book Journey?</h2>
        <p className="text-lg text-gray-300 mb-8">Join thousands of readers who buy, sell, and exchange books every day.</p>
        <Link href="/register" className="neon-btn text-lg px-10 py-4 inline-block">
          Sign Up Free
        </Link>
      </div>
    </section>
  )
}