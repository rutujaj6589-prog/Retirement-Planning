import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh & Priya Nair",
    location: "Bangalore",
    text: "We wanted to ensure we could travel without taking on massive debt. Family First structured an incredible plan that locked in our corpus. We sleep peacefully now.",
    image: "https://images.unsplash.com/photo-1596489370008-012ce4eb8383?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Arvind Gupta",
    location: "Delhi",
    text: "The guaranteed pension benefit was the selling point for me. Knowing that my retirement fund will pay me monthly is the ultimate peace of mind.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Meera Reddy",
    location: "Hyderabad",
    text: "I was confused by all the options online. The advisors here didn't just sell me a policy; they actually explained inflation and designed a roadmap for my 60s.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=200&auto=format&fit=crop"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 relative w-full max-w-[100vw] overflow-hidden" style={{ background: 'var(--bg-section-primary)' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" style={{ background: 'rgba(232,160,69,0.18)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]" style={{ background: 'rgba(212,118,42,0.10)' }} />
      </div>

      <div className="container px-4 relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-chip mb-6">Success Stories</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary font-heading mb-6 tracking-tight mt-3">
            Hear From Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Over 15,000 families trust us with their retirement future. Here's what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-white rounded-[32px] p-8 h-full border shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(212,118,42,0.12)] transition-all duration-300 flex flex-col relative overflow-hidden" style={{ borderColor: '#ecddc9' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,118,42,0.3)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#ecddc9'}
              >
                {/* Top shimmer bar */}
                <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, #d4762a, #e8a045, #d4762a)' }} />

                <Quote className="w-12 h-12 mb-6 group-hover:scale-110 transition-all duration-500" style={{ color: 'rgba(212,118,42,0.15)' }} />

                <div className="flex mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="currentColor" style={{ color: '#e8a045' }} />
                  ))}
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-base group-hover:text-gray-800 transition-colors">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: '#ecddc9' }}>
                  <div className="relative">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-base font-heading" style={{ color: '#1a1a2e' }}>{t.name}</h4>
                    <p className="text-gray-500 text-sm font-medium">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
