import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowRight, Heart, Zap, Globe, Laptop, GraduationCap, Coffee, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

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

const benefits = [
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the world. We value output over office hours.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health, dental, and vision insurance for you and your family.' },
  { icon: Laptop, title: 'Home Office Setup', desc: 'Get a $1,000 stipend to set up your perfect remote workspace.' },
  { icon: GraduationCap, title: 'Learning Budget', desc: 'Annual $2,000 budget for courses, conferences, and continuous learning.' },
  { icon: Coffee, title: 'Unlimited PTO', desc: 'Take the time you need to recharge. We mandate a minimum of 20 days off.' },
  { icon: Zap, title: 'High-Impact Work', desc: 'Build technology that solves real problems for massive global enterprises.' }
];

const jobs = [
  { id: 1, role: 'Senior React Developer', department: 'Engineering', type: 'Full-time', location: 'Remote (US/EU)' },
  { id: 2, role: 'Lead UI/UX Designer', department: 'Design', type: 'Full-time', location: 'New York, NY or Remote' },
  { id: 3, role: 'DevOps Cloud Engineer', department: 'Infrastructure', type: 'Full-time', location: 'Remote (Global)' },
  { id: 4, role: 'AI Research Scientist', department: 'Data Science', type: 'Full-time', location: 'San Francisco, CA' },
  { id: 5, role: 'Product Manager', department: 'Product', type: 'Full-time', location: 'London, UK or Remote' }
];

const workflow = [
  { step: '01', title: 'Application', desc: 'Submit your resume and portfolio. Our talent team reviews every application within 48 hours.' },
  { step: '02', title: 'Culture Fit Call', desc: 'A 30-minute chat to discuss your background, career goals, and alignment with our values.' },
  { step: '03', title: 'Technical Interview', desc: 'A deep dive into your technical skills, usually involving a take-home assignment or pair programming.' },
  { step: '04', title: 'Final Offer', desc: 'Meet the founders. If it\'s a match, we move fast to extend a competitive offer.' }
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className="w-full bg-primary-navy overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-primary-blue/20 rounded-full blur-[150px] mix-blend-screen" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-primary-cyan font-bold text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(111,255,224,0.2)]">
                <span className="w-2 h-2 rounded-full bg-primary-cyan animate-pulse" />
                We're Hiring
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Build the future <br/>
                <span className="text-gradient">With Us.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-text-muted leading-relaxed mb-8">
                Join a collective of visionaries, engineers, and creators. We're looking for passionate individuals who want to solve complex problems and build enterprise software that matters.
              </motion.p>
              <motion.div variants={fadeIn}>
                <a href="#open-roles" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary-navy font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all">
                  View Open Roles <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl hidden lg:block"
            >
              <div className="absolute inset-0 bg-primary-cyan/20 mix-blend-overlay z-10" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" alt="Team collaborating" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Employee Benefits */}
      <section className="py-24 relative bg-[#071A3D] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Perks & <span className="text-gradient">Benefits</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">We invest heavily in our team's well-being, growth, and happiness.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-cyan/20 transition-colors">
                    <Icon className="w-7 h-7 text-white group-hover:text-primary-cyan transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-text-muted leading-relaxed">{benefit.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Recruitment Workflow */}
      <section className="py-32 relative bg-primary-navy">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Hiring <span className="text-gradient">Process</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">We respect your time. Our process is designed to be fast, transparent, and fair.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group"
              >
                <div className="text-5xl font-display font-bold text-white/10 mb-6 group-hover:text-primary-blue/30 transition-colors">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Job Openings */}
      <section id="open-roles" className="py-32 relative bg-[#050817] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Open <span className="text-gradient">Positions</span></h2>
              <p className="text-xl text-text-muted">Find your next career-defining role.</p>
            </div>
            <div className="text-primary-cyan font-bold bg-primary-cyan/10 px-4 py-2 rounded-full border border-primary-cyan/20">
              {jobs.length} Roles Available
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-blue/50 transition-colors"
              >
                <div 
                  className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer group"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-cyan transition-colors mb-2">{job.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white">{job.department}</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white">{job.type}</span>
                      <span className="text-text-muted">{job.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 rounded-full bg-gradient-button text-white font-bold hover:shadow-[0_0_15px_rgba(140,92,255,0.4)] transition-all">
                      Apply
                    </button>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted group-hover:bg-white/10 group-hover:text-white transition-colors">
                      {selectedJob === job.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {selectedJob === job.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/10 px-6 md:px-8 bg-black/20"
                    >
                      <div className="py-8">
                        <h4 className="text-lg font-bold text-white mb-3">About the Role</h4>
                        <p className="text-text-muted leading-relaxed mb-6">
                          We are looking for a highly skilled {job.role} to join our core {job.department.toLowerCase()} team. 
                          You will be responsible for architecting solutions, mentoring junior members, and driving our technical strategy forward.
                        </p>
                        <h4 className="text-lg font-bold text-white mb-3">Requirements</h4>
                        <ul className="list-disc list-inside text-text-muted space-y-2 mb-6">
                          <li>5+ years of relevant industry experience.</li>
                          <li>Strong communication skills and ability to work in a remote-first environment.</li>
                          <li>Proven track record of delivering scalable enterprise solutions.</li>
                        </ul>
                        <button className="px-8 py-3 rounded-xl bg-white text-primary-navy font-bold hover:bg-gray-100 transition-colors">
                          Submit Application Form
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Open Application Form */}
      <section className="py-32 relative bg-primary-navy overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary-pink/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Don't see a fit?</h2>
              <p className="text-text-muted">We're always looking for extraordinary talent. Send us your resume and we'll reach out when a position opens up.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">LinkedIn Profile URL</label>
                <input type="url" className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Tell us about yourself</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-primary-navy/50 border border-white/10 text-white focus:outline-none focus:border-primary-cyan focus:ring-1 transition-colors" placeholder="Why do you want to join FutureTech?"></textarea>
              </div>
              <button type="button" className="w-full py-4 rounded-xl bg-gradient-button text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(140,92,255,0.4)] transition-all">
                Submit Open Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
