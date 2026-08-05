import { motion } from "framer-motion"
import { Quote, ArrowRight } from "lucide-react"

const stories = [
  {
    title: "From Debt to a ₹5 Cr Corpus",
    name: "Dr. Anand Desai & Family",
    age: "Retired at 58",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1000&auto=format&fit=crop",
    quote: "We were worried about medical inflation eating into our savings. Family First not only secured our health but also structured a tax-free income stream that lets us travel the world.",
    highlight: "Secured ₹1.5L Monthly Tax-Free Income"
  },
  {
    title: "Securing the Grandchildren's Future",
    name: "Mrs. Kavita Ranganathan",
    age: "Retired at 62",
    image: "https://images.unsplash.com/photo-1596489370008-012ce4eb8383?q=80&w=1000&auto=format&fit=crop",
    quote: "After losing my husband, I was overwhelmed. The advisors here held my hand, consolidated my assets, and set up a legacy trust for my grandchildren. True peace of mind.",
    highlight: "Created a ₹2 Cr Legacy Trust"
  }
]

const SuccessStories = () => {
  return (
    <section className="py-24 bg-text-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-b from-primary to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 font-heading"
            >
              Real Families. <br/><span className="text-accent-light">Real Success.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              Read how we've transformed the retirement dreams of Indian families into reality.
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card-dark rounded-3xl overflow-hidden flex flex-col md:flex-row group cursor-pointer"
            >
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-text-primary/80 to-transparent"></div>
              </div>
              
              <div className="md:w-3/5 p-8 relative flex flex-col justify-center">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent-light text-xs font-bold rounded-full mb-4 w-fit">
                  {story.highlight}
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{story.title}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow italic">
                  "{story.quote}"
                </p>
                <div>
                  <p className="font-bold text-white">{story.name}</p>
                  <p className="text-sm text-primary">{story.age}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-accent-light font-bold hover:text-white transition-colors group">
            Read all success stories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
