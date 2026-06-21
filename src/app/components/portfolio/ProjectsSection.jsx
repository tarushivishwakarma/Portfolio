import React from "react";
import { ExternalLink, Github, Sparkles } from "./Icons";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { useScrollReveal } from "./useScrollReveal";

function ProjectCard({ project }) {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <div
      ref={ref}
      className={`h-full reveal-fade ${isVisible ? 'revealed' : ''}`}
    >
      <Card className="group h-full bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 overflow-hidden hover:border-zinc-350 dark:hover:border-white/10 hover:scale-[1.01] hover:shadow-lg dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all flex flex-col justify-between shadow-sm rounded-2xl relative">
        
        {/* Subtle Background Image watermark */}
        <img
          src={project.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
          loading="lazy"
        />

        {/* Product Image slot */}
        <div className="relative z-10 w-full aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200/30 dark:border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Glassy overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
          
          {project.featured && (
            <Badge className="absolute top-4 right-4 bg-purple-500/90 hover:bg-purple-500 text-white border-0 rounded-full font-semibold px-3 py-1 shadow-md flex items-center gap-1 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-yellow-300 fill-yellow-300" />
              Featured
            </Badge>
          )}
        </div>

        {/* Content section */}
        <div className="p-6 flex flex-col flex-1 justify-between relative z-10">
          <div>
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-450 dark:text-zinc-550 text-xs tracking-wider uppercase font-semibold">{project.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-zinc-650 dark:text-zinc-400 mb-6 leading-relaxed text-sm font-light">
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 rounded-full text-xs text-zinc-600 dark:text-zinc-400 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-auto">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-zinc-350 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors cursor-pointer text-xs h-9 px-3 rounded-xl inline-flex items-center justify-center font-medium gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-zinc-350 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors cursor-pointer text-xs h-9 px-3 rounded-xl inline-flex items-center justify-center font-medium gap-1.5 shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "JanSahayakAI",
      subtitle: "Intelligent Public Service Assistant",
      description: "AI-powered multilingual platform to simplify access to government welfare schemes. Features OCR-based document autofill, AI chatbot, eligibility system, and voice-based interaction in Hindi and English.",
      tech: ["HTML", "CSS", "JavaScript", "FastAPI", "Firebase", "OCR", "AI"],
      image: "https://images.unsplash.com/photo-1680814908477-848e025f16e2?q=80&w=600&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      featured: true,
      links: {
        demo: "https://jansahayakai.web.app/",
        github: "https://github.com/tarushivishwakarma/JanSahayakAI"
      }
    },
    {
      title: "ProtocolZero",
      subtitle: "Disaster Response & Emergency Communication System",
      description: "Low-bandwidth emergency guidance system using RAG pipeline, semantic search, and LLM integration. Delivers critical survival instructions during disasters with verified emergency knowledge.",
      tech: ["Node.js", "Python", "ChromaDB", "Groq API", "RAG", "LLM"],
      image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=600&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      featured: true,
      links: {
        github: "https://github.com/tarushivishwakarma/ProtocolZero"
      }
    },
    {
      title: "PowerSense",
      subtitle: "Smart Energy Consumption & Bill Prediction Analyzer",
      description: "Data-driven web app to analyze household electricity consumption and predict bills. Features interactive dashboards, appliance-level analytics, and energy-saving recommendations.",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage", "Vercel"],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
      links: {
        demo: "https://powersense-codefusion.vercel.app/",
        github: "https://github.com/tarushivishwakarma/PowerSense"
      }
    },
    {
      title: "Temple Insight 360",
      subtitle: "Temple and Pilgrimage Crowd Management System",
      description: "Smart crowd monitoring system for high-footfall religious spaces. Real-time crowd density analysis, queue management, peak hour analytics, and optimized entry route guidance.",
      tech: ["Python", "Real-time Analytics", "Data Processing"],
      image: "https://images.unsplash.com/photo-1600100397608-f010e413b963?q=80&w=600&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      links: {
        demo: "https://crowd-management-zeta.vercel.app/",
        github: "https://github.com/tarushivishwakarma/Temple-Insight-360"
      }
    },
    {
      title: "SmartQuiz",
      subtitle: "Web-Based MCQ Evaluation Platform",
      description: "Comprehensive quiz system with secure authentication, timer-based quizzes, automatic scoring, and performance tracking. Built with robust database management.",
      tech: ["Java", "MySQL", "JDBC"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
      links: {
        demo: "https://6988bf3a942bb43e4ebcab6d--super-florentine-05a5bf.netlify.app/",
        github: "https://github.com/tarushivishwakarma/Online-Quiz-System"
      }
    },
    {
      title: "Event Registration System",
      subtitle: "Web-based Event Management",
      description: "Streamlined platform for online event participation with user-friendly interface, instant confirmation, and admin dashboard for efficient participant management.",
      tech: ["Java", "HTML", "CSS", "Database"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
      bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
      links: {
        github: "https://github.com/tarushivishwakarma/event_registration_system"
      }
    },
  ];

  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">A showcase of innovative solutions built with modern technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
