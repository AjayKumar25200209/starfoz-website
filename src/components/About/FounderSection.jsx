
import { motion, useReducedMotion } from "motion/react";
import founderImage from "../../assets/founder.jpg";

const ease = [0.16, 1, 0.3, 1];

const FounderSection = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
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
      duration: reduceMotion ? 0 : 1.1,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-[#F7F9FC] py-20 text-[#101B35] sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1720px] grid-cols-1 items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 xl:px-12 2xl:px-16">

        {/* Founder Image */}
        <div className="mx-auto w-full max-w-[360px] lg:max-w-[390px]">
          <motion.div
            {...reveal(0)}
            className="overflow-hidden rounded-xl bg-[#E8EDF5]"
          >
            <div className="aspect-[4/4.5]">
              <img
                src={founderImage}
                alt="M. Sudhan, Founder of StarFoz"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Image Caption */}
          <motion.div
            {...reveal(0.15)}
            className="mt-4 flex items-center justify-between border-t border-[#DCE3ED] pt-4"
          >
            <span className="text-xs text-[#64748B] sm:text-sm">
              The person behind StarFoz
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Founder
            </span>
          </motion.div>
        </div>

        {/* Founder Content */}
        <div className="mx-auto w-full max-w-[720px] lg:mx-0">

          {/* Eyebrow */}
          <motion.div
            {...reveal(0.1)}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-[#3987FF]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">
              Meet the Founder
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...reveal(0.2)}
            id="founder-heading"
            className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.05em] text-[#101B35]"
          >
            Building ideas into
            <span className="mt-1 block text-[#3987FF]">
              meaningful technology.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            {...reveal(0.35)}
            className="mt-7 max-w-[650px] text-base leading-8 text-[#334155] sm:text-lg"
          >
            StarFoz was built on the belief that the right technology
            can turn complex business challenges into meaningful
            opportunities.
          </motion.p>

          <motion.p
            {...reveal(0.5)}
            className="mt-4 max-w-[650px] text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8"
          >
            With a focus on software engineering, artificial
            intelligence and business automation, M. Sudhan is
            committed to creating practical digital solutions that
            help businesses work smarter and move forward.
          </motion.p>

          {/* Founder Details */}
          <motion.div
            {...reveal(0.65)}
            className="mt-9 border-t border-[#DCE3ED] pt-6"
          >
            <h3 className="text-xl font-semibold tracking-tight text-[#101B35]">
              M. Sudhan
            </h3>

            <p className="mt-1 text-sm text-[#64748B]">
              Founder, StarFoz
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
