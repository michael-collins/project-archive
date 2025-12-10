import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { type Project } from "@/data/projects"

interface SiteHeaderProps {
  project: Project | null
}

export function SiteHeader({ project }: SiteHeaderProps) {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        {project ? (
          <div className="flex flex-col gap-0.5">
            <h1 className="text-base font-medium">{project.name}</h1>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground hover:underline"
            >
              {project.url}
            </a>
          </div>
        ) : (
          <h1 className="text-base font-medium">Select a project</h1>
        )}
      </div>
    </header>
  )
}
