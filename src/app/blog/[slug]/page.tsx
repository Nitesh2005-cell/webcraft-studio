import { getBlogBySlug, getBlogs } from '@/lib/db'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getBlogs(true).map(b => ({ slug: b.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug)
  if (!post || !post.published) notFound()

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-16 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-4">{post.category}</p>
        <h1 className="font-playfair font-black leading-tight mb-8 text-white" style={{ fontSize:'clamp(32px,5vw,60px)' }}>
          {post.title}
        </h1>
        <div className="text-white/65 text-sm leading-8"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      </div>
    </section>
  )
}
