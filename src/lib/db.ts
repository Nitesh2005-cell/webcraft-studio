import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')

function readJSON<T>(file: string): T[] {
  const filePath = path.join(DATA_DIR, file)
  if (!fs.existsSync(filePath)) return []
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

function writeJSON<T>(file: string, data: T[]) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify(data, null, 2))
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  featured: boolean
  gradient: string
  createdAt: string
}

export function getProjects(): Project[] { return readJSON<Project>('projects.json') }
export function saveProject(p: Project) {
  const all = getProjects()
  const idx = all.findIndex(x => x.id === p.id)
  if (idx >= 0) all[idx] = p; else all.push(p)
  writeJSON('projects.json', all)
}
export function deleteProject(id: string) {
  writeJSON('projects.json', getProjects().filter(p => p.id !== id))
}

export type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  published: boolean
  createdAt: string
}

export function getBlogs(onlyPublished = false): BlogPost[] {
  const all = readJSON<BlogPost>('blogs.json')
  return onlyPublished ? all.filter(b => b.published) : all
}
export function getBlogBySlug(slug: string) {
  return getBlogs().find(b => b.slug === slug)
}
export function saveBlog(b: BlogPost) {
  const all = getBlogs()
  const idx = all.findIndex(x => x.id === b.id)
  if (idx >= 0) all[idx] = b; else all.push(b)
  writeJSON('blogs.json', all)
}
export function deleteBlog(id: string) {
  writeJSON('blogs.json', getBlogs().filter(b => b.id !== id))
}
