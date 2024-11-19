"use client";
import { FacebookIcon, GithubIcon, LinkedinbIcon } from "@/icons";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="wrapper min-h-[100vh] flex-center flex-col tracking-wide gap-10">
      <div className="flex-center flex-col leading-[1.2] gap-2">
        <h2 className="text-[2rem] underline font-medium underline-offset-4 decoration-primary-b">
          Chae-Uk Lim
        </h2>
        <p className="text-[1rem] font-medium">
          and I go by{" "}
          <span className="text-[1.5rem] font-normal underline underline-offset-4 decoration-primary-c">
            Timothy
          </span>
        </p>
      </div>
      <div className="max-w-[80%] flex gap-6">
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
      </div>
      <div className="flex-center gap-8">
        <a href="https://github.com/codnrawbwj">
          <GithubIcon width={36} />
        </a>
        <a href="https://www.linkedin.com/in/chaeuk-lim/">
          <LinkedinbIcon width={36} />
        </a>
        <a onClick={() => alert("Woops! This is a private account 😉")}>
          <FacebookIcon width={36} />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
