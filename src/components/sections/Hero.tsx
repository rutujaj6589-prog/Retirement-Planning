import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X } from "lucide-react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
    badge: "Financial Freedom Achieved",
    titleLine1: "Retirement Isn't the End—",
    titleLine2: "It's a New Beginning",
    description: "The right retirement plan allows you to travel, spend quality time with family, pursue hobbies, and enjoy every stage of life without financial worries.",
    benefits: ["Lifetime Financial Security", "Inflation Protection", "Tax Saving Opportunities", "Flexible Investment Options"]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&auto=format&fit=crop",
    badge: "Legacy Planning Secured",
    titleLine1: "Leave A Legacy.",
    titleLine2: "Protect Your Wealth.",
    description: "Ensure a smooth and tax-efficient transfer of your life's wealth to your next generation, securing their future unconditionally.",
    benefits: ["Estate Planning", "Wealth Transfer", "Zero Tax Liability", "Asset Protection"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop",
    badge: "Health Completely Secured",
    titleLine1: "Health & Wealth.",
    titleLine2: "Completely Protected.",
    description: "Build a dedicated corpus for any medical emergencies post-60. Enjoy top-tier healthcare without draining your savings.",
    benefits: ["Medical Corpus", "Critical Illness Cover", "Cashless Facilities", "Peace of Mind"]
  }
]

interface HeroProps {
  isModalOpen?: boolean
  setIsModalOpen?: (isOpen: boolean) => void
}

const Hero = ({ isModalOpen = false, setIsModalOpen = () => {} }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (isModalOpen) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isModalOpen])

  return (
    <>
      {/* ── HERO ── full-width, no inner card ── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 px-4 lg:px-8"
        style={{ background: 'var(--bg-section-primary)' }}
      >
        {/* Soft ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[130px]" style={{ background: 'rgba(232,160,69,0.18)' }} />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[110px]" style={{ background: 'rgba(212,118,42,0.08)' }} />
        </div>

        {/* Slider Container */}
        <div className="w-full max-w-[1300px] mx-auto rounded-[40px] overflow-hidden relative flex flex-col shadow-2xl bg-[#fff8f0] border z-10" style={{ borderColor: 'rgba(232,160,69,0.2)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row w-full relative"
            >
              {/* LEFT — full-bleed image */}
              <div className="relative w-full lg:w-1/2 min-h-[420px] lg:min-h-[600px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                    maskImage: "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
                  }}
                />
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 bg-white/95 px-5 py-3.5 rounded-[16px] flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border"
                  style={{ borderColor: 'rgba(232,160,69,0.2)' }}
                >
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[15px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{slides[currentSlide].badge}</span>
                </motion.div>
              </div>

              {/* RIGHT — content, white card background */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-16 lg:py-20 z-10 bg-white">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl lg:text-5xl font-bold font-heading leading-[1.2] mb-6"
                  style={{ color: '#1b3b2c' }}
                >
                  {slides[currentSlide].titleLine1}<br />
                  <span style={{ color: '#1b3b2c' }}>
                    {slides[currentSlide].titleLine2}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg leading-relaxed mb-10"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {slides[currentSlide].benefits.map((benefit, idx) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      key={idx}
                      className="flex items-center gap-3 px-5 py-4 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
                      style={{ borderColor: 'rgba(232,160,69,0.2)' }}
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#e8a045' }} />
                      <span className="text-sm font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    size="lg"
                    className="text-white text-lg h-14 px-10 rounded-full shadow-lg transition-all hover:-translate-y-1 w-max border-none"
                    style={{ background: 'linear-gradient(135deg, #d4762a, #e8a045)', boxShadow: '0 8px 28px rgba(212,118,42,0.35)' }}
                  >
                    Book Free Consultation
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 right-8 lg:bottom-10 lg:right-16 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="h-2.5 rounded-full transition-all duration-500"
              style={{
                width: currentSlide === index ? '2rem' : '0.625rem',
                background: currentSlide === index
                  ? 'linear-gradient(90deg,#d4762a,#e8a045)'
                  : 'rgba(212,118,42,0.3)'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[32px] p-8 md:p-10 w-full max-w-lg shadow-2xl relative overflow-hidden"
                style={{ border: '1px solid #ecddc9' }}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[40px] opacity-40 pointer-events-none" style={{ background: 'rgba(232,160,69,0.4)' }} />

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-all hover:rotate-90 duration-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-3xl font-bold mb-2 font-heading pr-12" style={{ color: '#1a1a2e' }}>
                  Get Your FREE Retirement Plan
                </h3>
                <p className="text-gray-500 mb-8">
                  Leave your details and our wealth advisor will contact you within 2 hours.
                </p>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false) }}>
                  <Input placeholder="Full Name" className="bg-gray-50 border-gray-200 rounded-[16px] h-14" />
                  <Input placeholder="Phone Number" className="bg-gray-50 border-gray-200 rounded-[16px] h-14" />
                  <Input type="email" placeholder="Email Address" className="bg-gray-50 border-gray-200 rounded-[16px] h-14" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Current Age" type="number" className="bg-gray-50 border-gray-200 rounded-[16px] h-14" />
                    <Input placeholder="City" className="bg-gray-50 border-gray-200 rounded-[16px] h-14" />
                  </div>
                  <Button
                    size="lg"
                    className="w-full text-lg mt-4 text-white font-bold rounded-[16px] h-16 transition-all border-none"
                    style={{ background: 'linear-gradient(135deg,#d4762a,#e8a045)', boxShadow: '0 8px 24px rgba(212,118,42,0.3)' }}
                  >
                    Book Consultation Now →
                  </Button>
                  <p className="text-[11px] text-center text-gray-400 mt-4">
                    By clicking, you agree to our Terms & Privacy Policy. 100% Secure.
                  </p>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Hero
