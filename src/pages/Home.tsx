import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Smartphone, Brain, Cloud, ArrowRight, CheckCircle2, ChevronRight, Zap, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
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

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full bg-primary-navy overflow-hidden">
      
      {/* 1. Hero Section */}
      <section ref={targetRef} className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary-cyan/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-primary-purple/20 rounded-full blur-[150px] mix-blend-screen" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] bg-primary-blue/20 rounded-full blur-[100px] mix-blend-screen" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full bg-white/5 border border-white/10 text-primary-cyan font-medium text-sm backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-cyan"></span>
              </span>
              Next-Gen IT Solutions
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Architecting the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-primary drop-shadow-[0_0_15px_rgba(140,92,255,0.5)]">Digital Future</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
              We engineer enterprise-grade software, AI-driven architectures, and scalable cloud solutions that transform industries.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/hire-us" className="group relative px-8 py-4 rounded-full bg-gradient-button text-white font-bold text-lg overflow-hidden w-full sm:w-auto shadow-[0_0_20px_rgba(46,123,255,0.4)]">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 font-bold text-lg transition-all backdrop-blur-sm w-full sm:w-auto flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted uppercase tracking-widest font-semibold">Scroll to explore</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-primary-cyan to-transparent animate-bounce" />
        </motion.div>
      </section>

      {/* 2. Tech Stack Marquee */}
      <section className="py-8 border-y border-white/10 bg-primary-navy/40 backdrop-blur-xl overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center gap-24 px-12 text-3xl font-display font-bold text-white/10 uppercase tracking-widest"
        >
          <span>React Ecosystem</span> <span>•</span> <span>Node.js</span> <span>•</span> <span>Python AI</span> <span>•</span> <span>AWS Cloud</span> <span>•</span> <span>Docker</span> <span>•</span> <span>Kubernetes</span> <span>•</span> <span>Machine Learning</span> <span>•</span>
          {/* Duplicate for seamless loop */}
          <span>React Ecosystem</span> <span>•</span> <span>Node.js</span> <span>•</span> <span>Python AI</span> <span>•</span> <span>AWS Cloud</span> <span>•</span> <span>Docker</span> <span>•</span> <span>Kubernetes</span> <span>•</span> <span>Machine Learning</span> <span>•</span>
        </motion.div>
      </section>

      {/* 3. Core Services Grid */}
      <section className="py-32 relative z-10 bg-primary-navy">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Our <span className="text-gradient">Expertise</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">Pushing the boundaries of what's possible with modern technology stacks.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Monitor, title: "Web Engineering", desc: "High-performance, scalable web applications using React, Next.js, and modern tools.", color: "text-primary-cyan", bg: "bg-primary-cyan/10", border: "hover:border-primary-cyan/50" },
              { icon: Brain, title: "AI Integration", desc: "Intelligent systems, machine learning models, and automation for enterprise workflows.", color: "text-primary-purple", bg: "bg-primary-purple/10", border: "hover:border-primary-purple/50" },
              { icon: Cloud, title: "Cloud Native", desc: "Resilient cloud infrastructures on AWS, Azure, and GCP with automated CI/CD pipelines.", color: "text-primary-blue", bg: "bg-primary-blue/10", border: "hover:border-primary-blue/50" },
              { icon: Smartphone, title: "Mobile Apps", desc: "Native-feeling cross-platform mobile experiences for iOS and Android devices.", color: "text-primary-pink", bg: "bg-primary-pink/10", border: "hover:border-primary-pink/50" },
              { icon: Shield, title: "Cybersecurity", desc: "Advanced security protocols, encryption, and auditing to keep your enterprise data safe.", color: "text-primary-cyan", bg: "bg-primary-cyan/10", border: "hover:border-primary-cyan/50" },
              { icon: Cpu, title: "IoT Solutions", desc: "Connecting devices and aggregating data for smarter, real-time business decisions.", color: "text-primary-purple", bg: "bg-primary-purple/10", border: "hover:border-primary-purple/50" },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative p-10 rounded-3xl bg-white/5 border border-white/10 ${service.border} transition-all duration-300 backdrop-blur-sm overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-2`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150`} />
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-text-muted mb-8 leading-relaxed text-lg">{service.desc}</p>
                  <Link to="/services" className={`inline-flex items-center gap-2 font-bold ${service.color} group-hover:translate-x-2 transition-transform`}>
                    Learn more <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Stats / Why Choose Us */}
      <section className="py-32 relative overflow-hidden bg-primary-navy border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-primary-purple font-semibold text-sm">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">Built for the <br/><span className="text-gradient">Modern Enterprise</span></h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed">We don't just write code. We partner with you to understand your business goals and deliver technology that creates a massive competitive advantage.</p>
              
              <ul className="space-y-6">
                {['Agile methodology with weekly sprints', 'Top 1% of global engineering talent', 'Enterprise-grade security standards', 'Post-launch maintenance & support'].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-4 text-white"
                  >
                    <div className="p-1 rounded-full bg-primary-cyan/20">
                      <CheckCircle2 className="text-primary-cyan w-6 h-6 shrink-0" />
                    </div>
                    <span className="font-medium text-xl">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "500+", label: "Projects Delivered", color: "text-primary-cyan", delay: 0 },
                { num: "99%", label: "Client Satisfaction", color: "text-primary-purple", delay: 0.1 },
                { num: "50+", label: "Expert Engineers", color: "text-primary-blue", delay: 0.2 },
                { num: "24/7", label: "Support Available", color: "text-primary-pink", delay: 0.3 },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay }}
                  className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
                >
                  <div className={`text-5xl md:text-6xl font-display font-bold ${stat.color} mb-3`}>{stat.num}</div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-40 relative overflow-hidden bg-primary-navy">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gradient-primary opacity-20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-4 bg-white/5 rounded-full inline-block mb-8 border border-white/10">
              <Zap className="w-10 h-10 text-primary-cyan mx-auto" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-10 leading-tight">
              Ready to build the <br/>next big thing?
            </h2>
            <p className="text-2xl text-text-muted mb-12">
              Let's discuss how we can help your business innovate and scale.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-primary-navy font-bold text-xl hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Get a Free Consultation <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
