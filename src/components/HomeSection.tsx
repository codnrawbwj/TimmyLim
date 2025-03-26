"use client";
import { motion } from "motion/react";

const HomeSection = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeIn", duration: 0.7 }}
    >
      <section className="wrapper min-h-[100vh] flex items-center font-primary">
        <div className="text-[3rem] leading-[1.6] tracking-wide ml-4">
          <h1 className="underline text-underline-offset-0 decoration-[6px] decoration-secondary">
            CHAE-UK LIM <span className="text-[2rem]">aka</span> TIMOTHY
          </h1>
          <p>FRONT-END</p>
          <p>SOFTWARE DEVELOPER</p>
        </div>
      </section>
    </motion.div>
  );
};

export default HomeSection;
