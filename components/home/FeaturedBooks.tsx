import BookCard from '@/components/ui/BookCard'

const featuredBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99, image: '/book1.jpg' },
  { id: 2, title: '1984', author: 'George Orwell', price: 9.99, image: '/book2.jpg' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 14.99, image: '/book3.jpg' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 11.99, image: '/book4.jpg' },
]

export default function FeaturedBooks() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">Featured Books</h2>
        <p className="text-gray-400 mt-2">Handpicked favorites from our community</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}