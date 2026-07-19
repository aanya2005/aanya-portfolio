import { BrainCircuit, Database, Gauge, Sparkles } from "lucide-react";

import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";

import { Text2SQLIcon } from "../../assets";

const Text2SQL = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={Text2SQLIcon}
        title="Text2SQL"
        subtitle="An AI-powered system that translates natural language into executable SQL queries."
        githubUrl="https://github.com/aanya2005"
        features={[
          {
            icon: BrainCircuit,
            title: "LLM Fine-Tuning",
            description:
              "Fine-tuned Gemma-2B-it specifically for accurate SQL generation.",
          },
          {
            icon: Database,
            title: "Natural Language to SQL",
            description:
              "Converts plain-English questions into executable database queries.",
          },
          {
            icon: Gauge,
            title: "Performance Evaluation",
            description:
              "Benchmarked models using exact-match and execution-based evaluation metrics.",
          },
          {
            icon: Sparkles,
            title: "50% Accuracy Improvement",
            description:
              "Improved SQL generation accuracy by 50% over the Mistral-7B baseline.",
          },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "Text2SQL enables users to interact with relational databases using natural language instead of manually writing SQL, making data retrieval more accessible for non-technical users.",

            "The project focused on fine-tuning open-source large language models for SQL generation, comparing Gemma-2B-it against Mistral-7B across more than 10,000 benchmark queries.",

            "Through systematic experimentation, prompt engineering, and ablation studies, the model achieved significantly higher SQL generation accuracy while maintaining reliable execution performance.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack
          technologies={[
            "Python",
            "Gemma-2B-it",
            "Mistral-7B",
            "Hugging Face",
            "Machine Learning",
            "LLMs",
            "Prompt Engineering",
            "Git",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Designed an end-to-end natural language to SQL generation pipeline.",
            "Fine-tuned Gemma-2B-it, improving SQL generation accuracy by 50% over Mistral-7B.",
            "Evaluated model performance across 10,000+ benchmark queries using exact-match and execution metrics.",
            "Performed systematic ablation studies to optimize prompting strategies and model performance.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Text2SQL;