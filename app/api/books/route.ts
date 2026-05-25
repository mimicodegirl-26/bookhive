import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function POST(request: Request) {
  const user = await getCurrentUser(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const { title, author, isbn, categoryId, condition, price, exchangeAvailable, description, location, imageUrls } = body

  if (!title || !author || !condition || !price) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const book = await prisma.book.create({
    data: {
      title,
      author,
      isbn,
      categoryId,
      condition,
      price: parseFloat(price),
      exchangeAvailable: exchangeAvailable || false,
      description,
      location,
      sellerId: user.id,
      images: {
        create: imageUrls?.map((url: string) => ({ url })) || []
      }
    },
    include: { images: true }
  })

  return NextResponse.json(book, { status: 201 })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const query = searchParams.get('q')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const condition = searchParams.get('condition')
  const exchangeOnly = searchParams.get('exchange') === 'true'

  const where: any = {}

  if (query) {
    where.OR = [
      { title: { contains: query, mode: 'insensitive' } },
      { author: { contains: query, mode: 'insensitive' } },
    ]
  }
  if (category) where.categoryId = category
  if (minPrice || maxPrice) {
    where.price = {
      ...(minPrice && { gte: parseFloat(minPrice) }),
      ...(maxPrice && { lte: parseFloat(maxPrice) }),
    }
  }
  if (condition) where.condition = condition
  if (exchangeOnly) where.exchangeAvailable = true

  const books = await prisma.book.findMany({
    where,
    include: { images: true, category: true, seller: { select: { id: true, name: true, email: true } } },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(books)
}