
const Footer = () => {
  return (
    <footer className="bg-text-primary text-gray-300 pt-20 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-sm">FF</span>
              </div>
              Family First
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering Indian families with secure, personalized, and robust retirement planning solutions. Live happily tomorrow by planning peacefully today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white text-xs font-bold">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white text-xs font-bold">
                IN
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Why Plan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retirement Goals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Experts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Retirement Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tax Saving Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">📍</span>
                <span>123, Financial District,<br/>Mumbai, India - 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">📞</span>
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">✉️</span>
                <span>hello@familyfirst.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Family First Insurance. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
