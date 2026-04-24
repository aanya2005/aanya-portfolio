import Navbar from '../components/Navbar';
import ScrambleText from '../components/ScrambleText';
import SkillsGlobe from '../components/SkillsGlobe';

export default function Page() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div className="section">
        <ScrambleText text="Hi, my name is Aanya" />
      </div>

      {/* ABOUT */}
      <div id="about" className="section">
        <div style={{ width: 320, height: 420, background: '#f2c9cc', borderRadius: 20 }}>
          Book section placeholder
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="section">
        Projects
      </div>

      {/* EXPERIENCE */}
      <div id="experience" className="section">
        Experience
      </div>

      {/* SKILLS */}
      <div id="skills" className="section">
        <SkillsGlobe />
      </div>
    </div>
  );
}

