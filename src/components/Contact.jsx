import { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Loader2, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { RevealOnScroll } from './RevealOnScroll';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs.sendForm(
      'service_ap3pu2f', 
      'template_l1xc7nu', 
      formRef.current, 
      '46Y43kBLYh0CqPYmT'
    )
      .then((result) => {
          setLoading(false);
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          setLoading(false);
          setStatus('error');
          console.error(error.text);
      });
  };

  return (
    <section id="contact" className="py-20 bg-deep-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested with me? <span className="text-white">Send me a email</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Have a project in mind or want to discuss a new opportunity? 
              I'm always open to new challenges and collaborations.
            </p>

            <div className="space-y-6">
              <a href="mailto:ariadizaraffasha@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
                  <Mail size={24} />
                </div>
                <span className="text-lg">ariadizaraffasha@gmail.com</span>
              </a>
              
              <div className="flex gap-4 mt-8">
                <a href="https://github.com/Junkyii" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-gray-400 hover:text-white">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/raffasha-ariadiza/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-gray-400 hover:text-white">
                  <Linkedin size={24} />
                </a>
                 <a href="https://www.instagram.com/raffashabluu/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-white/10">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Open for Project"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-medium animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm font-medium animate-fade-in">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Raffasha Ariadiza. All rights reserved.
        </div>
      </RevealOnScroll>
    </section>
  )
}
