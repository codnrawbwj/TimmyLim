import { projectList } from "@/constant/projectList";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="wrapper min-h-[100vh]">
      <div className="flex-center flex-col gap-[3rem]">
        <h2 className="text-[2rem] underline font-medium underline-offset-8 decoration-primary-b">
          Projects
        </h2>
        {projectList.map((project) => (
          <div key={project.title} className="flex">
            <Image
              src={project.imageLink}
              alt={project.subTitle}
              width={580}
              height={450}
              className="flex-1"
            />
            <div className="flex flex-col gap-4">
              <h3>{project.title}</h3>
              <h4>{project.subTitle}</h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
