
import { motion, useReducedMotion } from "motion/react";
import founderImage from "../../assets/founder.jpg";

const ease = [0.22, 1, 0.36, 1];

const FounderSection = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.2,
    },
    transition: {
      duration: reduceMotion ? 0 : 1.25,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-[#101B35] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1720px] grid-cols-1 items-center gap-10 px-5 sm:px-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">

        {/* Founder Image */}
        <div className="w-full max-w-[380px] lg:mx-auto">
          <motion.div
            {...reveal(0)}
            className="aspect-[4/4.5] overflow-hidden rounded-md bg-[#172238]"
          >
            <img
              src={founderImage}
              alt="M. Sudhan, Founder of StarFoz"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          {/* Image Caption */}
          <motion.div
            {...reveal(0.2)}
            className="mt-3 flex items-center justify-between border-t border-[#293246] pt-3"
          >
            <span className="text-xs text-[#91A5C5]">
              The person behind StarFoz
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#91A5C5]">
              Founder
            </span>
          </motion.div>
        </div>

        {/* Founder Content */}
        <div className="max-w-[720px]">

          {/* Eyebrow */}
          <motion.div
            {...reveal(0.1)}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#3987FF]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#91A5C5]">
              Meet the Founder
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...reveal(0.25)}
            id="founder-heading"
            className="text-4xl font-bold leading-[1.1] tracking-[-0.055em] sm:text-5xl"
          >
            Building ideas into
            <span className="block text-[#3987FF]">
              meaningful technology.
            </span>
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            {...reveal(0.45)}
            className="mt-6 text-base leading-8 text-white sm:text-lg"
          >
            StarFoz was built on the belief that the right
            technology can turn complex business challenges
            into meaningful opportunities.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            {...reveal(0.65)}
            className="mt-4 text-sm leading-7 text-[#B9C8DF] sm:text-base sm:leading-8"
          >
            With a focus on software engineering, artificial
            intelligence and business automation, M. Sudhan
            is committed to creating practical digital solutions
            that help businesses work smarter and move forward.
          </motion.p>

          {/* Founder Details */}
          <motion.div
            {...reveal(0.85)}
            className="mt-8 border-t border-[#293246] pt-5"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              M. Sudhan
            </h3>

            <p className="mt-1 text-sm text-[#91A5C5]">
              Founder, StarFoz
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
