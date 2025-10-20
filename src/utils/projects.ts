import type React from "react";
import ImportCostEnforcerBanner from "../assets/banners/ImportCostEnforcerBanner";
import StackDecisionBanner from "../assets/banners/StackDecisionBanner";
import TabBuddyBanner from "../assets/banners/TabBuddyBanner";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  BannerComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "StackDecision",
    description: "Tech stack recommendation platform using React and PostgreSQL, analyzing developer preferences with 87% accuracy across 50+ technologies.",
    BannerComponent: StackDecisionBanner,
    technologies: ["React", "PostgreSQL", "Node.js", "JavaScript", "Data Analysis"],
    githubUrl: "https://github.com/bhawneetkaur/stackdecision",
    liveUrl: "https://stackdecision-demo.com"
  },
  {
    id: 2,
    title: "import-cost-enforcer",
    description: "Published NPM package that enforces bundle size budgets in CI/CD pipelines, preventing 30% bundle bloat.",
    BannerComponent: ImportCostEnforcerBanner,
    technologies: ["Node.js", "NPM", "CI/CD", "JavaScript", "Bundle Analysis"],
    githubUrl: "https://github.com/bhawneetkaur/import-cost-enforcer",
    liveUrl: "https://www.npmjs.com/package/import-cost-enforcer"
  },
  {
    id: 3,
    title: "TabBuddy",
    description: "Chrome extension with Canvas-based animations and Chrome Storage API, maintaining 60fps performance with 50MB memory footprint.",
    BannerComponent: TabBuddyBanner,
    technologies: ["JavaScript", "Chrome APIs", "Canvas", "HTML5", "CSS3"],
    githubUrl: "https://github.com/bhawneetkaur/tabbuddy",
    liveUrl: "https://chrome.google.com/webstore/detail/tabbuddy"
  }
]; 