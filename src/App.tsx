import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Trust from './components/sections/Trust'
import WhyRetirement from './components/sections/WhyRetirement'
import Benefits from './components/sections/Benefits'
import Calculator from './components/sections/Calculator'

import HowItWorks from './components/sections/HowItWorks'

import Testimonials from './components/sections/Testimonials'
import Partners from './components/sections/Partners'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/layout/Footer'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AnimatePresence>
      <div className="font-sans text-gray-600 overflow-x-hidden w-full relative min-h-screen">
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Trust />
            <WhyRetirement />
            <Benefits />
            <Calculator />

            <HowItWorks />

            <Testimonials />
            <Partners />
            <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
          </main>

          <Footer />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App
