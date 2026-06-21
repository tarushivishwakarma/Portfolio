import React from "react";
import { Award, ExternalLink } from "./Icons";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { useScrollReveal } from "./useScrollReveal";

function CertificationCard({ cert }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal-scale ${isVisible ? 'revealed' : ''}`}
    >
      <Card className="h-full bg-white/80 dark:bg-zinc-900/20 backdrop-blur-md border border-zinc-200/50 dark:border-white/5 overflow-hidden hover:border-zinc-350 dark:hover:border-white/10 hover:scale-[1.01] transition-all group shadow-sm relative">
        
        {/* Subtle Background Image watermark */}
        <img
          src={cert.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] dark:opacity-[0.26] pointer-events-none group-hover:scale-105 group-hover:opacity-[0.25] dark:group-hover:opacity-[0.38] mix-blend-multiply dark:mix-blend-overlay transition-all duration-500 z-0"
          loading="lazy"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Header with simple bg */}
          <div className="bg-zinc-100/30 dark:bg-zinc-955/20 p-6 border-b border-zinc-200/50 dark:border-white/5 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/5">
                  <Award className="w-5 h-5 text-zinc-650 dark:text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-purple-650 dark:group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-650 dark:text-zinc-400 text-sm font-light">{cert.issuer}</p>
                </div>
              </div>
              {cert.verified && (
                <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/10 rounded-full text-[10px] font-semibold px-2 py-0.5">
                  Verified
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-500 pl-14">
              <span>{cert.date}</span>
              <span>•</span>
              <span>{cert.type}</span>
            </div>

            {cert.description && (
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-3 pl-14 leading-relaxed font-light">{cert.description}</p>
            )}
          </div>

          {/* Skills covered */}
          <div className="p-6 flex-1">
            <h4 className="text-xs text-zinc-500 mb-3 font-semibold uppercase tracking-wider pl-0.5">Skills Covered:</h4>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-955/60 border border-zinc-200/50 dark:border-white/5 rounded-full text-xs text-zinc-655 dark:text-zinc-400 font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* View credential link */}
          <div className="px-6 pb-6 mt-auto">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:border-zinc-450 dark:hover:border-zinc-750 transition-all cursor-pointer font-medium shadow-sm">
              <ExternalLink className="w-3.5 h-3.5" />
              View Credential
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function CertificationsSection() {
  const certifications = [
    {
      title: "Basic Java",
      issuer: "HackerRank",
      date: "December 2025",
      type: "Virtual",
      skills: ["Java", "Programming", "Problem Solving"],
      verified: true,
      bgImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Basic Python",
      issuer: "HackerRank",
      date: "October 2025",
      type: "Virtual",
      skills: ["Python", "Programming", "Algorithms"],
      verified: true,
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Data Structure And Algorithm",
      issuer: "Trainx",
      date: "Sep 2025 - Dec 2025",
      type: "Lucknow",
      description: "Impact Training Program",
      skills: ["DSA", "Algorithms", "Problem Solving", "Data Structures"],
      verified: true,
      bgImage: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Introduction To Databases",
      issuer: "META",
      date: "Apr 2025 - May 2025",
      type: "Virtual",
      skills: [
        "Data Integrity",
        "Data Manipulation",
        "Databases",
        "Database Administration",
        "Database Design",
        "MySQL",
        "Query Languages",
        "DBMS",
        "SQL",
        "Relational Databases"
      ],
      verified: true,
      bgImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="certifications" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal-fade ${headerVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-2">
            Certifications & Training
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Continuous learning through professional certifications and training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
