import { GraduationCap } from 'lucide-react';
import FadeIn from './FadeIn';
import smkn4Logo from '../assets/1.png';
import digitechLogo from '../assets/2.png';

export default function Education() {
  const education = [
    {
      school: "SMKN 4 Bandung",
      degree: "Vocational High School",
      year: "2022 - 2025",
      location: "Bandung, Indonesia",
      description: "Majored in Software Engineering (RPL). Learned fundamentals of programming, web development, and database management.",
      logo: smkn4Logo
    },
    {
      school: "Digitech University",
      degree: "Bachelor's Degree in Computer Science",
      year: "2025 - present",
      location: "Bandung, Indonesia",
      description: "Focusing on Software Engineering, Data Structures, and Algorithm Analysis.",
      logo: digitechLogo
    }
  ];

  return (
    <FadeIn delay={200} className="h-full">
      <div className="mb-8 flex items-center gap-3">
        <GraduationCap className="text-white" size={24} />
        <h2 className="text-xl font-bold text-white tracking-wider">EDUCATION</h2>
      </div>

      <div className="relative border-l-2 border-white/10 ml-3 space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8">
            {/* Timeline Dot */}
            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-deep-black border border-white group-hover:bg-white transition-colors duration-300" />
            
            <div className="group bg-white/5 p-5 md:p-6 rounded-xl border border-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-lg p-2 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{edu.school}</h3>
                      <div className="text-sm text-gray-400 font-medium">{edu.degree}</div>
                    </div>
                 </div>
                 <div className="flex flex-col items-end gap-1 mt-2 sm:mt-0">
                    <span className="text-xs font-mono text-green-400 bg-green-900/10 px-2 py-0.5 rounded border border-green-900/20">{edu.year}</span>
                    {index === 1 && <span className="text-[10px] font-bold bg-green-900/30 text-green-400 px-2 py-0.5 rounded border border-green-900/50">ACTIVE</span>}
                    {index === 0 && <span className="text-[10px] font-bold bg-white/10 text-gray-400 px-2 py-0.5 rounded border border-white/5">COMPLETED</span>}
                 </div>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed mt-4 border-t border-white/5 pt-4 group-hover:border-white/10 transition-colors">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}
