import React from "react";
import { GraduationCap, Code, Lightbulb, Users, Award } from "./Icons";
import { Card } from "../ui/card";
import { useScrollReveal } from "./useScrollReveal";

export function AboutSection() {
  const stats = [
    { 
      label: "Projects Built", 
      value: "6+", 
      icon: Code,
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
    },
    { 
      label: "Technologies", 
      value: "15+", 
      icon: Lightbulb,
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    { 
      label: "Certifications", 
      value: "4+", 
      icon: GraduationCap,
      bgImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop"
    },
    { 
      label: "Leadership Roles", 
      value: "5+", 
      icon: Users,
      bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const [headerRef, headerVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
            About Me
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">A brief introduction to my academic background, technical expertise, and passion.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* About text */}
          <div
            ref={leftRef}
            className={`space-y-6 reveal-fade-left ${leftVisible ? 'revealed' : ''}`}
          >
            {/* Card 1: Current Pursuit */}
            <div className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 rounded-2xl p-8 hover:border-zinc-350 dark:hover:border-white/10 hover:scale-[1.01] transition-all duration-300 shadow-sm relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                loading="lazy"
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
                  <GraduationCap className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
                  Current Pursuit
                </h3>
                <p className="text-zinc-800 dark:text-zinc-200 mb-2 font-medium text-sm">
                  B.Tech in Computer Science & Engineering
                </p>
                <p className="text-zinc-650 dark:text-zinc-400 text-sm mb-2">RR Institute Of Modern Technology, Lucknow</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">2023 - Present | 86.29%</p>
              </div>
            </div>

            {/* Card 2: My Passion */}
            <div className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 rounded-2xl p-8 hover:border-zinc-350 dark:hover:border-white/10 hover:scale-[1.01] transition-all duration-300 shadow-sm relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                loading="lazy"
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
                  <Lightbulb className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
                  My Passion
                </h3>
                <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed text-sm font-light">
                  I'm passionate about leveraging technology to solve real-world problems.
                  My focus areas include <span className="text-zinc-950 dark:text-white font-semibold">AI-powered applications</span>,
                  <span className="text-zinc-950 dark:text-white font-semibold"> web development</span>, and building
                  <span className="text-zinc-950 dark:text-white font-semibold"> citizen-centric platforms</span> that make a difference.
                  I thrive on innovation and creating <span className="text-zinc-950 dark:text-white font-semibold">emergency response systems</span>
                  that can save lives.
                </p>
              </div>
            </div>
          </div>

          {/* Skills highlight */}
          <div
            ref={rightRef}
            className={`space-y-6 reveal-fade-right ${rightVisible ? 'revealed' : ''}`}
          >
            {/* Card 3: Technical Expertise */}
            <div className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 rounded-2xl p-8 hover:border-zinc-350 dark:hover:border-white/10 hover:scale-[1.01] transition-all duration-300 shadow-sm relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                loading="lazy"
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
                  <Code className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
                  Technical Expertise
                </h3>
                <div className="space-y-3.5 text-sm text-zinc-700 dark:text-zinc-300 font-light">
                  <p><span className="text-zinc-500 dark:text-zinc-500 font-semibold mr-2">Languages:</span> Java, Python, C, JavaScript, SQL</p>
                  <p><span className="text-zinc-500 dark:text-zinc-500 font-semibold mr-2">Web Tech:</span> HTML, CSS, React, FastAPI, Node.js, MERN Stack</p>
                  <p><span className="text-zinc-500 dark:text-zinc-500 font-semibold mr-2">Databases:</span> MySQL, Firebase, MongoDB</p>
                  <p><span className="text-zinc-500 dark:text-zinc-500 font-semibold mr-2">Tools/Platforms:</span> Git, GitHub, VS Code, Vercel, Figma, MySQL Workbench, Canva, Microsoft 365</p>
                  <p><span className="text-zinc-500 dark:text-zinc-500 font-semibold mr-2">AI/ML:</span> LLM Integration, Vector Databases</p>
                </div>
              </div>
            </div>

            {/* Card 4: Soft Skills */}
            <div className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 rounded-2xl p-8 hover:border-zinc-350 dark:hover:border-white/10 hover:scale-[1.01] transition-all duration-300 shadow-sm relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                loading="lazy"
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6 flex items-center group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
                  <Users className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Quick Learner", "Leadership", "Teamwork", "Collaboration", "Coordination", "Attention to Detail", "Communication", "Problem-Solving",
                    "Public Speaking", "Event Management", "Creativity", "Adaptability"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-950/65 border border-zinc-200 dark:border-white/5 rounded-full text-xs font-semibold text-zinc-750 dark:text-zinc-300 hover:border-purple-500/20 dark:hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 reveal-fade ${statsVisible ? 'revealed' : ''}`}
        >
          {stats.map(({ label, value, icon: Icon, bgImage }) => (
            <div key={label} className="h-full">
              <Card className="bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-6 text-center hover:scale-[1.02] hover:border-zinc-350 dark:hover:border-white/10 transition-all shadow-sm relative overflow-hidden group">
                <img
                  src={bgImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.12] dark:opacity-[0.22] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.2] dark:group-hover:opacity-[0.32] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
                  loading="lazy"
                />
                <div className="relative z-10">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
                    {value}
                  </p>
                  <p className="text-zinc-500 dark:text-zinc-500 text-xs tracking-wider uppercase font-semibold">{label}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
