"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

interface AppHeaderProps {
  /**
   * Optionally allow a parent page crumb to be displayed.
   * e.g. { title: "Dashboard", href: "/dashboard" }
   */
  currentPage: string;
  parentPage: {
    title: string;
    href: string;
  };
}

/**
 * Dynamically computes the current page title from the URL path,
 * displaying it as a breadcrumb along with an optional parent page.
 */
export function AppHeader({ currentPage, parentPage }: AppHeaderProps) {
  // 1. Get the current pathname (e.g. "/proposals/123")
  const pathname = usePathname();

  // 2. Extract the "last segment" to use as the page title
  //    For "/proposals/123" => "123"
  //    For "/proposals" => "proposals"
  //    Fallback to "home" if there's no segment
  const segments = pathname.split("/").filter(Boolean);
  let currentPageTitle = segments.length ? segments[segments.length - 1] : "home";

  // 3. Convert the segment to a more readable title
  //    "proposals" => "Proposals"
  //    "my-page" => "My-page" (you could do further transformations if needed)
  currentPageTitle = currentPageTitle.charAt(0).toUpperCase() + currentPageTitle.slice(1);

  return (
    <header
      className="flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] 
                 ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {parentPage && (
              <>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={parentPage.href}>
                    {parentPage.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </>
            )}
            <BreadcrumbItem>
              {/* 4. Use the dynamically computed `currentPage` */}
              <BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
