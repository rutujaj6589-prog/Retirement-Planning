import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "../ui/Button"
import Logo from "./Logo"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Plan", href: "#why-retirement" },
  { name: "Benefits", href: "#benefits" },
  { name: "Calculator", href: "#calculator" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
]

const Navbar = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [activeLink, setActiveLink] = useState<string>("#home")

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 140
      const current = navLinks
        .map((link) => ({ href: link.href, el: document.querySelector(link.href) as HTMLElement | null }))
        .filter((item) => item.el)
        .filter((item) => item.el!.offsetTop <= scrollPosition)
        .pop()
      if (current) setActiveLink(current.href)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => setScrolled(latest > 50))
    return unsubscribe
  }, [scrollY])

  return (
    <motion.header
      initial={false}
      animate="visible"
      variants={{ visible: { y: 0, opacity: 1 } }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(26,26,46,0.14)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="cursor-pointer">
          <Logo />
        </motion.div>

        <nav className="hidden lg:flex items-center gap-2 relative">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative px-4 py-2 font-bold text-[15px] transition-all duration-300 rounded-full ${
                activeLink === link.href
                  ? "bg-[#d4762a]/10 text-[#d4762a]"
                  : "text-[#1a1a2e] hover:text-[#d4762a]"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-[#e8a045]/10 rounded-full -z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </nav>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="text-white rounded-[16px] px-8 py-2.5 font-bold shadow-lg transition-all overflow-hidden group relative border-none"
            style={{ background: "linear-gradient(135deg, #d4762a, #e8a045)" }}
          >
            <span className="relative z-10">Talk to Expert</span>
            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Navbar
