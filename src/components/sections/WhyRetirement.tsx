import { motion, type Variants } from "framer-motion"
import { PiggyBank, TrendingUp, ShieldCheck, Users } from "lucide-react"

const features = [
  { icon: <PiggyBank className="w-6 h-6 text-white" />, title: "Financial Independence", desc: "Create a reliable retirement income without depending on anyone." },
  { icon: <TrendingUp className="w-6 h-6 text-white" />, title: "Long-Term Wealth Growth", desc: "Benefit from disciplined investments and the power of compounding." },
  { icon: <ShieldCheck className="w-6 h-6 text-white" />, title: "Peace of Mind", desc: "Handle inflation, healthcare expenses, and emergencies confidently." },
  { icon: <Users className="w-6 h-6 text-white" />, title: "Secure Family Future", desc: "Protect your loved ones while preserving your retirement lifestyle." },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
}

const WhyRetirement = () => {
  return (
    <section id="why-retirement" className="py-10 flex flex-col justify-center relative overflow-hidden" style={{ background: 'var(--bg-section-primary)' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" style={{ background: 'rgba(232,160,69,0.18)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" style={{ background: 'rgba(212,118,42,0.10)' }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full blur-[80px] animate-[pulse_6s_ease-in-out_infinite]" style={{ background: 'rgba(232,160,69,0.10)' }} />
      </div>

      <div className="container px-4 relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-16"
        >
          <div className="space-y-4 text-center max-w-3xl mx-auto mb-10">
            <span className="badge-chip mb-2">The Reality</span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-text-primary leading-[1.1] tracking-tight">
              Why Retirement <span className="text-gradient">Planning Matters</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl font-medium" style={{ color: '#d4762a' }}>
              The earlier you plan, the greater your financial freedom after retirement.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-500 text-base md:text-lg leading-relaxed">
              Retirement planning helps you build a secure financial future, protect your family, maintain your lifestyle, and stay financially independent even after your regular income stops.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-6 border shadow-sm hover:shadow-xl transition-all group text-center flex flex-col items-center" style={{ borderColor: '#ecddc9' }}>
                <div className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #d4762a, #e8a045)', boxShadow: '0 8px 16px rgba(212,118,42,0.25)' }}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-text-primary font-heading mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyRetirement
