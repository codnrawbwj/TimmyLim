"use client";
import { FacebookIcon, GithubIcon, LinkedinbIcon } from "@/icons";
import Image from "next/image";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="wrapper min-h-[100vh] flex-center flex-col tracking-wide gap-10"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        y: { duration: 1 },
      }}
    >
      <div className="flex-center flex-col leading-[1.2] gap-2 pt-[10rem] md:pt-0">
        <h2 className="text-[2rem] underline font-medium underline-offset-4 decoration-primary-b">
          Chae-Uk Lim
        </h2>
        <p className="text-[1rem] font-medium">
          and I go by{" "}
          <span className="text-[1.5rem] font-normal underline underline-offset-8 decoration-secondary decoration-4">
            Timothy
          </span>
        </p>
      </div>
      <div className="max-w-[80%] flex gap-6 md:flex-row flex-col-reverse ">
        <div className="text-[1rem] md:text-[1.3rem] flex flex-col gap-4">
          <p>Hello There! Thank you for visiting my website.</p>
          <p>
            My name is Chae-uk Lim, also known as Timothy, and I am a{" "}
            <span className="font-semibold">front-end developer</span> currently
            working at WorkOnward with 2 years of experience.
          </p>
          <p>
            With a passion for analyzing logic and flows, I thrive on the
            challenge of finding creative solutions to complex problems. I take
            pride in staying up-to-date with the latest trends and best
            practices in front-end development.
          </p>
        </div>
        <div className="min-w-[300px]">
          <Image
            src="./assets/myProfile.jpg"
            width={270}
            height={300}
            alt="my profile picture"
          />
        </div>
      </div>
      <div className="flex-center gap-8">
        <motion.a
          href="https://github.com/codnrawbwj"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "inherit",
          }}
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GithubIcon width={36} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/chaeuk-lim/"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "inherit",
          }}
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <LinkedinbIcon width={36} />
        </motion.a>
        <motion.a
          onClick={() => alert("Woops! This is a private account 😉")}
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "inherit",
          }}
          target="_blank"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FacebookIcon width={36} />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default AboutMe;
