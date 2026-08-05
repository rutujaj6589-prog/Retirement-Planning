import { motion, type Variants } from "framer-motion"
import { ClipboardEdit, FileCheck, PhoneCall, ShieldCheck } from "lucide-react"

const steps = [
  { title: "Share Details", desc: "Tell us about your current assets, liabilities, and retirement goals.", icon: <ClipboardEdit className="w-10 h-10" /> },
  { title: "Receive Personalized Plan", desc: "Our algorithm calculates the exact retirement corpus you will need.", icon: <FileCheck className="w-10 h-10" /> },
  { title: "Talk with Expert", desc: "A SEBI registered advisor will explain the blueprint.", icon: <PhoneCall className="w-10 h-10" /> },
  { title: "Secure Your Future", desc: "Start your investment journey with complete peace of mind.", icon: <ShieldCheck className="w-10 h-10" /> }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-10 relative overflow-hidden" style={{ background: 'var(--bg-section-alternate)' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" style={{ background: 'rgba(232,160,69,0.18)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite_reverse]" style={{ background: 'rgba(212,118,42,0.08)' }} />
      </div>

      <div className="container px-4 relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="badge-chip mb-6">Simple Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary font-heading mb-6 tracking-tight mt-3">
            How It Works
          </h2>
          <p className="text-lg text-gray-500">
            A simple 4-step process to guarantee your peaceful retirement.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Static connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] z-0" style={{ background: 'rgba(236,221,201,0.8)' }} />

          {/* Animated glow line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[3px] z-0 origin-left"
            style={{ background: 'linear-gradient(90deg, #d4762a 0%, #e8a045 50%, #d4762a 100%)', boxShadow: '0 0 14px rgba(232,160,69,0.55)' }}
          />

          {/* Moving particle */}
          <motion.div
            initial={{ left: "10%", opacity: 0 }}
            whileInView={{ left: "90%", opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:block absolute top-[57px] w-2 h-2 rounded-full z-10"
            style={{ background: '#e8a045', boxShadow: '0 0 10px rgba(232,160,69,1)' }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Icon Orb */}
                <div className="w-[120px] h-[120px] rounded-full bg-white flex items-center justify-center mb-8 transition-all duration-500 relative z-20 border group-hover:shadow-[0_20px_40px_rgba(212,118,42,0.22)]" style={{ boxShadow: '0 8px 30px rgba(26,26,46,0.05)', borderColor: '#ecddc9' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,118,42,0.35)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#ecddc9'}
                >
                  <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center group-hover:transition-all duration-500 relative overflow-hidden" style={{ background: '#fdf6ec' }}>
                    <div className="group-hover:hidden flex items-center justify-center w-full h-full">
                      <div style={{ color: '#d4762a' }}>{step.icon}</div>
                    </div>
                    <div className="hidden group-hover:flex items-center justify-center w-full h-full" style={{ background: 'linear-gradient(135deg,#d4762a,#e8a045)' }}>
                      <div style={{ color: 'white' }}>{step.icon}</div>
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" style={{ background: 'linear-gradient(135deg,#d4762a,#e8a045)' }}>
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="bg-white/70 backdrop-blur-sm px-6 py-8 rounded-[32px] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] group-hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] group-hover:bg-white transition-all duration-300 h-full w-full max-w-[280px]" style={{ borderColor: '#ecddc9' }}>
                  <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-[#d4762a] transition-colors" style={{ color: '#1a1a2e' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
