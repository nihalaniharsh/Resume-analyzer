// For mock-analysis-logic

export function analyzeResume() {
  const score = Math.floor(Math.random() * 101);

  const found = [
    "JavaScript",
    "React",
    "CSS",
    "HTML",
    "TypeScript",
    "CI/CD",
    "Git",
    "SQL",
    "Docker",
    "REST API",
    "Node.js",
  ];

  const missing= [
      "Testing",
      "Communication",
      "CSS",
      "Agile",
      "Python",
    ];

  const suggestionsData = [
    "Quantify your impact with measurable results",
    "Use ATS-friendly, role-specific keywords",
    "Maintain consistent formatting and structure",
    "Highlight achievements rather than responsibilities",
    "Use strong action verbs to demonstrate impact",
  ];

  return {
    score,
    found,
    missing,
    suggestions: suggestionsData.slice(0, 3 + Math.floor(Math.random() * 2)),
  };
}
