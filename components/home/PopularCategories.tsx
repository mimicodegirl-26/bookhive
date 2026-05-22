import Link from 'next/link'

const categories = [
  { name: 'Fiction', icon: '📖', slug: 'fiction' },
  { name: 'Non-Fiction', icon: '📚', slug: 'non-fiction' },
  { name: 'Science', icon: '🔬', slug: 'science' },
  { name: 'Technology', icon: '💻', slug: 'technology' },
  { name: 'Romance', icon: '❤️', slug: 'romance' },
  { name: 'Mystery', icon: '🕵️', slug: 'mystery' },
]

export default function PopularCategories() {
  return (
    <section className="bg-surface/30 backdrop-blur-sm py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">Popular Categories</h2>
          <p className="text-gray-400 mt-2">Find your next read by genre</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/books?category=${cat.slug}`}
              className="glass p-6 rounded-xl flex flex-col items-center gap-3 hover:shadow-md transition-shadow group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="font-medium text-sm text-gray-300 group-hover:text-primary transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}