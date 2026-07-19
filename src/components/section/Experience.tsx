import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const experiences = [
    {
      title: "Prompt Engineering Intern",
      company: "Tata Consultancy Services (TCS)",
      location: "Remote",
      period: "Jun 2026 – Present",
      description: [
        "Designing agentic AI workflows that automate exception handling across enterprise Order-to-Cash (O2C) operations for Fortune 500 manufacturing clients.",
        "Engineered LLM-powered prompts and interactive stakeholder demos showcasing autonomous decision-making, human-in-the-loop approvals, and enterprise AI automation."
      ]
    },
    {
      title: "Artificial Intelligence Research Assistant",
      company: "University of California, Irvine",
      location: "Irvine, CA",
      period: "Jan 2025 – Present",
      description: [
        "Co-authored an IEEE-published paper exploring the impact of generative AI on computer science education under Prof. Hadar Ziv.",
        "Developed deep learning models on NASA PACE datasets, increasing plankton classification accuracy by 32% through feature engineering and data preprocessing."
      ]
    },
    {
      title: "Security Operations Intern",
      company: "Simpl",
      location: "Bangalore, India",
      period: "Jul 2025 – Sept 2025",
      description: [
        "Performed security analysis across Simpl's payment infrastructure serving 26,000+ merchants, uncovering 4 exploitable vulnerabilities in production systems.",
        "Validated CVEs using Docker-based environments, strengthening platform security for over 1 million monthly active users."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Mendix",
      location: "Irvine, CA",
      period: "Jun 2024 – Sept 2024",
      description: [
        "Delivered 5+ production-ready application features by translating business requirements into scalable software using Agile development practices.",
        "Partnered with product and UX teams to build data-driven features that increased user engagement by 8.2%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;