import { motion } from 'framer-motion';
import { Monitor, Smartphone, Brain, Cloud, Terminal, Shield, ArrowRight, Zap, Database, LayoutTemplate, Network, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const services = [
  { 
    icon: Monitor, 
    title: 'Web Engineering', 
    desc: 'High-performance, scalable web applications built with modern JavaScript frameworks.',
    features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Platforms', 'Enterprise Portals'],
    color: 'text-primary-cyan',
    bg: 'bg-primary-cyan/10',
    border: 'hover:border-primary-cyan/40'
  },
  { 
    icon: Smartphone, 
    title: 'Mobile App Development', 
    desc: 'Native and cross-platform mobile experiences that engage users and drive conversions.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Mobile UI/UX'],
    color: 'text-primary-pink',
    bg: 'bg-primary-pink/10',
    border: 'hover:border-primary-pink/40'
  },
  { 
    icon: Brain, 
    title: 'AI & Machine Learning', 
    desc: 'Intelligent systems and predictive models to automate workflows and unlock insights.',
    features: ['Custom LLMs', 'Computer Vision', 'Predictive Analytics', 'NLP Solutions'],
    color: 'text-primary-purple',
    bg: 'bg-primary-purple/10',
    border: 'hover:border-primary-purple/40'
  },
  { 
    icon: Cloud, 
    title: 'Cloud Architecture', 
    desc: 'Resilient and secure cloud infrastructures built for scale and continuous availability.',
    features: ['AWS & Azure', 'Serverless Apps', 'Cloud Migration', 'Cost Optimization'],
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
    border: 'hover:border-primary-blue/40'
  },
  { 
    icon: Terminal, 
    title: 'DevOps & CI/CD', 
    desc: 'Streamlined development pipelines and automated deployments for rapid delivery.',
    features: ['Kubernetes', 'Docker', 'Jenkins/Actions', 'Infrastructure as Code'],
    color: 'text-primary-cyan',
    bg: 'bg-primary-cyan/10',
    border: 'hover:border-primary-cyan/40'
  },
  { 
    icon: Shield, 
    title: 'Cybersecurity', 
    desc: 'Advanced security protocols and auditing to keep your enterprise data completely safe.',
    features: ['Penetration Testing', 'Compliance', 'Data Encryption', 'Security Audits'],
    color: 'text-primary-purple',
    bg: 'bg-primary-purple/10',
    border: 'hover:border-primary-purple/40'
  }
];

const technologies = [
  { name: 'Frontend', icon: LayoutTemplate, items: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Framer Motion'] },
  { name: 'Backend', icon: Database, items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'] },
  { name: 'Cloud & DevOps', icon: Network, items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { name: 'AI & ML', icon: Brain, items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'HuggingFace', 'LangChain'] }
];

const processes = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We analyze your business requirements, target audience, and project goals to create a comprehensive roadmap.' },
  { step: '02', title: 'UI/UX Design', desc: 'Creating intuitive wireframes and stunning high-fidelity prototypes that align with your brand identity.' },
  { step: '03', title: 'Agile Development', desc: 'Sprints to build scalable, clean, and efficient code with regular updates and demonstrations.' },
  { step: '04', title: 'Testing & Deployment', desc: 'Rigorous QA testing followed by a seamless launch and ongoing post-deployment support.' }
];

export default function Services() {
  return (
    <div className="w-full bg-primary-navy overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary-cyan/20 rounded-full blur-[120px] mix-blend-screen" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-primary-cyan font-bold text-sm tracking-wider uppercase">
              What We Do
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Engineering the <br/>
              <span className="text-gradient">Digital Tomorrow</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-3xl mx-auto">
              We provide end-to-end technology solutions tailored for forward-thinking enterprises. From AI integration to scalable cloud architectures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Service Cards */}
      <section className="py-24 relative bg-[#071A3D] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 2) * 0.1 }}
                  className={`group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 ${service.border} transition-colors backdrop-blur-md overflow-hidden`}
                >
                  <div className={`absolute -right-10 -top-10 w-40 h-40 ${service.bg} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                  
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-lg text-text-muted mb-8 leading-relaxed">{service.desc}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Key Capabilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-text-muted">
                          <Code2 className={`w-4 h-4 ${service.color}`} />
                          <span className="font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Technology Stack Grid */}
      <section className="py-32 relative bg-primary-navy">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our <span className="text-gradient">Technology Stack</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">We leverage industry-leading tools and frameworks to build resilient software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-blue/20 transition-colors">
                    <Icon className="w-8 h-8 text-white group-hover:text-primary-cyan transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">{tech.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {tech.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-text-muted hover:text-white hover:border-white/20 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Process Flow */}
      <section className="py-32 relative bg-[#050817] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">How We <span className="text-gradient">Work</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">A proven methodology designed to deliver products on time and beyond expectations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/10 z-0" />
            
            {processes.map((process, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-primary-navy border-4 border-white/10 flex items-center justify-center mb-8 shadow-xl group-hover:border-primary-cyan transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-button opacity-0 group-hover:opacity-20 transition-opacity" />
                  <span className="text-3xl font-display font-bold text-white/50 group-hover:text-primary-cyan transition-colors">{process.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-text-muted leading-relaxed px-4">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-32 relative bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-gradient-primary opacity-20 blur-[120px] rounded-full mix-blend-screen" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <Zap className="w-16 h-16 text-primary-cyan mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Transform your business today.
            </h2>
            <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
              Partner with FutureTech to build the intelligent, scalable solutions your enterprise needs to dominate the market.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-button text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(140,92,255,0.5)] hover:scale-105 transition-all duration-300">
              Start Your Project <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
