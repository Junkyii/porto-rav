import { ArrowRight, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <RevealOnScroll>
          <div>
            <h2 className="text-white font-medium tracking-wider mb-4">
              
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight mb-6 font-serif">
              Raffasha <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Ariadiza</span>
            </h1>
          </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-lg md:text-xl text-gray-400">
            <span className="font-medium text-white">Front-end Engineer</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="font-medium text-white">UI/UX Designer</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="font-medium text-white">QA Engineer</span>
          </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            
          </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#projects" className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white text-black px-8 py-3 md:py-4 rounded-full font-medium hover:bg-gray-200 transition-all hover:scale-105">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 md:py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.8}>
          <div className="flex justify-center gap-8 pt-8 text-gray-400">
            <a href="https://github.com/Junkyii" className="hover:text-white transition-colors"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/raffasha-ariadiza/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={28} /></a>
            <a href="https://www.instagram.com/raffashabluu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={28} /></a>
            <a href="mailto:raffashaariadiza@gmail.com" className="hover:text-white transition-colors"><Mail size={28} /></a>
          </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
