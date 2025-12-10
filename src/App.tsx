import { useState, useEffect } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { FolderGit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects, type Project } from "@/data/projects"

function ProjectViewer({ project }: { project: Project | null }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  // Reset states when project changes
  useEffect(() => {
    setIsLoaded(false)
    setShowFallback(false)
  }, [project?.id])

  // Set timer to show fallback after 5 seconds if not loaded
  useEffect(() => {
    if (!project || isLoaded) return

    const timeoutId = setTimeout(() => {
      setShowFallback(true)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [project?.id, isLoaded])

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
    <div className="flex flex-1 flex-col overflow-hidden bg-white relative">
      {/* Spinner and fallback message container */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-white z-10 transition-opacity duration-500 ${
          showFallback ? "opacity-100" : isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {showFallback ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900 mb-4">Site Cannot Load in Iframe</p>
            <Button 
              onClick={() => window.open(project.url, '_blank')}
              className="bg-black text-white hover:bg-gray-800"
            >
              Load External Site
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="text-sm text-gray-600">Loading...</p>
          </div>
        )}
      </div>

      {/* Iframe */}
      <iframe
        key={project.id}
        src={project.url}
        className="h-full w-full border-0"
        title={project.name}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        onLoad={() => setIsLoaded(true)}
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

