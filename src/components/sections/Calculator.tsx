import { useState } from "react"
import { Card } from "../ui/Card"
import { motion } from "framer-motion"

const Calculator = () => {
  const [currentAge, setCurrentAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(60)
  const [monthlySIP, setMonthlySIP] = useState(10000)

  const yearsToInvest = Math.max(1, retirementAge - currentAge)
  const totalInvestment = monthlySIP * 12 * yearsToInvest
  const monthlyRate = 0.12 / 12
  const totalMonths = yearsToInvest * 12
  const estimatedCorpus = Math.round(monthlySIP * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)

  return (
    <section id="calculator" className="py-16 relative overflow-hidden" style={{ background: 'var(--bg-section-primary)' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(232,160,69,0.15)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(212,118,42,0.10)' }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="badge-chip mb-3">Retirement Calculator</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary leading-tight mt-3">
              See how much you need for a comfortable <span className="text-gradient">retirement</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 lg:p-10 rounded-[24px] shadow-xl bg-white relative overflow-hidden" style={{ border: '1px solid #ecddc9' }}>
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #d4762a, #e8a045)' }} />

              <div className="space-y-8 relative z-10">
                {[
                  { label: "Current Age", value: currentAge, setter: setCurrentAge, min: 20, max: 55, unit: "Years" },
                  { label: "Retirement Age", value: retirementAge, setter: setRetirementAge, min: 45, max: 70, unit: "Years" },
                  { label: "Monthly Investment", value: monthlySIP, setter: setMonthlySIP, min: 5000, max: 100000, step: 1000, unit: "₹" },
                ].map(({ label, value, setter, min, max, step, unit }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2">
                      <label className="font-bold" style={{ color: '#1a1a2e' }}>{label}</label>
                      <span className="font-bold px-3 py-1 rounded-lg text-sm" style={{ color: '#d4762a', background: 'rgba(212,118,42,0.10)' }}>
                        {unit === "₹" ? `₹ ${value.toLocaleString('en-IN')}` : `${value} ${unit}`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={min} max={max}
                      step={step ?? 1}
                      value={value}
                      onChange={(e) => setter(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ accentColor: '#d4762a', background: '#ecddc9' }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t relative z-10" style={{ borderColor: '#ecddc9' }}>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-gray-500 font-medium">Total Investment</span>
                  <span className="font-bold" style={{ color: '#1a1a2e' }}>{formatCurrency(totalInvestment)}</span>
                </div>
                <div className="p-6 rounded-[16px] border text-center" style={{ background: 'rgba(232,160,69,0.08)', borderColor: 'rgba(232,160,69,0.25)' }}>
                  <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: '#d4762a' }}>Estimated Corpus</p>
                  <p className="text-4xl font-bold font-heading" style={{ color: '#1a1a2e' }}>
                    {formatCurrency(estimatedCorpus)}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">*Assumed 12% CAGR. Returns are subject to market risks.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
