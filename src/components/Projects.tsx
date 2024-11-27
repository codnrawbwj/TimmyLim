"use client";
import { projectList } from "@/constant/projectList";
import Image from "next/image";
import { iconMap } from "@/constant/iconMap";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="wrapper min-h-[100vh]">
      <div className="flex-center flex-col gap-[6rem] pt-[6rem]">
        <motion.h2
          className="text-[2rem] underline underline-offset-8 decoration-primary-b"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            x: { duration: 0.5 },
          }}
        >
          Projects
        </motion.h2>
        <div className="flex-center flex-col gap-[50vh] md:w-3/4 pb-[30vh]">
          {projectList.map((project) => (
            <div
              key={project.title}
              className="flex items-center gap-10 flex-col md:flex-row"
            >
              <motion.div
                className="min-w-[240px] md:min-w-[460px] flex-center h-full"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  x: { duration: 1 },
                }}
              >
                <Image
                  src={project.imageLink}
                  alt={project.subTitle}
                  width={460}
                  height={380}
                  className="hidden md:block"
                />
                <Image
                  src={project.imageLink}
                  alt={project.subTitle}
                  width={300}
                  height={240}
                  className="block md:hidden"
                />
              </motion.div>
              <motion.div
                className="flex justify-center items-start flex-col gap-4"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  x: { duration: 1 },
                }}
              >
                <h3 className="text-[2rem] tracking-normal">{project.title}</h3>
                <span className="text-[1rem] text-gray-400 italic">
                  ({project.date})
                </span>
                <h4 className="text-[1.3rem]">{project.subTitle}</h4>
                <p>
                  {project.description.split("\n").map((line, index) => (
                    <span key={index} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <div className="flex w-[45px] items-center gap-4">
                  {project.stacks.map((stack) =>
                    iconMap[stack.toLowerCase()] ? (
                      <div key={stack}>{iconMap[stack.toLowerCase()]}</div>
                    ) : null
                  )}
                </div>
                <div className="mt-4 flex-center gap-5">
                  {project.githubLink && (
                    <button className="text-[1.5rem] tracking-wider hover:text-secondary">
                      <a href={project.githubLink} target="_blank">
                        GITHUB
                      </a>
                    </button>
                  )}
                  {project.liveLink && (
                    <button className="text-[1.5rem] tracking-wider hover:text-secondary">
                      <a href={project.liveLink} target="_blank">
                        WEBSITE
                      </a>
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
