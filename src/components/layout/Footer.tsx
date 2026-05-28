import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-navy border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-primary-cyan" />
              <span className="font-display font-bold text-xl text-white">
                Future<span className="text-primary-blue">Tech</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge IT solutions, AI integrations, and visionary digital transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-blue/20 hover:text-primary-cyan text-text-muted transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-blue/20 hover:text-primary-cyan text-text-muted transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary-blue/20 hover:text-primary-cyan text-text-muted transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Hire Us', 'Career'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-text-muted text-sm hover:text-primary-cyan transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'AI Solutions', 'Cloud Computing', 'DevOps'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-text-muted text-sm hover:text-primary-cyan transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin className="w-5 h-5 text-primary-cyan shrink-0" />
                <span>123 Innovation Drive, Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Phone className="w-5 h-5 text-primary-cyan shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Mail className="w-5 h-5 text-primary-cyan shrink-0" />
                <span>hello@futuretech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-text-muted flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} FutureTech IT Services. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
