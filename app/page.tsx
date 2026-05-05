import Navbar from '../components/Navbar';
import ScrambleText from '../components/ScrambleText';
import SkillsGlobe from '../components/SkillsGlobe';

export default function Page() {
  return (
    <main>
      <Navbar />

      {/* 1. HERO - Keeping it clean like the vid */}
      <section className="section" style={{ textAlign: 'center' }}>
        <ScrambleText text="Hi, I'm Aanya" />
        <p className="handwritten" style={{ fontSize: '1.5rem', color: 'var(--pink)', marginTop: '10px' }}>
          Computer Science @ UC Irvine
        </p>
      </section>

      {/* 2. ABOUT - The "Collage" Section */}
      <section id="about" className="section" style={{ position: 'relative' }}>
        {/* Stickers floating around */}
        <span className="sticker" style={{ top: '10%', left: '10%', fontSize: '3rem' }}>🍓</span>
        <span className="sticker" style={{ bottom: '10%', right: '15%', fontSize: '2.5rem' }}>✨</span>

        <div style={{ 
          display: 'flex', 
          gap: '50px', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          maxWidth: '1100px' 
        }}>
          {/* Physical Photo Frame (The Polaroid Look) */}
          <div style={{ 
            background: 'white', 
            padding: '15px 15px 60px 15px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
            transform: 'rotate(-4deg)',
            border: '1px solid #eee'
          }}>
            <div style={{ width: '250px', height: '280px', background: '#f8d7da', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* <img src="/your-pic.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
               <span style={{ color: '#B36B6E', fontWeight: 'bold' }}>[ Your Photo ]</span>
            </div>
            <p className="handwritten" style={{ textAlign: 'center', marginTop: '15px', fontSize: '1.4rem', color: '#555' }}>uci '27</p>
          </div>

          {/* The Notebook Card */}
          <div className="scrapbook-card" style={{
            backgroundImage: `radial-gradient(#d1d1d1 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            transform: 'rotate(2deg)',
          }}>
            {/* Washi Tape */}
            <div style={{
              position: 'absolute', top: '-15px', left: '30%',
              width: '120px', height: '35px',
              background: 'rgba(179, 107, 110, 0.2)',
              border: '1px dashed var(--pink)',
              transform: 'rotate(-2deg)'
            }} />

            <h2 className="handwritten" style={{ fontSize: '2.8rem', color: 'var(--pink)', margin: '0 0 15px 0' }}>about me</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
              I'm a software engineer and <strong>Computer Science</strong> student at UCI. 
              I'm passionate about AI in Healthcare—currently working on deep learning models 
              for NASA datasets.
            </p>
            <p className="handwritten" style={{ fontSize: '1.2rem', marginTop: '15px', color: 'var(--pink)' }}>
              cat mom 🐾 • traveler ✈️ • ui designer 🎨
            </p>
            <div style={{ marginTop: '25px', display: 'flex', gap: '15px' }}>
               <button className="handwritten" style={{ padding: '8px 20px', borderRadius: '15px', border: '1px solid var(--pink)', background: 'none', cursor: 'pointer' }}>Resume</button>
               <button className="handwritten" style={{ padding: '8px 20px', borderRadius: '15px', background: 'var(--pink)', color: 'white', border: 'none', cursor: 'pointer' }}>Let's talk</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE - Timeline Style */}
      <section id="experience" className="section">
        <h2 className="handwritten" style={{ fontSize: '3rem', marginBottom: '40px' }}>experience</h2>
        <div style={{ maxWidth: '700px', width: '100%', padding: '0 20px' }}>
           <ExperienceItem 
              role="SecOps Intern" 
              place="Simpl" 
              date="2025" 
              details="Identified 4 exploitable bugs; improved payment reliability for 1M+ users." 
            />
           <ExperienceItem 
              role="AI Research Assistant" 
              place="UC Irvine" 
              date="2025 - Pres." 
              details="Developing models on NASA PACE datasets to classify plankton behavior." 
            />
        </div>
      </section>

      {/* 4. SKILLS - The Blob/Sticker cloud */}
      <section id="skills" className="section" style={{ background: 'rgba(179, 107, 110, 0.03)' }}>
        <h2 className="handwritten" style={{ fontSize: '3rem', marginBottom: '40px' }}>my toolkit</h2>
        <SkillsGlobe />
      </section>
    </main>
  );
}

// Simple Helper Component for Experience
function ExperienceItem({ role, place, date, details }: any) {
  return (
    <div style={{ marginBottom: '40px', position: 'relative', paddingLeft: '30px', borderLeft: '2px dashed var(--pink)' }}>
      <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', background: 'var(--pink)', borderRadius: '50%' }} />
      <h3 className="handwritten" style={{ margin: 0, fontSize: '1.6rem' }}>{role} @ {place}</h3>
      <small style={{ color: 'var(--pink)', fontWeight: 'bold' }}>{date}</small>
      <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>{details}</p>
    </div>
  );
}