export interface Project {
  id: string
  name: string
  url: string
  icon?: React.ComponentType<{ className?: string }>
  inactive?: boolean
}

export interface ProjectCategory {
  category: string
  projects: Project[]
  showHeading?: boolean
}

export const projectCategories: ProjectCategory[] = [
  {
    category: "Featured",
    showHeading: false,
    projects: [
      {
        id: "portfolio",
        name: "Portfolio",
        url: "https://michaelcollins.xyz",
      },
      {
        id: "dmd-program",
        name: "DMD Program",
        url: "https://dmd.psu.edu",
      },
      {
        id: "dmd-exhibitions",
        name: "DMD Exhibitions",
        url: "https://sites.psu.edu/dmdexhibitions/",
      },
    ],
  },
  {
    category: "Learning tech",
    projects: [
      {
        id: "canvas-exam-builder",
        name: "Canvas Exam Builder",
        url: "https://canvas-exam-builder.vercel.app/",
      },
      {
        id: "learning-materials-repo",
        name: "Learning Materials Repository",
        url: "https://learning-records.vercel.app/",
      },
      {
        id: "course-outline-builder",
        name: "Course Outline Builder",
        url: "https://course-outline-builder.vercel.app",
      },
      {
        id: "oer-schema",
        name: "OER Schema",
        url: "https://oerschema-v7.vercel.app",
      },
      {
        id: "data-tumbler",
        name: "Data Tumbler Embed",
        url: "https://michaelcollins.xyz/data-tumbler-googlesheets",
      },
      {
        id: "ontolify",
        name: "Ontolify",
        url: "https://www.ontolify.com/",
      },
    ],
  },
  {
    category: "Curriculum & Pedagogy",
    projects: [
      {
        id: "aiul",
        name: "AIUL",
        url: "https://dmd-program.github.io/aiul/",
      },
      {
        id: "workflow-chart",
        name: "Workflow Chart",
        url: "https://michaelcollins.xyz/workflow-chart/",
      },
      {
        id: "dmd-100",
        name: "DMD 100: Digital Multimedia Design Foundations",
        url: "https://dmd-program.github.io/dmd-100-book/",
      },
      {
        id: "dmd-300",
        name: "DMD 300: Digital Multimedia Design Studio",
        url: "https://dmd-program.github.io/dmd-300-master/",
      },
      {
        id: "dmd-400",
        name: "DMD 400: Digital Multimedia Design Capstone",
        url: "https://dmd-program.github.io/dmd-400-master/",
      },
      {
        id: "3d-studio-legacy",
        name: "3D Studio (legacy)",
        url: "https://michaelcollins.xyz/3d-digital-studio-master/",
      },
      {
        id: "dmd-program",
        name: "DMD Program",
        url: "https://dmd.psu.edu",
      },
    ],
  },
  {
    category: "Design Consulting",
    projects: [
      {
        id: "3d-generative-art",
        name: "3D Generative Art Gallery",
        url: "",
        inactive: true,
      },
      {
        id: "playcanvas-dev",
        name: "3D PlayCanvas Dev",
        url: "https://michaelcollins.xyz/playcanvas-utility-scripts/",
      },
      {
        id: "nominalco",
        name: "Nominalco",
        url: "https://michaelcollins.xyz/nominalco/",
      },
      {
        id: "rothrock-furniture",
        name: "Rothrock Furniture",
        url: "https://rothrockfurniture.github.io/",
      },
    ],
  },
]

export const projects: Project[] = projectCategories.flatMap(
  (cat) => cat.projects
)
