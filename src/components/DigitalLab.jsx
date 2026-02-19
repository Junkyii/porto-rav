import GitHubCalendar from 'react-github-calendar';
import { ArrowRight, Github } from 'lucide-react';

export default function DigitalLab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Lab</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
          My open-source contributions and technical experiments. 
          Building in public, one commit at a time.
        </p>
      </div>

      <a 
        href="https://github.com/Junkyii" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors"
      >
        VIEW GITHUB REGISTRY <ArrowRight size={16} />
      </a>

      <div className="bg-card-bg rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
             <Github className="text-white" size={24} />
             <span className="text-sm font-bold text-white tracking-wider">MY CONTRIBUTIONS ON GITHUB</span>
          </div>
          <span className="text-xs text-gray-500 font-mono">@JUNKYII</span>
        </div>
        
        <div className="flex justify-center md:justify-start">
             <GitHubCalendar 
               username="Junkyii" 
               colorScheme="dark"
               fontSize={12}
               blockSize={12}
               blockMargin={4}
               theme={{
                 dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
               }}
             />
        </div>
        <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
           <span>Latest contributions</span>
           <div className="flex items-center gap-1">
             <span>Less</span>
             <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#161b22] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#0e4429] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#006d32] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#26a641] rounded-sm"></div>
                <div className="w-2 h-2 bg-[#39d353] rounded-sm"></div>
             </div>
             <span>More</span>
           </div>
        </div>
      </div>
    </div>
  )
}
