import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Code, GraduationCap, Send, Briefcase, School, Database, BarChart3, Layout } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CustomCursor } from '@/app/components/CustomCursor';
import { Timeline } from '@/app/components/Timeline';
import { ThemeProvider } from '@/app/hooks/useTheme';
import { ThemeToggle } from '@/app/components/ThemeToggle';
import { AnimatedBackground } from '@/app/components/AnimatedBackground';
import { ParticleNetwork } from '@/app/components/ParticleNetwork';

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration, user authentication, and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4MTg2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: '#',
      demo: '#',
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with drag-and-drop functionality, team workspaces, and deadline tracking.',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4MjM0NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: '#',
      demo: '#',
      category: 'frontend'
    },
    {
      title: 'AI-Powered Chat Bot',
      description: 'An intelligent chatbot using natural language processing to provide customer support and answer FAQs.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4MTg2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: '#',
      demo: '#',
      category: 'fullstack'
    },
    {
      title: 'Sales Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts, KPI tracking, and data visualization for business insights.',
      tags: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      image: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4MTg2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: '#',
      demo: '#',
      category: 'analytics'
    },
    {
      title: 'Executive BI Dashboard',
      description: 'Comprehensive business intelligence platform with custom reports, data warehousing, and predictive analytics.',
      tags: ['Power BI', 'Python', 'SQL', 'Azure'],
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4MjM0NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: '#',
      demo: '#',
      category: 'bi'
    },
    {
      title: 'Portfolio Website Builder',
      description: 'Drag-and-drop website builder with customizable templates and responsive design components.',
      tags: ['React', 'Next.js', 'Tailwind', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0JTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4MTg2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      github: '#',
      demo: '#',
      category: 'frontend'
    }
  ];

  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'Tech University',
      period: '2022 - 2026',
      description: 'Currently pursuing a degree with a focus on software engineering and artificial intelligence.',
      details: [
        'GPA: 3.8/4.0',
        'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Development',
        'Member of Computer Science Society'
      ],
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: 'A-Levels in Mathematics, Computer Science & Physics',
      organization: 'Sixth Form College',
      period: '2020 - 2022',
      description: 'Achieved excellent grades in core STEM subjects.',
      details: [
        'Mathematics: A*',
        'Computer Science: A*',
        'Physics: A'
      ],
      icon: <School className="w-8 h-8" />
    },
    {
      title: 'GCSEs',
      organization: 'Secondary School',
      period: '2015 - 2020',
      description: 'Completed secondary education with outstanding results.',
      details: [
        '9 GCSEs at grades 7-9',
        'Mathematics: 9',
        'Computer Science: 9'
      ],
      icon: <BookOpen className="w-8 h-8" />
    }
  ];

  const experience = [
    {
      title: 'Software Engineering Intern',
      organization: 'Tech Startup Inc.',
      period: 'Summer 2025',
      description: 'Developed features for a SaaS platform serving 10,000+ users.',
      details: [
        'Built REST APIs using Node.js and Express',
        'Implemented responsive UI components with React',
        'Collaborated with cross-functional team using Agile methodology'
      ],
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: 'Web Development Intern',
      organization: 'Digital Agency',
      period: 'Summer 2024',
      description: 'Created custom websites for clients across various industries.',
      details: [
        'Developed 5+ client websites using modern web technologies',
        'Improved website performance by 40% through optimization',
        'Worked directly with clients to understand requirements'
      ],
      icon: <Code className="w-8 h-8" />
    },
    {
      title: 'Freelance Developer',
      organization: 'Self-Employed',
      period: '2023 - Present',
      description: 'Building custom web solutions for small businesses and startups.',
      details: [
        'Completed 15+ projects with 100% client satisfaction',
        'Specialized in React, Next.js, and Tailwind CSS',
        'Managed full project lifecycle from design to deployment'
      ],
      icon: <Code className="w-8 h-8" />
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Dean\'s List',
      description: 'Achieved Dean\'s List honors for 4 consecutive semesters'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Hackathon Winner',
      description: 'First place at University Hackathon 2025 - Best AI Solution'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Research Publication',
      description: 'Published paper on machine learning algorithms in IEEE conference'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Scholarship Recipient',
      description: 'Merit-based scholarship for academic excellence'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ParticleNetwork />
      <AnimatedBackground />
      <CustomCursor />
      <ThemeToggle />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl text-gray-900 dark:text-white"
            >
              Portfolio
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'education', 'experience', 'projects', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {section}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6 dark:text-white" /> : <Menu className="w-6 h-6 dark:text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-2 border-t dark:border-gray-700"
            >
              {['about', 'education', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 capitalize"
                >
                  {section}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white"
              >
                Hi, I'm <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  className="text-blue-600 dark:text-blue-400"
                >
                  Alex Chen
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6"
              >
                Computer Science Student & Full-Stack Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              >
                Passionate about creating innovative solutions through code. Specializing in web development, 
                machine learning, and building scalable applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex gap-4 justify-center md:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                >
                  Contact Me
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex gap-4 mt-8 justify-center md:justify-start"
              >
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODI1MTIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Profile"
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutSection />

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl mb-4 text-center text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            My academic journey through computer science and technology
          </motion.p>
          <Timeline items={education} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl mb-4 text-center text-gray-900 dark:text-white"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Professional experience and accomplishments in software development
          </motion.p>
          <Timeline items={experience} />
          
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-2xl mb-8 text-center text-gray-900 dark:text-white">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400"
                    >
                      {achievement.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl mb-2 text-gray-900 dark:text-white">{achievement.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projects} scrollToSection={scrollToSection} />

      {/* Contact Section */}
      <ContactSection formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2026 Alex Chen. Built with React & Tailwind CSS.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

// About Section Component
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: '15+', label: 'Projects Completed', color: 'blue' },
    { value: '3.8', label: 'GPA', color: 'indigo' },
    { value: '5+', label: 'Hackathons', color: 'purple' },
    { value: '100+', label: 'GitHub Contributions', color: 'pink' }
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl mb-8 text-center text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
          >
            I'm a passionate Computer Science student at Tech University with a strong foundation in software development 
            and a keen interest in emerging technologies. My journey in tech started in high school when I built my first 
            website, and I've been hooked ever since.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
          >
            I specialize in full-stack web development with expertise in React, Node.js, and modern JavaScript frameworks. 
            I'm also exploring machine learning and AI, working on projects that combine my programming skills with 
            data-driven solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, 
            or mentoring fellow students in programming fundamentals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`text-center p-6 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 rounded-lg cursor-pointer`}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                className={`text-3xl mb-2 text-${stat.color}-600 dark:text-${stat.color}-400`}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section Component
function ProjectsSection({ projects, scrollToSection }: { projects: any[], scrollToSection: (id: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layout className="w-5 h-5" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-5 h-5" /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Database className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'bi', label: 'BI Dashboards', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl mb-4 text-center text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Here are some of my recent projects that showcase my skills and passion for development
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              layout
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string, tagIndex: number) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * tagIndex }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, x: 5 }}
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, x: 5 }}
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection({ formData, setFormData, handleSubmit }: any) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl mb-4 text-center text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { icon: Mail, title: 'Email', info: 'alex.chen@email.com' },
            { icon: Linkedin, title: 'LinkedIn', info: 'linkedin.com/in/alexchen' }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg"
                >
                  <contact.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-lg text-gray-900 dark:text-white">{contact.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{contact.info}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}