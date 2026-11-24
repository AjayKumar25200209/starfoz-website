
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import heroBg from "../../assets/heroBg.png";

const ease = [0.16, 1, 0.3, 1];

const ServicesHero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Background parallax
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

  // Entrance animations
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.28,
        delayChildren: reduceMotion ? 0 : 0.3,
      },
    },
  };

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

  return (
    <section
      ref={heroRef}
      aria-labelledby="services-hero-heading"
      className="relative isolate flex min-h-[calc(100svh-82px)] w-full items-center overflow-hidden bg-[#071426] text-white"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-30"
        style={
          reduceMotion
            ? undefined
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

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#071426]/90 via-[#071426]/60 to-[#071426]/5" />

      {/* Content */}
      <div className="mx-auto w-full max-w-[1720px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[950px]"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#3987FF]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8DBAFF]">
              What We Do
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            id="services-hero-heading"
            className="text-[clamp(2.8rem,6.5vw,5.8rem)] font-bold leading-[1.06] tracking-[-0.055em]"
          >
            Technology that
            <span className="block text-[#3987FF]">
              drives real business impact.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[680px] text-base leading-8 text-[#D0D9E8] sm:text-lg"
          >
            From custom software and digital products to artificial
            intelligence, business automation and system integration,
            we build practical technology solutions that help
            organizations solve challenges and move forward.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-[#3987FF] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2878F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071426]"
            >
              Discuss Your Project

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#services-list"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Explore Our Services

              <FiArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
