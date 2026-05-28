import { motion } from 'framer-motion';
import { Users, Clock, Briefcase, CheckCircle2, ArrowRight, Calendar, MessageSquare, Code2, Rocket } from 'lucide-react';

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

const engagementModels = [
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'Hire a full-time, dedicated team of experts tailored exclusively to your project requirements.',
    price: '$4,500',
    period: '/mo per dev',
    features: ['Direct control over the team', 'Daily scrums & updates', 'Flexible team scaling', 'No hidden overheads'],
    color: 'text-primary-cyan',
    border: 'border-primary-cyan/50',
    bg: 'bg-primary-cyan/10',
    popular: true
  },
  {
    icon: Briefcase,
    title: 'Fixed Price',
    desc: 'Best for projects with clear requirements, defined scope, and a strict timeline.',
    price: 'Custom',
    period: 'Quote',
    features: ['Fixed budget & timeline', 'Minimal risk', 'Clear milestones', 'Dedicated project manager'],
    color: 'text-primary-purple',
    border: 'border-white/10 hover:border-primary-purple/30',
    bg: 'bg-primary-purple/10',
    popular: false
  },
  {
    icon: Clock,
    title: 'Time & Material',
    desc: 'Ideal for ongoing projects where scope is fluid and maximum flexibility is required.',
    price: '$45',
    period: '/hour',
    features: ['Pay only for hours worked', 'Flexible scope changes', 'Transparent reporting', 'Agile execution'],
    color: 'text-primary-pink',
    border: 'border-white/10 hover:border-primary-pink/30',
    bg: 'bg-primary-pink/10',
    popular: false
  }
];

const processSteps = [
  { icon: MessageSquare, title: 'Initial Consultation', desc: 'We discuss your requirements, technical challenges, and overarching business objectives to understand your vision.' },
  { icon: Code2, title: 'Technical Assessment', desc: 'Our senior architects draft a solution blueprint and propose the best tech stack for scale and security.' },
  { icon: Calendar, title: 'Proposal & Onboarding', desc: 'We agree on the optimal engagement model, set clear milestones, and seamlessly onboard the engineering team.' },
  { icon: Rocket, title: 'Kickoff & Delivery', desc: 'Development sprints begin immediately with full transparency, daily updates, and regular code deliveries.' }
];

export default function HireUs() {
  return (
    <div className="w-full bg-primary-navy overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary-purple/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-primary-purple font-bold text-sm tracking-wider uppercase shadow-[0_0_15px_rgba(140,92,255,0.2)]">
              Partner With Us
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Scale your team <br/>
              <span className="text-transparent bg-clip-text bg-gradient-button">Without Limits</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-text-muted leading-relaxed mb-10">
              Choose from our flexible engagement models designed to fit startups and enterprises alike. Get access to top-tier engineering talent instantly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Engagement Models (Pricing Placeholders) */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative p-8 md:p-10 rounded-[2rem] bg-white/5 border ${model.border} backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col`}
                >
                  {model.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary-cyan text-primary-navy text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(111,255,224,0.6)]">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl ${model.bg} ${model.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{model.title}</h3>
                  <p className="text-sm text-text-muted mb-6 flex-grow">{model.desc}</p>
                  
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <span className="text-4xl font-display font-bold text-white">{model.price}</span>
                    <span className="text-text-muted ml-2">{model.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {model.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${model.color}`} />
                        <span className="text-sm text-white/90">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`mt-auto w-full py-4 rounded-xl font-bold transition-all ${model.popular ? 'bg-primary-cyan text-primary-navy hover:shadow-[0_0_20px_rgba(111,255,224,0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Select Model
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Engagement Process */}
      <section className="py-32 relative bg-[#071A3D] border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">How We <span className="text-gradient">Engage</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">A streamlined, transparent process to get your project off the ground in record time.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-blue/20 transition-colors shadow-lg">
                        <Icon className="w-8 h-8 text-primary-blue" />
                      </div>
                      {/* Optional connector line for visual flow on mobile, but keeping it clean for grid */}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-cyan mb-2 tracking-widest uppercase">Step 0{i + 1}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation CTA / Form */}
      <section className="py-32 relative bg-[#050817]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Request a <br/><span className="text-gradient">Free Consultation</span></h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                Not sure which model fits your needs? Fill out the form, and our technical architects will review your requirements and schedule a call within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-cyan/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Sign NDA</h4>
                    <p className="text-sm text-text-muted">Your intellectual property is always secure.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-purple/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Tech Stack Review</h4>
                    <p className="text-sm text-text-muted">Expert advice on architecture and scaling.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/20 rounded-full blur-[80px] mix-blend-screen" />
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">First Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Work Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Interested In</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-colors appearance-none">
                    <option className="bg-primary-navy">Dedicated Team</option>
                    <option className="bg-primary-navy">Fixed Price Project</option>
                    <option className="bg-primary-navy">Time & Material</option>
                    <option className="bg-primary-navy">Just need some advice</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Project Details</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-colors" placeholder="Briefly describe your project goals..."></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-xl bg-gradient-button text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(46,123,255,0.4)] hover:scale-[1.02] transition-all duration-300">
                  Send Request
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
