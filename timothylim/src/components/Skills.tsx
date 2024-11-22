"use client";
import {
  CSSIcon,
  FigmaIcon,
  GitIcon,
  GraphQLIcon,
  HTMLIcon,
  JavascriptIcon,
  JestIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/icons";
import { motion } from "motion/react";

const iconMap = {
  javascript: <JavascriptIcon width={80} />,
  typescript: <TypescriptIcon width={80} />,
  python: <PythonIcon width={80} />,
  html: <HTMLIcon width={80} />,
  css: <CSSIcon width={80} />,
  tailwind: <TailwindIcon width={80} />,
  sass: <SassIcon width={80} />,
  react: <ReactIcon width={80} />,
  nextjs: <NextjsIcon width={80} />,
  nodejs: <NodejsIcon width={80} />,
  mongoDB: <MongoDBIcon width={80} />,
  garphQL: <GraphQLIcon width={80} />,
  git: <GitIcon width={80} />,
  figma: <FigmaIcon width={80} />,
  jest: <JestIcon width={80} />,
};

const Skills = () => {
  return (
    <motion.section
      className="wrapper min-h-[100vh] flex-center flex-col gap-[3rem]"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        x: { duration: 1 },
      }}
    >
      <h2 className="text-[2rem] underline underline-offset-4 decoration-primary-b">
        Skills
      </h2>
      <div className="w-full grid grid-cols-5">
        {Object.entries(iconMap).map(([key, icon]) => (
          <div key={key} className="flex-center px-[2.5rem] py-[2rem]">
            {icon}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
