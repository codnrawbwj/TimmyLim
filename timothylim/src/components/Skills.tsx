"use client";
import { skillSet } from "@/constant/skillSet";
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
  javascript: <JavascriptIcon width={60} />,
  typescript: <TypescriptIcon width={60} />,
  python: <PythonIcon width={60} />,
  html: <HTMLIcon width={60} />,
  css: <CSSIcon width={60} />,
  tailwind: <TailwindIcon width={60} />,
  sass: <SassIcon width={60} />,
  react: <ReactIcon width={60} />,
  nextjs: <NextjsIcon width={60} />,
  nodejs: <NodejsIcon width={60} />,
  mongoDB: <MongoDBIcon width={60} />,
  garphQL: <GraphQLIcon width={60} />,
  git: <GitIcon width={60} />,
  figma: <FigmaIcon width={60} />,
  jest: <JestIcon width={60} />,
};

const Skills = () => {
  return (
    <motion.section
      className="wrapper min-h-[100vh] flex-center flex-col gap-8"
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
      <div className="flex max-w-[80%] gap-20">
        <div className="flex flex-col justify-center flex-initial text-[1.3rem] font-medium gap-16">
          {Object.keys(skillSet).map((category) => (
            <h3 key={category}>{category}</h3>
          ))}
        </div>
        <div className="flex flex-col flex-1 gap-12">
          {Object.values(skillSet).map((skills, index) => (
            <div key={index} className="flex gap-16">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  {iconMap[skill]}
                </div>
              ))}
            </div>
          ))}
          {}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
