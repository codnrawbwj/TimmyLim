import { projectList } from "@/constant/projectList";
import Image from "next/image";
import { iconMap } from "@/constant/iconMap";

const Projects = () => {
  return (
    <section id="projects" className="wrapper min-h-[100vh]">
      <div className="flex-center flex-col gap-[3rem]">
        <h2 className="text-[2rem] underline underline-offset-8 decoration-primary-b">
          Projects
        </h2>
        <div className="flex-center flex-col gap-[10rem] w-3/4">
          {projectList.map((project) => (
            <div key={project.title} className="flex gap-10">
              <Image
                src={project.imageLink}
                alt={project.subTitle}
                width={460}
                height={380}
                className="flex-1 object-contain"
              />
              <div className="flex justify-center items-start flex-col gap-4">
                <h3 className="text-[2rem] tracking-normal">{project.title}</h3>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
