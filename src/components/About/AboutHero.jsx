
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import heroBg from "../../assets/heroBg.jpg";

const ease = [0.16, 1, 0.3, 1];

const AboutHero = () => {
  const reduceMotion = useReducedMotion();

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
      aria-labelledby="about-hero-heading"
      className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#101B35] text-white sm:min-h-[680px] lg:min-h-[720px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-[65%_center] sm:object-center"
        />
      </div>

      {/* Same Home Hero Overlays */}
      <div className="absolute inset-0 -z-10 bg-[#101B35]/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101B35]/65 via-[#101B35]/30 to-transparent" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101B35]/35 via-transparent to-transparent" />

      {/* Content */}
      <div className="mx-auto w-full max-w-[1720px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[850px]"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-[#3987FF]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B9C8DF]">
              About StarFoz
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            id="about-hero-heading"
            className="text-[clamp(2.7rem,5.5vw,5rem)] font-bold leading-[1.06] tracking-[-0.06em]"
          >
            Engineering what's next.
            <span className="block text-[#3987FF]">
              Building what matters.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[650px] text-sm leading-7 text-[#E0E8F5] sm:text-base sm:leading-8"
          >
            We build intelligent digital products, custom software
            and business automation that help organizations solve
            challenges and move forward.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-md bg-[#3987FF] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2878F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Let's Talk

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
