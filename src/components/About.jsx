import profileImg from '../assets/jaein.png';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <FadeIn>
      <div className="group relative bg-white/5 p-6 md:p-12 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] overflow-hidden">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image Container */}
          <div className="shrink-0 relative group/img">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-white/10 group-hover/img:border-white/50 transition-colors duration-300 shadow-xl">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-300" />
            </div>
            {/* Decorative background blur behind image */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl -z-10 group-hover:bg-blue-500/30 transition-colors duration-500" />
          </div>
          
          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg font-light tracking-wide">
              My Name is <span className="text-white font-semibold relative inline-block group/link cursor-none">
                Raffasha Ariadiza
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover/link:w-full"></span>
              </span>. 
              Right now I am a student at Digitech University, pursuing my degree. I'm deeply intrigued by web development and UI/UX design, driven by a passion to create intuitive and beautiful digital experiences.
            </p>
            
            {/* Tech Stack / Interests badges could go here later */}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
