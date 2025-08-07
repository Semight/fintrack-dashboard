"use client"
import React, { useState } from "react";
import Sidebar from "./sidebar";
import TopNav from "./TopNav";
import { cn } from "@/lib/utils";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((s) => !s);
  
  return (
    <div className="flex bg-background min-h-screen">
      <div>
        <Sidebar isOpen={isOpen} />
      </div>

      <div
        className={isOpen ? "fixed inset-0 z-40 md:hidden" : "hidden"}
        onClick={toggleSidebar}
        aria-hidden="true"
      />

      <div className="flex-1 relative">
        <div className="fixed z-60 top-0 left-[var(--sidebar-width,0)] right-0 bg-background">
          <TopNav isOpen={isOpen} onToggle={toggleSidebar} />
        </div>

        <main className={cn("flex-1 overflow-x-auto overflow-y-auto pt-[var(--topnav-height,72px)]", isOpen ? 'pr-4 md:pr-12' : 'px-4 md:px-12')}>
          {children}
        </main>
      </div>
    </div>
  );
}
