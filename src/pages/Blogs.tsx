import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const categories = ['All', 'Artificial Intelligence', 'Cloud Native', 'Cybersecurity', 'Design UI/UX', 'Development'];

const featuredBlog = {
  title: 'The Future of Enterprise AI: Beyond Large Language Models',
  excerpt: 'As LLMs become commoditized, the next frontier in enterprise AI lies in specialized, multi-modal autonomous agents that can execute complex, multi-step workflows across disparate systems...',
  category: 'Artificial Intelligence',
  date: 'May 24, 2026',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=600'
};

const blogsData = [
  {
    id: 1,
    title: 'Architecting Zero-Trust Networks in 2026',
    excerpt: 'A comprehensive guide to building resilient security perimeters in a distributed workforce era.',
    category: 'Cybersecurity',
    date: 'May 20, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 2,
    title: 'React 19 & Server Components: A Paradigm Shift',
    excerpt: 'How the latest React features are fundamentally changing the way we build high-performance web applications.',
    category: 'Development',
    date: 'May 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 3,
    title: 'Designing for Immersive Web Experiences',
    excerpt: 'Moving beyond flat UI to create engaging, 3D-integrated web experiences without sacrificing performance.',
    category: 'Design UI/UX',
    date: 'May 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 4,
    title: 'Migrating Monoliths to Microservices on AWS',
    excerpt: 'A practical roadmap for breaking down legacy systems into scalable, independent microservices.',
    category: 'Cloud Native',
    date: 'May 02, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 5,
    title: 'The Rise of Agentic AI Frameworks',
    excerpt: 'Exploring how autonomous AI agents are collaborating to solve complex enterprise problems.',
    category: 'Artificial Intelligence',
    date: 'Apr 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 6,
    title: 'Next-Gen Authentication Strategies',
    excerpt: 'Why passwords are dead and how to implement secure, passwordless authentication flows.',
    category: 'Cybersecurity',
    date: 'Apr 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1614064641913-a538a5b23d53?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogsData.filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-primary-navy min-h-screen">
      
      {/* 1. Header & Search */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-cyan/10 rounded-full blur-[100px] mix-blend-screen" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our <span className="text-gradient">Insights</span></h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Discover our latest thoughts, tutorials, and deep-dives into technology, engineering, and digital transformation.
              </p>
            </div>
            
            <div className="relative w-full md:w-80 shrink-0">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-text-muted" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan transition-all backdrop-blur-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Article (only show if no search/filter is active) */}
      <AnimatePresence>
        {activeCategory === 'All' && searchQuery === '' && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            className="pb-16"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/10">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={featuredBlog.image} 
                    alt={featuredBlog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-transparent" />
                </div>
                
                <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-end min-h-[500px] max-w-4xl">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-primary-blue/30 text-primary-cyan font-bold text-sm backdrop-blur-md border border-primary-cyan/20">
                      {featuredBlog.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                      <Calendar className="w-4 h-4" /> {featuredBlog.date}
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                      <Clock className="w-4 h-4" /> {featuredBlog.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight group-hover:text-primary-cyan transition-colors">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary-cyan font-bold group-hover:translate-x-2 transition-transform">
                    Read Full Article <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 3. Categories & Grid */}
      <section className="py-16 relative z-10 bg-[#050817] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Tag className="w-5 h-5 text-text-muted mr-2 hidden sm:block" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-primary-cyan text-primary-navy shadow-[0_0_15px_rgba(111,255,224,0.4)]' 
                    : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary-blue/30 transition-colors cursor-pointer"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary-navy/80 text-primary-cyan font-bold text-xs backdrop-blur-md border border-primary-cyan/20">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs font-medium text-text-muted mb-4">
                        <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.date}</div>
                        <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-primary-blue transition-colors">
                        {blog.title}
                      </h3>
                      
                      <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-2 text-primary-purple font-bold text-sm group-hover:translate-x-2 transition-transform">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                    <Search className="w-8 h-8 text-text-muted" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                  <p className="text-text-muted">Try adjusting your search or category filter.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>

    </div>
  );
}
