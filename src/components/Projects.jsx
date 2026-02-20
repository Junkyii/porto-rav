import { useState, useEffect } from 'react';
import { Github, Star, GitFork, ArrowRight, Folder, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Junkyii/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching repos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section id="projects" className="py-20 bg-deep-black text-white">
      <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-2xl bg-white/5 mb-6 border border-white/10">
            <Folder size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gray-500">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my latest work from GitHub. Click on a project for details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <motion.div 
              layoutId={`project-${repo.id}`}
              key={repo.id} 
              onClick={() => setSelectedProject(repo)}
              className="cursor-pointer group relative h-full bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
              
              <div className="flex justify-between items-start mb-6 z-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-colors duration-300">
                  <Folder size={24} className="group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="flex gap-4">
                  <div className="text-gray-400 hover:text-white transition-colors">
                    <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              <motion.h3 layoutId={`title-${repo.id}`} className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors z-10">{repo.name}</motion.h3>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3 z-10">
                {repo.description || "No description available."}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 font-mono mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors z-10">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a 
             href="https://github.com/Junkyii" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors border-b border-white/20 hover:border-white pb-0.5"
           >
             View all repositories <ArrowRight size={16} />
           </a>
        </div>
      </RevealOnScroll>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            layoutId={selectedProject.id}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="bg-gray-900 p-8 rounded-3xl w-full max-w-2xl border border-white/10 shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                  <Folder size={24} className="text-blue-400" />
                </div>
                <div className="flex gap-4 mr-12">
                   <a href={selectedProject.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                      <Github size={20} /> <span className="text-sm">View Code</span>
                    </a>
                   {selectedProject.homepage && (
                    <a href={selectedProject.homepage} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                      <ArrowRight size={20} /> <span className="text-sm">Live Demo</span>
                    </a>
                   )}
                </div>
              </div>

              <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl font-bold mb-4 text-white">{selectedProject.name}</motion.h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedProject.description || "No description available."}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                 {selectedProject.topics && selectedProject.topics.map(topic => (
                   <span key={topic} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                     {topic}
                   </span>
                 ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 font-mono border-t border-white/10 pt-6">
                <div className="flex items-center gap-6">
                  {selectedProject.language && (
                    <span className="flex items-center gap-2">
                       <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                       {selectedProject.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Star size={16} className="text-yellow-500" /> {selectedProject.stargazers_count} Stars
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitFork size={16} /> {selectedProject.forks_count} Forks
                  </span>
                </div>
                
                <div className="text-xs text-gray-500">
                  Last Updated: {new Date(selectedProject.updated_at).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
