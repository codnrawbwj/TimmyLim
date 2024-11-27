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
          <motion.div
            key={key}
            className="flex-center px-[2.5rem] py-[2rem]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
            {/* <span className="tooltip absolute bottom-[-2rem] text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 transition-opacity duration-200">
              {key}
            </span> */}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
