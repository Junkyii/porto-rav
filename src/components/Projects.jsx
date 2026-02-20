import { useState, useEffect } from 'react';
import { Github, Star, GitFork, ArrowRight, Folder, X, ExternalLink, Sparkles, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

import portoImg from '../assets/porto.png';
import porto2Img from '../assets/porto2.png';
import porto3Img from '../assets/porto3.png';

const featuredProjects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth scroll animations, dark aesthetic design, and interactive UI components.',
    image: portoImg,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Junkyii/porto-rav',
    highlight: 'Featured Project',
    status: 'live'
  },
  {
    id: 'apple-music-clone',
    title: 'Apple Music Clone',
    description: 'A sleek Apple Music-inspired web app featuring a modern UI with album grids, music player interface, and smooth navigation. Built to replicate the premium Apple Music experience.',
    image: porto2Img,
    tags: ['React', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Junkyii/apple-music-clone',
    highlight: 'Featured Project',
    status: 'closed'
  },
  {
    id: 'jadwal-coolyeah',
    title: 'Jadwal Coolyeah',
    description: 'A schedule management web application with a clean, intuitive interface. Helps users organize and track their schedules efficiently with a straightforward design.',
    image: porto3Img,
    tags: ['JavaScript', 'CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Junkyii/jadwal-coolyeah',
    highlight: 'Featured Project',
    status: 'closed'
  }
];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedFeatured, setSelectedFeatured] = useState(null);
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

  return (
    <section id="projects" className="py-20 bg-deep-black text-white">
      <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-2xl bg-white/5 mb-6 border border-white/10">
            <Folder size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gray-500">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work — from personal projects to collaborative builds.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl"></div>
              <div className="relative bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Side */}
                  <div
                    className="relative lg:w-3/5 overflow-hidden cursor-pointer group/img"
                    onClick={() => setSelectedFeatured(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 hidden lg:block"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-sm text-white font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        <ZoomIn size={16} />
                        View Details
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-blue-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Sparkles size={12} />
                        {project.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 ${
                        project.status === 'live'
                          ? 'text-green-400 bg-green-500/10 border border-green-500/20'
                          : 'text-red-400 bg-red-500/10 border border-red-500/20'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'live' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
                        {project.status === 'live' ? 'Live' : 'Closed'}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:bg-white/10 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                      >
                        <Github size={16} />
                        Source
                      </a>
                      <button
                        onClick={() => setSelectedFeatured(project)}
                        className="flex items-center gap-2 text-sm text-white bg-blue-500/20 hover:bg-blue-500/30 px-4 py-2 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all cursor-pointer"
                      >
                        <ExternalLink size={16} />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repos Section */}
        {!loading && repos.length > 0 && (
          <>
            <div className="text-center mb-10">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">More from GitHub</h3>
              <p className="text-gray-500 text-sm">Click on a project for details.</p>
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
          </>
        )}
      </RevealOnScroll>

      {/* Featured Project Modal */}
      {selectedFeatured && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedFeatured(null)}
          style={{ animation: 'projFadeIn 0.2s ease-out' }}
        >
          <div
            className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'projScaleIn 0.3s ease-out' }}
          >
            <button
              onClick={() => setSelectedFeatured(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-56 md:h-72 overflow-hidden">
              <img src={selectedFeatured.image} alt={selectedFeatured.title} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-blue-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Sparkles size={12} />
                  {selectedFeatured.highlight}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="px-6 md:px-8 pb-8 -mt-4 relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {selectedFeatured.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {selectedFeatured.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedFeatured.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedFeatured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                >
                  <Github size={16} />
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Repo Detail Modal */}
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

      <style>{`
        @keyframes projFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes projScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
