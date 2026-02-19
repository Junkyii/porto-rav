import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-deep-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card-bg p-8 md:p-16 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work <span className="text-white">Together</span></h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind or want to discuss a new opportunity? 
            I'm always open to new challenges and collaborations.
          </p>

          <a 
            href="mailto:ariadizaraffasha@gmail.com" 
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 shadow-lg shadow-white/25"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Raffasha Ariadiza. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              <a href="https://github.com/Junkyii" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/raffasha-ariadiza/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/raffashabluu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
