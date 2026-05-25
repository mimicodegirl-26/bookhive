import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'

export async function GET(request: Request) {
  const user = await getCurrentUser(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const books = await prisma.book.findMany({
    where: { sellerId: user.id },
    include: { images: true, category: true },
    orderBy: { createdAt: 'desc' }
  })

  return NextResponse.json(books)
}