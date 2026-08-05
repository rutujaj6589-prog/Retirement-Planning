import { motion, type Variants } from "framer-motion"
import { Wallet, TrendingUp, ShieldCheck, HeartHandshake, Hospital, BadgeCheck } from "lucide-react"

const benefits = [
  { icon: <Wallet className="w-6 h-6" />, title: "Regular Retirement Income", desc: "Receive a steady income after retirement and maintain your desired lifestyle." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Wealth Growth", desc: "Grow your savings over time with disciplined investments and compounding returns." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Financial Protection", desc: "Be prepared for unexpected expenses, inflation, and medical emergencies." },
  { icon: <HeartHandshake className="w-6 h-6" />, title: "Family Security", desc: "Reduce financial burden on your loved ones while securing their future." },
  { icon: <Hospital className="w-6 h-6" />, title: "Healthcare Readiness", desc: "Plan confidently for rising healthcare and medical expenses after retirement." },
  { icon: <BadgeCheck className="w-6 h-6" />, title: "Peace of Mind", desc: "Retire with confidence knowing your financial future is secure." }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
}

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 flex flex-col justify-center relative overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[160px]" style={{ background: 'rgba(232,160,69,0.09)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[130px]" style={{ background: 'rgba(212,118,42,0.07)' }} />
      </div>

      {/* Top divider line */}
      <div className="w-full h-px mb-0" style={{ background: 'linear-gradient(90deg, transparent, rgba(232,160,69,0.3), transparent)' }} />

      <div className="container px-4 relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-12"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 pt-8">
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider" style={{ background: 'rgba(232,160,69,0.12)', color: '#e8a045', border: '1px solid rgba(232,160,69,0.28)' }}>
                Your Future Benefits
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-heading leading-[1.15] tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
              Enjoy a Secure &{' '}
              <span style={{ background: 'linear-gradient(135deg,#e8a045,#f5c878)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Stress-Free Retirement
              </span>
            </motion.h2>
          </div>

          {/* Benefits list */}
          <div className="flex flex-col gap-3 pt-4">
            {benefits.map((benefit, idx) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                key={idx}
                className="group flex flex-col md:flex-row md:items-center gap-4 py-5 px-5 md:px-8 relative overflow-hidden transition-all duration-300 rounded-[20px] cursor-pointer border"
                style={{ background: '#ffffff', borderColor: '#000000', borderWidth: '1.5px' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#fafafa'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#000000'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#ffffff'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#000000'
                }}
              >
                {/* Shimmer sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8a045]/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Background number */}
                <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-6xl font-black pointer-events-none select-none font-heading opacity-5" style={{ color: '#e8a045' }}>
                  0{idx + 1}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center relative z-10 transition-all duration-300"
                  style={{ background: 'rgba(212,118,42,0.15)', color: '#e8a045', border: '1px solid rgba(232,160,69,0.2)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg,#d4762a,#e8a045)'
                    ;(e.currentTarget as HTMLElement).style.color = 'white'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(212,118,42,0.35)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.1) rotate(-6deg)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(212,118,42,0.15)'
                    ;(e.currentTarget as HTMLElement).style.color = '#e8a045'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                    ;(e.currentTarget as HTMLElement).style.transform = ''
                  }}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <div className="md:w-1/3 relative z-10 pl-2">
                  <h4 className="text-xl font-bold font-heading group-hover:text-[#e8a045] transition-colors duration-300" style={{ color: 'var(--color-text-primary)' }}>
                    {benefit.title}
                  </h4>
                </div>

                {/* Description */}
                <div className="flex-1 relative z-10">
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="w-full h-px mt-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(232,160,69,0.3), transparent)' }} />
    </section>
  )
}

export default Benefits
