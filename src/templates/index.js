import portfolio from "./Portfolio";
import landing from "./Landing";
import blog from "./Blog";

export default [
  {
    id: "portfolio",
    name: "Portfolio",
    description: "Clean layout to showcase your work.",
    icon: "💼",
    data: portfolio,
  },
  {
    id: "landing",
    name: "Landing Page",
    description: "High-converting marketing page.",
    icon: "🚀",
    data: landing,
  },
  {
    id: "blog",
    name: "Blog",
    description: "Minimal blog layout for writers.",
    icon: "📝",
    data: blog,
  },
];
