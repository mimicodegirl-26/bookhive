const testimonials = [
  { quote: "BookHive made it so easy to sell my old textbooks!", name: "Sarah K.", role: "Student" },
  { quote: "I found rare novels at half the price. Love the exchange feature!", name: "Michael R.", role: "Book Collector" },
  { quote: "Finally a platform just for books. The community is amazing.", name: "Emily T.", role: "Teacher" },
]

export default function Testimonials() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-8">What Readers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl">
              <p className="italic text-gray-300 mb-4">“{t.quote}”</p>
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}