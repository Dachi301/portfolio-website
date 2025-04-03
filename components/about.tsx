"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
      <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.175}}
          id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I’m a Full-Stack Developer with over 3 years of experience, focused on creating
          <span className="font-medium"> user-friendly interfaces</span> and improving web performance.
          I’m passionate about web development and enjoy finding <span className="font-medium">smart solutions </span>
          to challenging problems. With <span className="italic">strong communication</span> and problem-solving skills,
          I work well in a team and <span className="underline">manage my time effectively</span>. I’m quick to learn,
          committed to delivering <span className="font-medium">quality work</span>, and always looking for ways to grow
          my skills and stay updated with new technologies.
        </p>
      </motion.section>
  );
}
