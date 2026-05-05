import Navbar from '../components/Navbar';
import ScrambleText from '../components/ScrambleText';
import SkillsGlobe from '../components/SkillsGlobe';

export default function Page() {
  const skills = ["Python", "Java", "C++", "React", "Node.js", "Docker", "AWS", "SQL"];

  return (
    <div>
      <Navbar />

      {/* HERO - Hand-drawn style title */}
      <div className="section">
        <div style={{ textAlign: 'center' }}>
          <ScrambleText text="Hi, I'm Aanya" />
          <p style={{ color: '#B36B6E', marginTop: '10px' }}>CS @ UC Irvine | AI Research</p>
        </div>
      </div>

      {/* ABOUT - The "Scrapbook" Section from the video */}
      <div id="about" className="section">
        <div className="scrapbook-card">
          <h2 style={{ fontFamily: 'serif', color: '#B36B6E' }}>hi!</h2>
          <p>
            I'm a Computer Science student at <strong>UC Irvine</strong> (GPA: 3.98!) 
            specializing in AI. Currently researching deep learning models for NASA datasets 
            and leading AI in Healthcare (CareTech).
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
             <button style={{ border: '1px solid #B36B6E', background: 'none', padding: '5px 15px', borderRadius: '20px' }}>Resume +</button>
             <button style={{ border: '1px solid #B36B6E', background: 'none', padding: '5px 15px', borderRadius: '20px' }}>Contact +</button>
          </div>
        </div>
      </div>

      {/* EXPERIENCE - Simpl & Mendix */}
      <div id="experience" className="section">
        <h3 style={{ color: '#B36B6E' }}>Experience</h3>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <ExperienceItem 
            title="SecOps Intern" 
            company="Simpl (Bangalore)" 
            desc="Identified 4 exploitable bugs in live systems for 1M+ users."
          />
          <ExperienceItem 
            title="Software Developer Intern" 
            company="Mendix" 
            desc="Delivered 5+ production-ready solutions using Agile."
          />
        </div>
      </div>

      {/* SKILLS - Using your list */}
      <div id="skills" className="section">
        <h3 style={{ marginBottom: '40px', color: '#B36B6E' }}>My Toolkit</h3>
        <SkillsGlobe skills={skills} />
      </div>
    </div>
  );
}

function ExperienceItem({ title, company, desc }) {
  return (
    <div style={{ marginBottom: '30px', borderLeft: '2px solid #f2c9cc', paddingLeft: '20px' }}>
      <h4 style={{ margin: 0 }}>{title}</h4>
      <small style={{ color: '#888' }}>{company}</small>
      <p style={{ fontSize: '0.9rem' }}>{desc}</p>
    </div>
  );
}