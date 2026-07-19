import { Globe2, Search, Network, Gauge } from "lucide-react";

import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";

import { SearchEngineIcon } from "../../assets";

const SearchEngine = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={SearchEngineIcon}
        title="Web Crawler & Search Engine"
        subtitle="A scalable search engine built from scratch to crawl, index, rank, and retrieve over 50,000 web pages."
        githubUrl="https://github.com/aanya2005"
        features={[
          {
            icon: Globe2,
            title: "Scalable Web Crawling",
            description:
              "Efficiently discovers and processes thousands of web pages using concurrent crawling.",
          },
          {
            icon: Search,
            title: "Fast Search",
            description:
              "Returns highly relevant search results with sub-300ms query latency.",
          },
          {
            icon: Network,
            title: "50K+ Pages Indexed",
            description:
              "Built scalable indexing and scheduling systems capable of handling large collections of web pages.",
          },
          {
            icon: Gauge,
            title: "Optimized Ranking",
            description:
              "Designed efficient indexing and ranking algorithms for responsive information retrieval.",
          },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "This project recreates the core architecture behind a modern search engine, including URL scheduling, web crawling, document parsing, indexing, ranking, and query retrieval.",

            "A concurrent crawler continuously discovers and indexes over 50,000 web pages while efficiently handling duplicate detection, URL management, and scalable indexing.",

            "The retrieval pipeline was optimized to deliver relevant search results in under 300 milliseconds, providing a fast and responsive search experience even under heavier workloads.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack
          technologies={[
            "Python",
            "Multithreading",
            "Concurrent Processing",
            "Information Retrieval",
            "Inverted Index",
            "Search Ranking",
            "URL Scheduling",
            "Git",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Built a concurrent web crawler capable of indexing over 50,000 web pages.",
            "Designed scalable URL scheduling, duplicate detection, parsing, indexing, and ranking pipelines.",
            "Achieved sub-300ms query latency through optimized indexing and retrieval algorithms.",
            "Engineered a backend architecture capable of supporting high-throughput crawling and search operations.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default SearchEngine;