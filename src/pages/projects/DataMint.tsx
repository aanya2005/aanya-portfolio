import { Trophy, ShieldCheck, WandSparkles, Layers3 } from "lucide-react";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";

import { DataMintIcon } from "../../assets";

const DataMint = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={DataMintIcon}
        title="DataMint AI Marketplace"
        subtitle="An award-winning marketplace combining AI discovery with blockchain-backed digital ownership."
        githubUrl="https://github.com/aanya2005"
        features={[
          {
            icon: Trophy,
            title: "First-Place Winner",
            description:
              "Recognized for combining a polished product experience with practical blockchain utility.",
          },
          {
            icon: ShieldCheck,
            title: "Verified Ownership",
            description:
              "Uses wallet authentication and blockchain records to validate digital asset ownership.",
          },
          {
            icon: WandSparkles,
            title: "AI-Powered Discovery",
            description:
              "Helps users publish, discover, and evaluate digital assets through intelligent workflows.",
          },
          {
            icon: Layers3,
            title: "Full-Stack Architecture",
            description:
              "Connects a React interface with backend APIs, metadata storage, and transactions.",
          },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "DataMint is a full-stack AI and blockchain marketplace designed to make digital asset publishing, discovery, and ownership verification more trustworthy and accessible.",

            "The platform combines a responsive marketplace experience with wallet authentication, backend APIs, decentralized metadata workflows, and blockchain-based transaction records.",

            "The project earned first place by demonstrating both technical depth and a clear user-facing application of emerging technology.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack
          technologies={[
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "REST APIs",
            "Blockchain",
            "Wallet Integration",
            "Decentralized Storage",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Built a responsive full-stack marketplace for publishing, discovering, and managing digital assets.",
            "Integrated wallet authentication and blockchain-based ownership verification.",
            "Designed backend APIs and decentralized metadata workflows for secure transactions.",
            "Created a cohesive product experience that earned first place in competition.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default DataMint;