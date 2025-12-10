import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { FolderGit2 } from "lucide-react"
import { projects, type Project } from "@/data/projects"

function ProjectViewer({ project }: { project: Project | null }) {
  if (!project) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        <div className="text-center">
          <FolderGit2 className="mx-auto h-12 w-12 mb-4 opacity-50" />
          <p className="text-lg">Select a project to view</p>
          <p className="text-sm mt-2">Choose a project from the sidebar</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <iframe
        src={project.url}
        className="h-full w-full border-0"
        title={project.name}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  )
}

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(
    projects[0]
  )

  return (
    <SidebarProvider>
      <AppSidebar
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
      <SidebarInset>
        <SiteHeader project={activeProject} />
        <ProjectViewer project={activeProject} />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App

