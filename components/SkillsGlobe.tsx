export default function SkillsGlobe() {
  const allSkills = [
    "Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "Rust",
    "React", "Node.js", "Angular", "Flask", "Docker", "Kubernetes", "AWS", "Azure"
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '600px' }}>
      {allSkills.map((skill) => (
        <div 
          key={skill}
          className="handwritten"
          style={{
            padding: '10px 18px',
            background: 'white',
            border: '1px solid var(--accent)',
            borderRadius: '50px',
            boxShadow: '2px 2px 0px var(--accent)',
            fontSize: '1.1rem'
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}