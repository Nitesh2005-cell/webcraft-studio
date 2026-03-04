import { NextRequest, NextResponse } from 'next/server'
import { getProjects, saveProject, deleteProject } from '@/lib/db'

export async function GET() {
  return NextResponse.json(getProjects())
}
export async function POST(req: NextRequest) {
  saveProject(await req.json())
  return NextResponse.json({ ok: true })
}
export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  deleteProject(id)
  return NextResponse.json({ ok: true })
}
