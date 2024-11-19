"use client";
import { motion } from "motion/react";

const HomeSection = () => {
  return (
    <motion.div
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeIn", duration: 0.7 }}
    >
      <section className="wrapper min-h-[90vh] flex items-center font-primary">
        <div className="text-[3rem] leading-[1.6] tracking-wide ml-4">
          <h1 className="underline text-underline-offset-0 decoration-[6px] decoration-secondary">
            CHAE-UK LIM <span className="text-[2rem]">aka</span> TIMOTHY
          </h1>
          <p>FRONT-END</p>
          <p>SOFTWARE ENGINEER</p>
        </div>
      </section>
    </motion.div>
  );
};

export default HomeSection;
