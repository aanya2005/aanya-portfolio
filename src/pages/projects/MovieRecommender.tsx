import { Sparkles, BrainCircuit, Layers3, Gauge } from "lucide-react";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";

import { MovieRecommenderIcon } from "../../assets";

const MovieRecommender = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={MovieRecommenderIcon}
        title="Movie Recommendation Engine"
        subtitle="A personalized recommendation system that learns from previously liked movies to predict what you'll enjoy next."
        githubUrl="https://github.com/aanya2005"
        features={[
          {
            icon: Sparkles,
            title: "Personalized Recommendations",
            description:
              "Generates movie suggestions tailored to each user's viewing history.",
          },
          {
            icon: BrainCircuit,
            title: "Collaborative Filtering",
            description:
              "Learns preference patterns across users to recommend similar content.",
          },
          {
            icon: Layers3,
            title: "Similarity Modeling",
            description:
              "Measures relationships between movies to identify highly relevant recommendations.",
          },
          {
            icon: Gauge,
            title: "Recommendation Evaluation",
            description:
              "Benchmarked recommendation quality using quantitative performance metrics.",
          },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "The Movie Recommendation Engine predicts which films a user is most likely to enjoy based on their previous viewing history and rating behavior.",

            "Using collaborative filtering and similarity analysis, the system uncovers hidden relationships between users and movies to generate personalized recommendations instead of relying on simple genre matching.",

            "The project focuses on building an end-to-end recommendation pipeline, from data preprocessing and feature engineering to recommendation generation and model evaluation.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technology Stack">
        <TechStack
          technologies={[
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Collaborative Filtering",
            "Recommendation Systems",
            "Similarity Modeling",
            "Machine Learning",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Built a personalized recommendation engine using collaborative filtering techniques.",
            "Implemented similarity-based ranking to generate tailored movie suggestions.",
            "Processed and analyzed large movie-rating datasets using Pandas and NumPy.",
            "Evaluated recommendation performance through quantitative model comparisons.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default MovieRecommender;