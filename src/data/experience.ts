export type ExperienceItem = { company: string; role: string; period: string; description: string; highlights: string[] }

export const experience: ExperienceItem[] = [
  {
    "company": "JSAN Consulting",
    "role": "AI Data Science Engineer",
    "period": "May 2026 – Present",
    "description": "Building AI-powered telecom infrastructure inspection and monitoring solutions.",
    "highlights": [
      "Developing asset detection, defect analysis, and automated reporting workflows using computer vision, LLMs, and RAG.",
      "Designing scalable backend APIs and integrating AI models into enterprise applications with FastAPI, React, and PostgreSQL."
    ]
  },
  {
    "company": "Techwave",
    "role": "Software Engineer",
    "period": "February 2024 – March 2026",
    "description": "Developed and deployed AI solutions for electrical and urban infrastructure, combining computer vision, Generative AI, and enterprise web applications.",
    "highlights": [
      "Built YOLOv8/YOLOv11 detection models, with an 85% improvement in asset detection accuracy reported in the résumé.",
      "Developed LLM-powered and RAG-based applications that improved response relevance by 30–35%.",
      "Built React and Django platforms for detection visualization and automated asset reporting, improving operational efficiency by 40%.",
      "Automated condition assessment to reduce manual inspection effort by 30%, and optimized image-processing pipelines to reduce inference time by 35%."
    ]
  },
  {
    "company": "Techwave",
    "role": "Software Development Intern",
    "period": "March 2023 – February 2024",
    "description": "Built a foundation in backend engineering through .NET development, web application integration, and SQL Server database management.",
    "highlights": [
      "Developed and integrated web applications using C# and Web API.",
      "Worked on API design, backend development, and database management with SQL Server."
    ]
  }
]

