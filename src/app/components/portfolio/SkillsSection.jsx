import React from "react";
import { Code, Globe, Database, Wrench, Users, Sparkles } from "./Icons";
import { Card } from "../ui/card";
import { useScrollReveal } from "./useScrollReveal";

function SkillCategoryCard({ category }) {
  const [ref, isVisible] = useScrollReveal();
  const Icon = category.icon;

  return (
    <div
      ref={ref}
      className={`reveal-fade ${isVisible ? 'revealed' : ''}`}
    >
      <Card className="h-full bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-6 hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-white/10 transition-all group shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Image watermark */}
        <img
          src={category.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
          loading="lazy"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/5 flex items-center justify-center">
                <Icon className="w-5 h-5 text-zinc-650 dark:text-zinc-300" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map(({ name }) => (
                <span
                  key={name}
                  className="px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-white/5 rounded-xl text-xs font-semibold text-zinc-750 dark:text-zinc-300 hover:text-purple-650 dark:hover:text-purple-400 hover:border-purple-500/20 dark:hover:border-purple-400/20 transition-all duration-300 cursor-default hover:scale-105"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "C", level: 75 },
        { name: "JavaScript", level: 85 },
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Node.js", level: 70 },
      ]
    },
    {
      icon: Database,
      title: "Database",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "SQL", level: 85 },
        { name: "ChromaDB", level: 70 },
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Vercel", level: 80 },
        { name: "Figma", level: 75 },
      ]
    },
    {
      icon: Sparkles,
      title: "AI/ML",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
      skills: [
        { name: "RAG Pipeline", level: 75 },
        { name: "LLM Integration", level: 70 },
        { name: "Vector DB", level: 75 },
        { name: "OCR", level: 70 },
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Public Speaking", level: 85 },
      ]
    },
  ];

  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
            Skills & Expertise
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Technical capability matrix and skill levels</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
