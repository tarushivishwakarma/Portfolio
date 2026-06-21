import React from "react";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle, Clock } from "./Icons";
import { Card } from "../ui/card";
import { useScrollReveal } from "./useScrollReveal";

function EducationCard({ edu }) {
  const [ref, isVisible] = useScrollReveal();
  const isPurple = edu.color === 'purple';
  
  return (
    <div
      ref={ref}
      className={`h-full reveal-fade ${isVisible ? 'revealed' : ''}`}
    >
      <Card className="group h-full bg-white/80 dark:bg-zinc-900/10 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 p-6 rounded-2xl hover:border-zinc-355 dark:hover:border-white/10 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Image watermark */}
        <img
          src={edu.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
          loading="lazy"
        />

        {/* Subtle Background Glow behind the card */}
        <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl opacity-10 dark:opacity-5 transition-opacity duration-300 group-hover:opacity-20 ${
          isPurple ? 'bg-purple-500' : 'bg-blue-500'
        } z-0`} />

        <div className="relative z-10 flex flex-col justify-between h-full flex-1">
          <div>
            {/* Header: Status Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-255 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className={`w-5 h-5 ${isPurple ? 'text-purple-500 dark:text-purple-400' : 'text-blue-500 dark:text-blue-400'}`} />
              </div>

              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                edu.status === 'In Progress'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-650 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700'
              }`}>
                {edu.status === 'In Progress' ? (
                  <>
                    <Clock className="w-3.5 h-3.5 animate-spin [animation-duration:3s]" />
                    <span>In Progress</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Completed</span>
                  </>
                )}
              </div>
            </div>

            {/* Degree & Field */}
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
              {edu.degree}
            </h3>
            <p className="text-zinc-550 dark:text-zinc-400 text-sm font-light mb-4">
              {edu.field}
            </p>

            {/* Institution */}
            <div className="space-y-1 mb-6">
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                <p className="text-zinc-750 dark:text-zinc-300 text-sm leading-snug">{edu.institution}</p>
              </div>
              <p className="text-zinc-455 dark:text-zinc-500 text-xs ml-6">{edu.board}</p>
            </div>
          </div>

          {/* Card Footer: Grade & Duration */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-white/5 mt-auto">
            <div className="flex items-center gap-1.5 text-zinc-550 dark:text-zinc-400">
              <Calendar className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              <span className="text-xs">{edu.duration}</span>
            </div>

            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-white/5 ${
              isPurple 
                ? 'group-hover:bg-purple-500/5 group-hover:border-purple-500/20' 
                : 'group-hover:bg-blue-500/5 group-hover:border-blue-500/20'
            } transition-colors`}>
              <Award className={`w-4 h-4 ${isPurple ? 'text-purple-500 dark:text-purple-400' : 'text-blue-500 dark:text-blue-400'}`} />
              <span className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold tracking-tight">
                {edu.percentage}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "RR Institute Of Modern Technology, Lucknow",
      board: "AKTU",
      percentage: "86.29%",
      duration: "2023 - Present",
      status: "In Progress",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
    },
    {
      degree: "Intermediate (XII)",
      field: "Science",
      institution: "City Montessori School, Aliganj, Lucknow",
      board: "ISC",
      percentage: "91.75%",
      duration: "2023",
      status: "Completed",
      color: "blue",
      bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
    },
    {
      degree: "High School (X)",
      field: "ICSE",
      institution: "City Montessori School, Aliganj, Lucknow",
      board: "ICSE",
      percentage: "93.40%",
      duration: "2021",
      status: "Completed",
      color: "purple",
      bgImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="education" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
            Education
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Academic journey and educational achievements</p>
        </div>

        {/* Milestone dossier cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu) => (
            <EducationCard key={edu.degree} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
