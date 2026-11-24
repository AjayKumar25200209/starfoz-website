
import { useRef } from "react";
import { Link } from "react-router-dom";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  FiArrowUpRight,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

import heroBg from "../../assets/heroBg.png";

const ease = [0.16, 1, 0.3, 1];

const ContactHero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Background parallax - same as Home Hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["0%", "8%"]
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1, 1.04]
  );

  // Individual element animation
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 1.4,
        ease,
      },
    },
  };

  // Staggered entrance
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.28,
        delayChildren: reduceMotion ? 0 : 0.3,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="contact"
      aria-labelledby="contact-hero-heading"
      className="relative isolate flex min-h-[calc(100svh-82px)] w-full items-center overflow-hidden bg-[#071426] text-white"
    >
      {/* Background Image */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        style={
          reduceMotion
            ? {}
            : {
                y: backgroundY,
                scale: backgroundScale,
              }
        }
      >
        <img
          src={heroBg}
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-[65%_center] sm:object-center"
        />
      </motion.div>

      {/* Same Gradient Overlay as Home Hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#071426]/90 via-[#071426]/60 to-[#071426]/5"
      />

      {/* Main Hero Container */}
      <div className="mx-auto w-full max-w-[1720px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[950px]"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#3987FF]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8DBAFF]">
                Let's Connect
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            id="contact-hero-heading"
            variants={fadeUp}
            className="text-[clamp(2.8rem,6.5vw,5.8rem)] font-bold leading-[1.06] tracking-[-0.055em]"
          >
            Let's Build Something

            <span className="mt-2 block text-[#3987FF]">
              Meaningful Together.
            </span>

            <span className="mt-4 block text-[clamp(1.5rem,3vw,2.4rem)] font-semibold leading-tight tracking-[-0.035em] text-white">
              Your Next Big Idea Starts Here.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[680px] text-base leading-8 text-[#D0D9E8] sm:text-lg"
          >
            Have a project in mind or looking to solve a business
            challenge? Let's discuss your ideas and explore how
            technology can move your business forward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* Primary CTA */}
            <a
              href="mailto:contact@starfoz.com"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-[#3987FF] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2878F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              <FiMail size={18} />

              Email Us

              <FiArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Secondary CTA */}
            <Link
              to="/services"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/[0.05] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-[#3987FF] hover:bg-[#3987FF]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              <FiMessageCircle size={18} />

              Explore Our Services

              <FiArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
