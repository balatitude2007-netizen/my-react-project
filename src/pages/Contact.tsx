import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ChevronDown, ChevronUp, Send, MessageCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const faqs = [
  { question: 'What is your typical project timeline?', answer: 'Our project timelines vary depending on scope. An MVP usually takes 8-12 weeks, while complex enterprise solutions may take 6+ months. We will provide a detailed timeline during the proposal phase.' },
  { question: 'Do you offer post-launch support?', answer: 'Yes, we provide comprehensive SLA-backed support and maintenance packages tailored to your needs, ensuring your software remains secure, updated, and highly performant.' },
  { question: 'What engagement models do you offer?', answer: 'We offer Dedicated Teams, Fixed Price Projects, and Time & Material models. You can review the exact breakdown of these models on our Hire Us page.' },
  { question: 'Can you sign an NDA before we discuss details?', answer: 'Absolutely. We prioritize your intellectual property and are happy to sign a Non-Disclosure Agreement before any initial consultations or technical deep-dives.' }
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-primary-navy overflow-hidden">
      
      {/* 1. Hero & Main Contact Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary-cyan/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-primary-purple/20 rounded-full blur-[120px] mix-blend-screen" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-primary-cyan font-bold text-sm tracking-widest uppercase">
              <MessageCircle className="w-4 h-4" /> Let's Talk
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-text-muted leading-relaxed">
              Whether you have a groundbreaking idea or need to scale your existing systems, our team is ready to help you execute flawlessly.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info & Socials */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-blue/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary-cyan" />
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">Global Headquarters</p>
                      <p className="text-text-muted leading-relaxed">123 Innovation Drive<br/>Tech District, TC 90210<br/>San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-blue/20 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary-cyan" />
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">Phone</p>
                      <p className="text-text-muted">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-blue/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary-cyan" />
                    </div>
                    <div>
                      <p className="font-bold text-white mb-1">Email</p>
                      <p className="text-text-muted">hello@futuretech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-primary-navy border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-primary-cyan transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary-navy border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-primary-cyan transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-primary-navy border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-primary-cyan transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Premium Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-purple/20 rounded-full blur-[80px]" />
              
              <h3 className="text-3xl font-display font-bold text-white mb-8 relative z-10">Send us a Message</h3>
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">First Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Work Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Subject</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                  <textarea rows={5} className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-xl bg-gradient-button text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(46,123,255,0.4)] transition-all">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Map Section Placeholder */}
      <section className="py-0 relative border-y border-white/5">
        <div className="w-full h-[500px] bg-[#071A3D] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary-cyan/20 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <MapPin className="w-10 h-10 text-primary-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Interactive Map Area</h3>
              <p className="text-text-muted">Google Maps integration goes here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="py-32 relative bg-primary-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="text-xl text-text-muted">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-blue/30 transition-colors"
              >
                <button 
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-cyan transition-colors pr-8">
                    {faq.question}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted shrink-0 group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {activeFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/10 px-6 md:px-8 bg-black/20"
                    >
                      <p className="py-6 text-text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
