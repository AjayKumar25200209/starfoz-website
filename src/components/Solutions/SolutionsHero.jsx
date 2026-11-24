
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import heroBg from "../../assets/heroBg.png";

const ease = [0.16, 1, 0.3, 1];

const SolutionsHero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

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

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 1.2,
        ease,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.22,
        delayChildren: reduceMotion ? 0 : 0.25,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[calc(100svh-82px)] w-full items-center overflow-hidden bg-[#071426] text-white"
    >
      {/* Background Image */}
      <motion.div
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
          aria-hidden="true"
          fetchPriority="high"
          className="h-full w-full object-cover object-[65%_center] sm:object-center"
        />
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#071426]/90 via-[#071426]/65 to-[#071426]/10" />

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
              Solutions by STARFOZ
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.8rem,6.5vw,5.8rem)] font-bold leading-[1.06] tracking-[-0.055em]"
          >
            Technology built
            <span className="block text-[#3987FF]">
              around your business.
            </span>
            <span className="mt-2 block text-[0.62em] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[0.68em]">
              Practical Solutions. Meaningful Impact.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-[680px] text-base leading-8 text-[#D0D9E8] sm:text-lg"
          >
            Every business has challenges that need more than off-the-shelf
            technology. We build tailored digital platforms, intelligent
            applications, and connected business solutions that help your
            business work smarter and grow confidently.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/solutions#solutions-list"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-[#3987FF] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2875E8] hover:shadow-xl hover:shadow-[#3987FF]/20"
            >
              Explore Our Solutions

              <FiArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={`https://wa.me/919080524940?text=${encodeURIComponent(
                "Hi STARFOZ, I'd like to discuss a business solution for my company."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20"
            >
              Discuss Your Requirements

              <FiArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHero;
