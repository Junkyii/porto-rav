import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-deep-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {/* About Section - Small & Centered */}
        <div className="max-w-3xl mx-auto">
           <About />
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto">
           <Education />
        </div>
      </div>

      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
