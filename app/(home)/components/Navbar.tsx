import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://github.com/siddhant-kumar",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://www.instagram.com/s._._i._._d/",
      label: "Instagram",
      Icon: SiInstagram,
    },
    {
      link: "https://www.twitter.com",
      label: "Twitter",
      Icon: SiX,
    },
  ];
  return (
    <nav className={cn("py-10 flex justify-between items-center", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Siddhant Kumar 🔥
      </h1>
      <div className="flex items-center gap-4">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
