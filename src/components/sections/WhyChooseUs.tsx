import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "../ui/Button"

const features = [
  { title: "SEBI Registered Advisors", desc: "Our planners hold the highest certifications." },
  { title: "Personalized Strategy", desc: "No cookie-cutter plans. Everything is custom." },
  { title: "100% Transparent Advice", desc: "We explain exactly where every rupee goes." },
  { title: "Top Insurance Partners", desc: "Access to the best plans across 15+ companies." }
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary font-heading leading-tight">
              Why 15,000+ Families Chose <br/>
              <span className="text-gradient">Family First</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              We don't just sell policies; we build lifelong relationships. Our holistic approach to retirement planning ensures that your wealth grows securely while your family stays protected against uncertainties.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-bold text-text-primary">{feature.title}</span>
                  </div>
                  <p className="text-sm text-text-secondary">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <Button className="group bg-text-primary hover:bg-primary text-white text-lg h-14 px-8 rounded-full">
              Start Your Plan <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Visual Content (Magazine Style Collage) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative h-[600px]"
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 scale-95 blur-xl"></div>
            
            {/* Main Image */}
            <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop" 
                alt="Retirement Planning Consultation" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Info Card */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-3xl z-20 shadow-2xl max-w-xs border border-white/40"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                </div>
                <div className="text-sm font-bold text-text-primary">
                  4.9/5 Rating
                </div>
              </div>
              <p className="text-sm text-text-secondary font-medium">From over 500+ verified Google Reviews.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
