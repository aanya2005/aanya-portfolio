export default function SkillsGlobe() {
  const allSkills = [
    "Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "Rust",
    "React", "Node.js", "Angular", "Flask", "Docker", "Kubernetes", "AWS", "Azure"
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      gap: '15px', 
      maxWidth: '800px',
      padding: '40px' 
    }}>
      {allSkills.map((skill, i) => (
        <div 
          key={skill}
          className="handwritten skill-tag"
          style={{
            padding: '12px 24px',
            background: 'white',
            border: '1.5px solid var(--pink)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', // Organic "blob" shape
            boxShadow: '4px 4px 0px var(--accent)',
            fontSize: '1.2rem',
            transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}