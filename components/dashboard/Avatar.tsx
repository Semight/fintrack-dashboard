import Image from "next/image";
import React from "react";
import Avatar1 from "@/assets/avatar_1.png"
import Avatar2 from "@/assets/avatar_2.png"
import Avatar3 from "@/assets/avatar_3.png"
import Avatar4 from "@/assets/avatar_4.png"

export default function Avatar() {
  return (
    <div className="flex items-center gap-3">
        <div className="flex">
                <Image src={Avatar2} alt={""} className="border-2 rounded-full border-background w-8 h-8 z-50" />
                <Image src={Avatar1} alt={""} className="border-2 rounded-full border-background w-8 h-8 z-40 ml-[-10px]" />
                <Image src={Avatar4} alt={""} className="border-2 rounded-full border-background w-8 h-8 z-30 ml-[-10px]" />
                <Image src={Avatar3} alt={""} className="border-2 rounded-full border-background w-8 h-8 z-20 ml-[-10px]" />
        </div>
        <div>
            <p className="font-sans text-[15px] leading-5 tracking-[-0.5%] text-light-gray">Ava, Liam, Noah +12 others</p>
        </div>
    </div>
  )}