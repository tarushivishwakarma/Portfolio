import React from "react";
import { Trophy, Users, Mic, Star } from "./Icons";
import { Card } from "../ui/card";
import { useScrollReveal } from "./useScrollReveal";

function ExperienceCard({ exp }) {
  const [ref, isVisible] = useScrollReveal();
  const Icon = exp.icon;

  return (
    <div
      ref={ref}
      className={`reveal-fade ${isVisible ? 'revealed' : ''}`}
    >
      <Card className="h-full bg-white/80 dark:bg-zinc-900/20 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-6 hover:scale-[1.02] hover:border-zinc-350 dark:hover:border-white/10 transition-all group shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Image watermark */}
        <img
          src={exp.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
          loading="lazy"
        />

        <div className="flex items-start gap-4 relative z-10">
          <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/5 flex items-center justify-center">
            <Icon className="w-5 h-5 text-zinc-655 dark:text-zinc-305" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
              {exp.role}
            </h4>
            <p className="text-zinc-750 dark:text-zinc-300 text-sm mb-0.5">{exp.organization}</p>
            <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-3 font-light tracking-wide uppercase">{exp.type}</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed font-light">
              {exp.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function AchievementCard({ achievement }) {
  const [ref, isVisible] = useScrollReveal();
  const Icon = achievement.icon;

  return (
    <div
      ref={ref}
      className={`reveal-fade ${isVisible ? 'revealed' : ''}`}
    >
      <Card className="h-full bg-white/80 dark:bg-zinc-900/20 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-6 text-center hover:scale-[1.02] hover:border-zinc-350 dark:hover:border-white/10 transition-all group shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Image watermark */}
        <img
          src={achievement.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
          loading="lazy"
        />

        <div className="relative z-10">
          <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/5 flex items-center justify-center">
            <Icon className="w-5 h-5 text-zinc-650 dark:text-zinc-300" />
          </div>
          <h4 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
            {achievement.title}
          </h4>
          <p className="text-zinc-655 dark:text-zinc-400 text-xs leading-relaxed font-light">
            {achievement.description}
          </p>
        </div>
      </Card>
    </div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      icon: Users,
      role: "Secretary",
      organization: "New India Info Tech Society",
      type: "Technical Society",
      description: "Led coordination and management of technical events, handled promotions and team collaboration. Ensured smooth planning and execution of workshops, competitions, and student engagement activities.",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: Star,
      role: "Core Team Member",
      organization: "Pragyan ",
      type: "College Annual Fest",
      description: "Coordinated event planning and logistics for large-scale cultural and technical activities. Collaborated with multiple teams for smooth execution while developing leadership and teamwork skills.",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: Users,
      role: "Core Member",
      organization: "Tarang ",
      type: "Cultural Club",
      description: "Organized cultural activities and college events, coordinated logistics, and contributed to successful program execution. Strengthened communication and event management skills.",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: Star,
      role: "Organizing Team Member",
      organization: "Udaan ",
      type: "College Freshers' Event",
      description: "Assisted in planning and coordinating event activities, managed logistics and team collaboration for the college freshers' event.",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Debate Winner",
      description: "Won debate competitions demonstrating strong public speaking, critical thinking, and analytical skills",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: Mic,
      title: "Extempore Speaker",
      description: "Demonstrated spontaneous speaking, confidence, and effective communication in competitions",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: Star,
      title: "Content Writing Recognition",
      description: "Secured recognition showcasing creativity, critical thinking, and strong written expression",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: Mic,
      title: "Event Anchoring",
      description: "Hosted college events demonstrating strong communication, public speaking, and audience engagement",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1484712401471-05c7215a69eb?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
            Leadership & Experience
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Leadership roles and extracurricular achievements</p>
        </div>

        {/* Leadership Roles */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-8 text-center">Leadership Positions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.organization} exp={exp} />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mb-8 text-center">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.title} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
