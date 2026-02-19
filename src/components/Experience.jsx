import { Briefcase } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Experience() {
  const experiences = [
    {
      company: "Soca AI",
      role: "QA",
      period: "2024 (3 Months)",
      location: "Indonesia",
      description: "Contributed to developing and optimizing features for the Soca AI platform. Collaborated with cross-functional teams to enhance user experience.",
      tags: ["React", "AI Integration", "Postman"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-deep-black">
      <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
               <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-gray-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
               <div className="relative bg-card-bg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                   <div>
                     <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                     <span className="text-lg text-gray-300 font-medium">{exp.company}</span>
                   </div>
                   <div className="flex flex-col items-start md:items-end">
                     <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">{exp.period}</span>
                     <span className="text-xs text-gray-500 mt-1">{exp.location}</span>
                   </div>
                 </div>
                 
                 <p className="text-gray-400 leading-relaxed mb-6">
                   {exp.description}
                 </p>

                 <div className="flex flex-wrap gap-2">
                   {exp.tags.map((tag, i) => (
                     <span key={i} className="text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/5">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
