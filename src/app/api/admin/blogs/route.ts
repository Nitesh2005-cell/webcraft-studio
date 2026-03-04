import { NextRequest, NextResponse } from 'next/server'
import { getBlogs, saveBlog, deleteBlog } from '@/lib/db'

export async function GET() {
  return NextResponse.json(getBlogs())
}
export async function POST(req: NextRequest) {
  saveBlog(await req.json())
  return NextResponse.json({ ok: true })
}
export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  deleteBlog(id)
  return NextResponse.json({ ok: true })
}
