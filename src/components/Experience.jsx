import { useState } from 'react';
import { Briefcase, Award, X, ZoomIn } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

import socaLogo from '../assets/3.png';
import sertiImg from '../assets/serti.png';
import workImg from '../assets/figma.png';

export default function Experience() {
  const [showCert, setShowCert] = useState(false);
  const [showWorkImg, setShowWorkImg] = useState(false);

  const experiences = [
    {
      company: "Soca AI",
      role: "QA",
      period: "2024 (3 Months)",
      location: "Indonesia",
      description: "Contributed to developing and optimizing features for the Soca AI platform. Collaborated with cross-functional teams to enhance user experience.",
      tags: ["React", "AI Integration", "Postman"],
      logo: socaLogo,
      certificate: sertiImg,
      workImage: workImg
    }
  ];

  return (
    <>
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
                 
                 {/* Description + Work Image side by side */}
                 <div className="flex flex-col md:flex-row gap-6 mb-6">
                   <div className="flex-1">
                     <p className="text-gray-400 leading-relaxed mb-4">
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

                   {/* Work Image */}
                   {exp.workImage && (
                     <div
                       className="relative w-full md:w-64 lg:w-72 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 cursor-pointer group/img"
                       onClick={() => setShowWorkImg(true)}
                     >
                       <img
                         src={exp.workImage}
                         alt="QA Testing Work"
                         className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                         <span className="flex items-center gap-1.5 text-xs text-white/90 font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                           <ZoomIn size={14} />
                           View work
                         </span>
                       </div>
                     </div>
                   )}
                 </div>

                 {/* Certificate Section */}
                 {exp.certificate && (
                   <div className="pt-4 border-t border-white/5">
                     <button
                       onClick={() => setShowCert(true)}
                       className="flex items-center gap-3 group/cert cursor-pointer w-full"
                     >
                       {/* Thumbnail */}
                       <div className="relative w-20 h-14 rounded-lg overflow-hidden border border-white/10 group-hover/cert:border-blue-400/50 transition-all duration-300 flex-shrink-0">
                         <img
                           src={exp.certificate}
                           alt="Certificate"
                           className="w-full h-full object-cover group-hover/cert:scale-110 transition-transform duration-300"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                       </div>
                       <div className="flex items-center gap-2 text-left">
                         <Award size={16} className="text-blue-400 flex-shrink-0" />
                         <div>
                           <span className="text-sm font-medium text-gray-300 group-hover/cert:text-blue-400 transition-colors">
                             Certificate of Completion
                           </span>
                           <p className="text-xs text-gray-500">Click to view</p>
                         </div>
                       </div>
                     </button>
                   </div>
                 )}
               </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>

    {/* Certificate Modal Overlay */}
    {showCert && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setShowCert(false)}
        style={{ animation: 'fadeIn 0.2s ease-out' }}
      >
        <div
          className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'scaleIn 0.3s ease-out' }}
        >
          {/* Close button */}
          <button
            onClick={() => setShowCert(false)}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="px-6 pt-5 pb-3 flex items-center gap-3">
            <Award size={20} className="text-blue-400" />
            <div>
              <h3 className="text-white font-semibold text-lg">Certificate</h3>
              <p className="text-gray-400 text-sm">Soca AI — Quality Assurance Internship</p>
            </div>
          </div>

          {/* Certificate Image */}
          <div className="px-6 pb-6">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src={sertiImg}
                alt="Certificate of Completion"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Work Image Modal Overlay */}
    {showWorkImg && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setShowWorkImg(false)}
        style={{ animation: 'fadeIn 0.2s ease-out' }}
      >
        <div
          className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'scaleIn 0.3s ease-out' }}
        >
          <button
            onClick={() => setShowWorkImg(false)}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="px-6 pt-5 pb-3 flex items-center gap-3">
            <Briefcase size={20} className="text-blue-400" />
            <div>
              <h3 className="text-white font-semibold text-lg">QA Testing Work</h3>
              <p className="text-gray-400 text-sm">Soca AI — Quality Assurance</p>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src={workImg}
                alt="QA Testing Work"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    )}

    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.92); }
        to { opacity: 1; transform: scale(1); }
      }
    `}</style>
    </>
  )
}
