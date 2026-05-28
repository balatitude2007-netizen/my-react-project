import { motion } from 'framer-motion';
import { Target, Lightbulb, Trophy, Users, Award, ShieldCheck, ChevronRight } from 'lucide-react';

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

const timelineData = [
  { year: "2015", title: "Inception", desc: "FutureTech was founded with a vision to revolutionize enterprise software." },
  { year: "2018", title: "Global Expansion", desc: "Opened offices in London and Singapore, expanding our global footprint." },
  { year: "2021", title: "AI Integration", desc: "Launched our proprietary AI lab to integrate machine learning into our core offerings." },
  { year: "2024", title: "Industry Leaders", desc: "Recognized as a Top 50 Global Tech Partner by industry analysts." },
  { year: "2026", title: "Web 3.0 & Beyond", desc: "Pioneering decentralized infrastructure and next-gen immersive experiences." }
];

const teamData = [
  { name: "Elena Rostova", role: "Chief Executive Officer", image: "https://i.pravatar.cc/300?img=47" },
  { name: "Marcus Chen", role: "Chief Technology Officer", image: "https://i.pravatar.cc/300?img=11" },
  { name: "Sarah Jenkins", role: "Head of AI Research", image: "https://i.pravatar.cc/300?img=5" },
  { name: "David Alaba", role: "VP of Engineering", image: "https://i.pravatar.cc/300?img=60" }
];

export default function About() {
  return (
    <div className="w-full bg-primary-navy overflow-hidden">
      
      {/* 1. Hero / Company Story */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Pioneering the <span className="text-gradient drop-shadow-[0_0_15px_rgba(111,255,224,0.3)]">Unknown</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-text-muted leading-relaxed mb-6">
              FutureTech isn't just an IT company. We are a collective of visionaries, engineers, and designers dedicated to pushing the boundaries of what technology can achieve for the modern enterprise.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-text-muted/80 leading-relaxed max-w-3xl">
              Since our founding, we have been obsessed with building robust, scalable, and intelligent systems. Our journey is defined by relentless innovation and a commitment to excellence that transforms complex challenges into elegant solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-24 relative bg-[#071A3D] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-cyan/10 rounded-full blur-2xl group-hover:bg-primary-cyan/20 transition-colors" />
              <Target className="w-12 h-12 text-primary-cyan mb-6" />
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                To empower businesses globally by delivering cutting-edge, secure, and scalable technology solutions that drive efficiency, growth, and unparalleled competitive advantage in a digital-first world.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-purple/10 rounded-full blur-2xl group-hover:bg-primary-purple/20 transition-colors" />
              <Lightbulb className="w-12 h-12 text-primary-purple mb-6" />
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                To be the undisputed global leader in digital transformation and AI integration, recognized for our technological excellence, creative problem-solving, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Animated Statistics */}
      <section className="py-32 relative bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "10+", label: "Years Experience", color: "text-primary-cyan" },
              { num: "500+", label: "Projects Delivered", color: "text-primary-blue" },
              { num: "99%", label: "Client Retention", color: "text-primary-purple" },
              { num: "50+", label: "Global Partners", color: "text-primary-pink" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow"
              >
                <div className={`text-5xl md:text-7xl font-display font-bold ${stat.color} mb-4 drop-shadow-lg`}>{stat.num}</div>
                <div className="text-sm font-bold text-white uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section className="py-32 relative bg-[#050817] border-t border-white/5">
        <div className="absolute left-0 top-1/2 w-[300px] h-[600px] bg-primary-purple/10 rounded-full blur-[150px] mix-blend-screen -translate-y-1/2" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our <span className="text-gradient">Evolution</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">A timeline of our relentless pursuit of technological excellence.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

            {timelineData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-primary-cyan shadow-[0_0_20px_rgba(111,255,224,0.8)] -translate-x-[9px] md:-translate-x-1/2 mt-8 md:mt-0 z-10 border-4 border-primary-navy" />
                
                <div className="hidden md:block w-5/12" />
                
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-blue/20 text-primary-cyan font-bold text-sm mb-5">{item.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership Team */}
      <section className="py-32 bg-primary-navy border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Leadership <span className="text-gradient">Team</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">The brilliant minds guiding our strategy, engineering, and innovation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary-blue/30 transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/50 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary-cyan text-sm font-bold tracking-wide uppercase mb-4">{member.role}</p>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors text-white font-bold text-sm">in</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors text-white font-bold text-sm">tw</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Achievements */}
      <section className="py-32 relative bg-[#071A3D] overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-pink/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-primary-pink font-semibold text-sm">
                Industry Recognition
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">Awards & <br/><span className="text-gradient">Excellence</span></h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">Our dedication to building high-quality software has earned us recognition from top industry bodies globally.</p>
              <button className="flex items-center gap-2 text-primary-cyan font-bold hover:text-white transition-colors group">
                View all awards <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Trophy, title: "Best IT Services Company 2025", org: "Global Tech Awards" },
                { icon: Award, title: "Top AI Innovator", org: "Tech Crunch Disrupt" },
                { icon: ShieldCheck, title: "Enterprise Security Excellence", org: "CyberSec Summit" },
                { icon: Users, title: "Great Place to Work Certified", org: "GPTW Institute" }
              ].map((award, i) => {
                const Icon = award.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-6 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-button flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(46,123,255,0.3)] group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white leading-snug mb-2">{award.title}</h4>
                      <p className="text-primary-purple font-semibold text-sm uppercase tracking-wider">{award.org}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
