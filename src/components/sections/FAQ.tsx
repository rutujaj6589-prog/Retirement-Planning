import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "When is the right time to start retirement planning?",
    answer: "The best time to start is as soon as you begin earning. Starting early allows you to benefit from the power of compounding, which can significantly increase your retirement corpus."
  },
  {
    question: "How much should I save for retirement?",
    answer: "A general rule of thumb is to save 15-20% of your income for retirement. However, the exact amount depends on your current lifestyle, expected expenses post-retirement, and inflation."
  },
  {
    question: "Are there any tax benefits associated with retirement plans?",
    answer: "Yes, many retirement and pension plans offer tax benefits under Section 80C and Section 10(10D) of the Income Tax Act."
  },
  {
    question: "Can I withdraw my money before retirement?",
    answer: "Most retirement plans have a lock-in period. Premature withdrawals may be allowed under specific conditions (like critical illness or home purchase), but they often come with penalties."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-text-primary"
          >
            Frequently Asked <span className="text-secondary">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-secondary border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
