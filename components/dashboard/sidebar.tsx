"use client";

import { cn } from "@/lib/utils";
import { navItems } from "@/utils/sidebar-nav-items-util";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname() ?? "/";

  return (
    <aside
      className={cn(
        "md:sticky fixed top-0 h-screen flex flex-col bg-background transition-all duration-300 overflow-hidden z-[60]",
        isOpen ? "w-[320px]" : "w-0 md:w-[60px]"
      )}
    >
      {isOpen && (
        <nav className="mt-20 px-12 flex flex-col overflow-y-auto">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link key={item.href} href={item.href} className="no-underline">
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-2xl cursor-pointer pl-[18px] py-2 transition-colors",
                    active
                      ? "bg-teal-blue-10 text-teal-blue-20"
                      : "hover:bg-teal-blue-10 hover:text-teal-blue-20"
                  )}
                >
                  <span className="text-primary text-[15px] leading-5 font-medium font-sans">
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      )}
    </aside>
  );
}
