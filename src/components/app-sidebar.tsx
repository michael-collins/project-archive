"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"

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
    <Sidebar collapsible="offcanvas" {...props}>
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
      <SidebarContent className="px-2">
        {projectCategories.map((category) => (
          <React.Fragment key={category.category}>
            {category.showHeading !== false && (
              <div className="px-2 py-2 text-xs font-semibold text-sidebar-foreground/70">
                {category.category}
              </div>
            )}
            <SidebarMenu>
              {category.projects.map((project) => (
                <SidebarMenuItem key={project.id}>
                  <SidebarMenuButton
                    isActive={activeProject?.id === project.id}
                    onClick={() => !project.inactive && setActiveProject(project)}
                    disabled={project.inactive}
                    tooltip={project.name}
                    className={`${activeProject?.id === project.id ? "!bg-black !text-white" : ""} ${project.inactive ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span>{project.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </React.Fragment>
        ))}
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
