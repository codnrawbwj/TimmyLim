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
  javascript: <JavascriptIcon width={65} />,
  typescript: <TypescriptIcon width={65} />,
  python: <PythonIcon width={65} />,
  html: <HTMLIcon width={65} />,
  css: <CSSIcon width={65} />,
  tailwind: <TailwindIcon width={65} />,
  sass: <SassIcon width={65} />,
  react: <ReactIcon width={65} />,
  nextjs: <NextjsIcon width={65} />,
  nodejs: <NodejsIcon width={65} />,
  mongoDB: <MongoDBIcon width={65} />,
  garphQL: <GraphQLIcon width={65} />,
  git: <GitIcon width={65} />,
  figma: <FigmaIcon width={65} />,
  jest: <JestIcon width={65} />,
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="wrapper min-h-[100vh] flex-center flex-col gap-[3rem]"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        y: { duration: 1 },
      }}
    >
      <h2 className="text-[2rem] underline underline-offset-4 decoration-primary-b">
        Skills
      </h2>
      <div className="w-full grid md:grid-cols-5 grid-cols-3">
        {Object.entries(iconMap).map(([key, icon]) => (
          <motion.div
            key={key}
            className="flex-center group p-[1rem] md:px-[2.5rem] md:py-[2rem]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="transition-opacity group-hover:opacity-30">
              {icon}
            </div>
            <div className="absolute mb-2 px-3 py-1 text-md font-semibold bg-transparent text-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {key[0].toUpperCase() + key.slice(1)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
