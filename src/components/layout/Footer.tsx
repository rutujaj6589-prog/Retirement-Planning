import { Mail, Phone, MapPin, ArrowRight, Shield, Heart, Star } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "./Logo"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 18 }
    }
  }

  const quickLinks = ['About Us', 'Why Retirement Planning', 'Our Experts', 'Success Stories', 'Contact Support']
  const plans = ['Retirement Plans', 'Annuity & Pension', 'Guaranteed Income', 'Legacy Planning']
  const socials = [
    { label: 'f', name: 'Facebook' },
    { label: 'in', name: 'LinkedIn' },
    { label: 'tw', name: 'Twitter' },
    { label: 'ig', name: 'Instagram' },
  ]

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2040 35%, #1a1a2e 65%, #0f0e1a 100%)',
      }}
    >
      {/* Animated glowing orbs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(202,104,48,0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulseOrb 6s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'pulseOrb 8s ease-in-out infinite alternate-reverse',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(248,178,79,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Top glowing divider line */}
      <div
        className="w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(202,104,48,0.8) 30%, rgba(248,178,79,1) 50%, rgba(202,104,48,0.8) 70%, transparent 100%)',
          boxShadow: '0 0 20px rgba(248,178,79,0.6)',
        }}
      />

      {/* Newsletter bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="container px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #f8b24f, #CA6830)' }}
            >
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-lg leading-tight" style={{ color: 'white' }}>Stay Informed</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Get expert retirement tips delivered to your inbox</p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-72 px-4 py-3 rounded-xl text-sm outline-none"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
              }}
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #f8b24f, #CA6830)', color: 'white' }}
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main columns */}
      <div className="container px-4 pt-16 pb-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Column 1 — Brand */}
          <motion.div variants={itemVariants}>
            <div className="mb-5">
              <Logo variant="on-dark" />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              India's premier retirement planning and insurance advisory. We help you secure your golden years so you can dream without limits.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col gap-2 mb-6">
              {[
                { icon: Shield, text: 'IRDAI Registered Advisor' },
                { icon: Star, text: '4.9★  Rated by 10,000+ clients' },
                { icon: Heart, text: '15+ Years of Trust' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#f8b24f' }} />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg,#f8b24f,#CA6830)'
                    ;(e.currentTarget as HTMLElement).style.color = 'white'
                    ;(e.currentTarget as HTMLElement).style.border = '1px solid transparent'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'
                    ;(e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {s.label.toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg,#f8b24f,#CA6830)' }} />
              <h4 className="font-bold text-lg" style={{ color: 'white' }}>Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-sm group"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f8b24f'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#f8b24f' }} />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Insurance Plans */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg,#f8b24f,#CA6830)' }} />
              <h4 className="font-bold text-lg" style={{ color: 'white' }}>Insurance Plans</h4>
            </div>
            <ul className="space-y-3">
              {plans.map((plan, idx) => (
                <li key={idx}>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 text-sm group"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f8b24f'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#f8b24f' }} />
                    {plan}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* CTA card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-4 rounded-2xl cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(248,178,79,0.12), rgba(202,104,48,0.08))',
                border: '1px solid rgba(248,178,79,0.2)',
              }}
            >
              <p className="text-xs font-bold mb-1" style={{ color: '#f8b24f' }}>Free Consultation</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Talk to our expert advisor today — no obligations.</p>
              <div className="flex items-center gap-1 mt-2 text-xs font-semibold" style={{ color: '#f8b24f' }}>
                Book Now <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          </motion.div>

          {/* Column 4 — Contact */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg,#f8b24f,#CA6830)' }} />
              <h4 className="font-bold text-lg" style={{ color: 'white' }}>Contact Us</h4>
            </div>
            <ul className="space-y-5">
              {[
                {
                  icon: MapPin,
                  text: '123, Financial District, Bandra Kurla Complex, Mumbai — 400051',
                },
                {
                  icon: Phone,
                  text: '+91 1800-123-4567',
                },
                {
                  icon: Mail,
                  text: 'support@familyfirst.in',
                },
              ].map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 cursor-pointer group"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all group-hover:scale-110"
                    style={{ background: 'rgba(248,178,79,0.12)', border: '1px solid rgba(248,178,79,0.2)' }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: '#f8b24f' }} />
                  </div>
                  <span
                    className="text-sm leading-relaxed transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Family First Insurance. All rights reserved. | IRDAI Reg. No. 12345
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                whileHover={{ y: -1 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f8b24f'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)'}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulseOrb {
          0%   { transform: scale(1) translateY(0px); opacity: 0.7; }
          100% { transform: scale(1.15) translateY(-20px); opacity: 1; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
