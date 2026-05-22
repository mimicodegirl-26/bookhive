import BookCard from '@/components/ui/BookCard'

const latestBooks = [
  { id: 5, title: 'Atomic Habits', author: 'James Clear', price: 15.99, image: '/book5.jpg' },
  { id: 6, title: 'Sapiens', author: 'Yuval Noah Harari', price: 13.99, image: '/book6.jpg' },
  { id: 7, title: 'The Alchemist', author: 'Paulo Coelho', price: 10.99, image: '/book7.jpg' },
  { id: 8, title: 'Educated', author: 'Tara Westover', price: 16.99, image: '/book8.jpg' },
]

export default function LatestBooks() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">Latest Uploads</h2>
        <p className="text-gray-400 mt-2">Freshly listed books waiting for a new home</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}