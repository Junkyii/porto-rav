import { Briefcase } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

import socaLogo from '../assets/3.png';

export default function Experience() {
  const experiences = [
    {
      company: "Soca AI",
      role: "QA",
      period: "2024 (3 Months)",
      location: "Indonesia",
      description: "Contributed to developing and optimizing features for the Soca AI platform. Collaborated with cross-functional teams to enhance user experience.",
      tags: ["React", "AI Integration", "Postman"],
      logo: socaLogo
    }
  ];

  return (
    <section id="experience" className="py-20 bg-deep-black">
      <RevealOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-2xl bg-white/5 mb-6 border border-white/10">
            <Briefcase size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400">My professional journey.</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
               <div className="relative bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-white/5 rounded-lg p-2 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                       <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                       <span className="text-lg text-gray-300 font-medium">{exp.company}</span>
                     </div>
                   </div>
                   <div className="flex flex-col items-start md:items-end">
                     <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/20 transition-colors">{exp.period}</span>
                     <span className="text-xs text-gray-500 mt-1">{exp.location}</span>
                   </div>
                 </div>
                 
                 <p className="text-gray-400 leading-relaxed mb-6">
                   {exp.description}
                 </p>

                 <div className="flex flex-wrap gap-2">
                   {exp.tags.map((tag, i) => (
                     <span key={i} className="text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/5 group-hover:bg-white/20 transition-colors">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
