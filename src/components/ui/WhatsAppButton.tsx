'use client'
export default function WhatsAppButton({ phone }: { phone: string }) {
  const url = "https://wa.me/" + phone
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 text-sm font-medium shadow-2xl hover:scale-105 transition-transform">
      WhatsApp
    </a>
  )
}