import { motion } from "framer-motion"
import { Card } from "../ui/Card"
import { Button } from "../ui/Button"
import { ArrowRight } from "lucide-react"

const experts = [
  {
    name: "Vikram Sharma",
    designation: "Retirement Planner",
    experience: "15+ Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
    desc: "Specializes in inflation-beating SIPs and guaranteed return policies."
  },
  {
    name: "Pooja Desai",
    designation: "Wealth Advisor",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    desc: "Helped 2000+ individuals secure their post-retirement lifestyles."
  },
  {
    name: "Rahul Verma",
    designation: "Tax & Insurance Expert",
    experience: "18+ Years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
    desc: "Master at structuring premium waivers and tax-free maturities."
  },
  {
    name: "Neha Kapoor",
    designation: "Financial Strategist",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
    desc: "Focuses on maximizing returns while ensuring 100% capital safety."
  }
]

const Experts = () => {
  return (
    <section id="experts" className="py-10 bg-bg-primary relative overflow-hidden">
      <div className="container px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-4">
              Our Retirement <span className="text-primary">Experts</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl">
              Talk to certified professionals who understand exactly what it takes to fund a peaceful retirement.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="border-gray-200 text-text-primary hover:bg-gray-50 rounded-[16px]">
              View All Experts
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-[24px] overflow-hidden border-border group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary z-10 shadow-sm">
                    {expert.experience}
                  </div>
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-text-primary font-heading mb-1">{expert.name}</h3>
                  <p className="text-secondary text-sm font-bold mb-3">{expert.designation}</p>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{expert.desc}</p>
                  
                  <div className="flex items-center text-primary font-bold text-sm group-cursor-pointer">
                    Know More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experts
