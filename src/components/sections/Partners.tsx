const partners = [
  "LIC", "HDFC Life", "ICICI Prudential", "SBI Life", "Max Life", "Kotak Life", "Bajaj Allianz", "Tata AIA"
]

const Partners = () => {
  return (
    <section className="py-20 relative overflow-hidden rounded-[40px]" style={{ background: 'var(--bg-section-alternate)' }}>
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(232,160,69,0.2)" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: 'rgba(232,160,69,0.10)' }} />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px]" style={{ background: 'rgba(212,118,42,0.08)' }} />
      </div>

      <div className="container text-center mb-16 relative z-10">
        <span className="badge-chip mb-6">Top Insurance Partners</span>
        <h2 className="text-4xl md:text-5xl font-black text-text-primary font-heading mt-6 tracking-tight leading-tight">
          Backed By India's Most <span className="text-gradient">Trusted Brands</span>
        </h2>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, #fff8f0, transparent)' }} />
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, #fff8f0, transparent)' }} />

      <div className="relative flex overflow-x-hidden py-6 z-10">
        <div className="animate-scroll whitespace-nowrap flex items-center gap-6">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="px-8 py-6 bg-white border shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl flex items-center justify-center min-w-[240px] group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(212,118,42,0.12)] transition-all duration-300 cursor-pointer"
              style={{ borderColor: '#ecddc9' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,118,42,0.3)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#ecddc9'}
            >
              <span className="text-2xl font-black text-gray-400 group-hover:text-[#d4762a] transition-colors duration-300 font-heading tracking-tight">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
