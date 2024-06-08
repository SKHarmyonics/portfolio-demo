"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 😶‍🌫️"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={skills} />
    </div>
  );
}
