"use client"

import * as React from "react"
import { FolderGit2, MoreHorizontal } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { projectCategories, type Project } from "@/data/projects"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  activeProject: Project | null
  setActiveProject: (project: Project | null) => void
}

export function AppSidebar({
  activeProject,
  setActiveProject,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Michael Collins</span>
                  <span className="truncate text-xs">Projects</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {projectCategories.map((category) => (
            <React.Fragment key={category.category}>
              <SidebarMenuItem>
                <div className="px-2 py-2 text-xs font-semibold text-sidebar-foreground/70">
                  {category.category}
                </div>
              </SidebarMenuItem>
              {category.projects.map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton
                    isActive={activeProject?.id === project.id}
                    onClick={() => !project.inactive && setActiveProject(project)}
                    disabled={project.inactive}
                    tooltip={project.name}
                    className={project.inactive ? "opacity-50 cursor-not-allowed" : ""}
                  >
                    {project.icon ? (
                      <project.icon className="h-4 w-4" />
                    ) : (
                      <FolderGit2 className="h-4 w-4" />
                    )}
                    <span>{project.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </React.Fragment>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
