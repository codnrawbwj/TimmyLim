"use client";
import { FacebookIcon, GithubIcon, LinkedinbIcon } from "@/icons";
import Image from "next/image";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section className="wrapper min-h-[100vh] flex-center flex-col tracking-wide gap-10">
      <motion.div
        className="flex-center flex-col leading-[1.2] gap-2"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
      >
        <h2 className="text-[2rem] underline font-medium underline-offset-4 decoration-primary-b">
          Chae-Uk Lim
        </h2>
        <p className="text-[1rem] font-medium">
          and I go by{" "}
          <span className="text-[1.5rem] font-normal underline underline-offset-4 decoration-primary-c">
            Timothy
          </span>
        </p>
      </motion.div>
      <motion.div
        className="max-w-[80%] flex gap-6"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <div className="text-[1.3rem] flex flex-col gap-4">
          <p>Hello There! Thank you for visiting my website.</p>
          <p>
            My name is Chae-uk Lim, aka Timothy and I am a front-end developer
            currently working at WorkOnward as a junior front-end developer and
            quality engineer.
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
            src="/assets/myProfile.jpg"
            width={270}
            height={300}
            alt="my profile picture"
          />
        </div>
      </motion.div>
      <div className="flex-center gap-8">
        <motion.a
          href="https://github.com/codnrawbwj"
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "inherit",
          }}
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
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FacebookIcon width={36} />
        </motion.a>
      </div>
    </section>
  );
};

export default AboutMe;
