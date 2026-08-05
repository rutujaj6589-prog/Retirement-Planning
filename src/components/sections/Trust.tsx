import { useRef, useEffect } from "react"
import { motion, useInView, animate, type Variants } from "framer-motion"
import { Users, Clock, ShieldCheck, Star } from "lucide-react"

const AnimatedCounter = ({ from = 0, to, suffix = "", decimals = 0 }: { from?: number, to: number, suffix?: string, decimals?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            const formatted = Number(value.toFixed(decimals)).toLocaleString('en-US')
            nodeRef.current.textContent = formatted + suffix
          }
        },
      })
      return () => controls.stop()
    }
  }, [from, to, inView, suffix, decimals])

  return <span ref={nodeRef}>{from}{suffix}</span>
}

const stats = [
  { value: 15000, suffix: "+", label: "Families Trust Us", icon: <Users className="w-8 h-8 text-white" /> },
  { value: 20, suffix: "+", label: "Years Experience", icon: <Clock className="w-8 h-8 text-white" /> },
  { value: 100, suffix: "%", label: "Claim Assistance", icon: <ShieldCheck className="w-8 h-8 text-white" /> },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Customer Rating", icon: <Star className="w-8 h-8 text-white" fill="currentColor" /> },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
}

const Trust = () => {
  return (
    <section id="trust" className="py-14 relative overflow-hidden" style={{ background: 'var(--bg-section-alternate)' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(232,160,69,0.12)' }} />
        <div className="absolute bottom-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(212,118,42,0.10)' }} />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-[20px] p-6 border flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300"
              style={{ background: '#ffffff', borderColor: '#000000', borderWidth: '1.5px' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#fafafa'
                ;(e.currentTarget as HTMLElement).style.borderColor = '#000000'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#ffffff'
                ;(e.currentTarget as HTMLElement).style.borderColor = '#000000'
                ;(e.currentTarget as HTMLElement).style.boxShadow = ''
              }}
            >
              {/* Shine */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]" />

              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #d4762a, #e8a045)', boxShadow: '0 8px 20px rgba(212,118,42,0.35)' }}>
                {stat.icon}
              </div>

              <h4 className="text-3xl font-bold mb-1 font-heading tracking-tight" style={{ background: 'linear-gradient(135deg,#e8a045,#f5c878)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                <AnimatedCounter to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </h4>

              <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--color-text-primary)' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Trust
