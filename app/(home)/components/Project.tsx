import React from "react";
import {
  SiHtml5,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "Ezreal",
      tech: [SiTypescript, SiReact, SiHtml5],
      link: "https://www.leagueoflegends.com/en-us/champions/ezreal/",
      cover: "/Prestige Psyops Ezreal.png",
      background: "bg-green-500",
    },
    {
      title: "Sett",
      tech: [SiNextdotjs, SiReact, SiTypescript, SiHtml5],
      link: "https://www.leagueoflegends.com/en-us/champions/sett/",
      cover: "/Spirit Blossom Sett.png",
      background: "bg-purple-500",
    },
    {
      title: "Yone",
      tech: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "https://www.leagueoflegends.com/en-pl/champions/yone/",
      cover: "/Prestige Heartsteel Yone.png",
      background: "bg-blue-500",
    },
    {
      title: "Kayn",
      tech: [SiReact, SiTypescript, SiHtml5],
      link: "https://www.leagueoflegends.com/en-us/champions/kayn/",
      cover: "/Prestige Dawnbringer Kayn.png",
      background: "bg-yellow-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Chracters 😮"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md ", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-yellow-500 text-2xl font-bold">
                      {" "}
                      {project.title}
                    </h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return (
                          <div key={index}>
                            <Icon className="w-8 h-8" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
