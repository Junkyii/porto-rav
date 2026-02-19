import profileImg from '../assets/jaein.png';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <FadeIn className="bg-gradient-to-r from-card-bg to-deep-black p-8 md:p-12 rounded-2xl border-l-4 border-white">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-32 h-32 shrink-0 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
        </div>
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            My Name is <span className="text-white font-semibold">Raffasha Ariadiza</span>, Right Now i am a student in Digitech University for the degree, But im intrigue too learning web-development and ui/ux thats why i keep learning. 
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
