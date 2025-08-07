import { FintrackIcon, HamburgerIcon, MenuIcon, SearchIcon } from "@/icons";
import Image from "next/image";
import React from "react";
import Profile from "@/assets/profile.png"
import { cn } from "@/lib/utils";
import { RiCloseLargeLine } from "react-icons/ri";

type TopNavProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function TopNav({ isOpen, onToggle }: TopNavProps) {
  return (
    <header className="flex gap-4 h-[60px] justify-between items-center px-4 md:px-12 z-[1000]">
      <div
        className={cn(
          "flex items-center gap-7 transition-all duration-300",
          isOpen ? "px-0" : "px-0"
        )}
      >
        <button
          onClick={onToggle}
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          className="focus:outline-none"
        >
          {isOpen ? <RiCloseLargeLine /> : <HamburgerIcon />}
        </button>

        {isOpen && (
          <div className="flex items-center gap-1">
            <FintrackIcon />
            <h1 className="text-[24px] leading-[1] tracking-[-2%] relative top-[6px] text-teal-blue font-timmana">
              FinTrack
            </h1>
          </div>
        )}
      </div>

      <div className="flex items-center justify-self-end gap-7">
        <SearchIcon />
        <MenuIcon />
        <div>
          <Image src={Profile} alt="profile" className="object-contain w-10 h-10" />
        </div>
      </div>
    </header>
  );
}
