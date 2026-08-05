import { motion } from "framer-motion"
import { CheckCircle2, Phone } from "lucide-react"
import { Button } from "../ui/Button"

interface FinalCTAProps {
  onOpenModal?: () => void;
}

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'var(--bg-section-primary)' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(232,160,69,0.12)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: 'rgba(212,118,42,0.08)' }} />
      </div>

      <div className="container px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[560px]"
            style={{ boxShadow: '0 30px 60px rgba(212,118,42,0.15)' }}
          >
            <img
              src="/src/assets/contact.png"
              alt="Retirement Planning Consultation"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(212,118,42,0.45), rgba(212,118,42,0.08), transparent)' }} />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 left-6 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-xl"
            >
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold text-sm" style={{ color: '#1a1a2e' }}>Free Consultation Available</span>
            </motion.div>

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl text-center"
            >
              <p className="text-2xl font-extrabold font-heading" style={{ color: '#d4762a' }}>15,000+</p>
              <p className="text-xs text-gray-500 font-medium">Happy Families</p>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="badge-chip mb-6">Get In Touch</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary leading-[1.15] tracking-tight mb-5">
              Ready to secure <br />
              <span className="text-gradient">your future today?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our certified advisors will build a personalized retirement roadmap for you — completely free. Just one call away from financial freedom.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {["Free Consultation", "Customized Plan", "Certified Advisors", "No Obligations", "Response in 2 Hours", "Lifetime Support"].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#d4762a' }} />
                  <span className="font-semibold text-gray-700 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onOpenModal}
                size="lg"
                className="text-white font-bold rounded-[16px] h-16 px-8 text-lg shadow-lg transition-all hover:-translate-y-1 group relative overflow-hidden border-none"
                style={{ background: 'linear-gradient(135deg, #d4762a, #e8a045)', boxShadow: '0 8px 24px rgba(212,118,42,0.3)' }}
              >
                <span className="relative z-10">Book Free Consultation →</span>
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]" />
              </Button>
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-3 bg-white font-bold rounded-[16px] h-16 px-8 text-base hover:bg-[#d4762a]/5 transition-all shadow-sm"
                style={{ border: '2px solid rgba(212,118,42,0.25)', color: '#d4762a' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#d4762a'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,118,42,0.25)'}
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-4">100% free. No credit card required. No spam ever.</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default FinalCTA
