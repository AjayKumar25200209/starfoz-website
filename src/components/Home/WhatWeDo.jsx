
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowRight,
  FiCode,
  FiGitBranch,
  FiCpu,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Digital Products",
    description:
      "We design and develop digital experiences that help businesses grow and deliver meaningful value.",
    capabilities: [
      "Web Development",
      "Mobile Applications",
      "Custom Software",
    ],
    icon: FiCode,
  },
  {
    number: "02",
    title: "Business Automation",
    description:
      "Simplify everyday operations by automating repetitive tasks and connecting business workflows.",
    capabilities: [
      "Workflow Automation",
      "Power Platform",
      "Process Automation",
    ],
    icon: FiGitBranch,
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    description:
      "Build intelligent applications and practical AI solutions that make business processes smarter.",
    capabilities: [
      "Generative AI",
      "AI Agents",
      "Intelligent Applications",
    ],
    icon: FiCpu,
  },
];

const ease = [0.16, 1, 0.3, 1];

const WhatWeDo = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="bg-[#F8FAFC] py-16 text-[#101B35] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-7 lg:px-10 xl:px-12 2xl:px-16">

        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="mb-12 flex flex-col justify-between gap-5 sm:mb-14 lg:flex-row lg:items-end"
        >
          <div className="max-w-[850px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#3987FF]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8492A6]">
                02 / What We Do
              </span>
            </div>

            <h2
              id="what-we-do-heading"
              className="text-[clamp(2.3rem,5vw,4.5rem)] font-bold leading-[1.06] tracking-[-0.06em] text-[#101B35]"
            >
              Technology that
              <span className="block text-[#3987FF]">
                moves business forward.
              </span>
            </h2>
          </div>

          <p className="max-w-[370px] text-sm leading-7 text-[#64748B] sm:text-[15px] lg:pb-1">
            We create digital products and intelligent solutions
            that help businesses operate, connect and grow.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.85,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease,
                }}
                className="group flex min-h-[390px] flex-col rounded-[18px] border border-[#E8EDF5] bg-white p-7 shadow-[0_12px_40px_rgba(16,27,53,0.035)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,27,53,0.075)] sm:p-8 lg:p-9"
              >

                {/* Icon */}
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[16px] bg-[#EFF5FF] text-[#3987FF] transition-colors duration-300 group-hover:bg-[#E5EFFF]">
                  <Icon
                    size={29}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Number */}
                <span className="mt-7 text-[13px] font-bold tracking-[0.12em] text-[#3987FF]">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-[23px] font-bold leading-tight tracking-[-0.035em] text-[#101B35]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[17px] leading-[1.8] text-[#718198]">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5">
                  {service.capabilities.map((capability, i) => (
                    <span
                      key={capability}
                      className="text-[12px]  font-medium leading-5 text-[#718198]"
                    >
                      {capability}
                      {i !== service.capabilities.length - 1 && (
                        <span className="ml-2 text-[#CBD5E1]">·</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Explore Link */}
                <Link
                  to="/services"
                  aria-label={`Explore ${service.title}`}
                  className="group/link mt-auto flex w-fit items-center gap-3 pt-7 text-[14px] font-semibold text-[#193354] transition-colors duration-300 hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
                >
                  Explore service

                  <FiArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>

              </motion.article>
            );
          })}

        </div>

        {/* Closing Line */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs leading-6 text-[#8492A6]">
            Different disciplines. One engineering mindset.
          </p>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#101B35] transition-colors duration-300 hover:text-[#3987FF]"
          >
            Explore All Services

            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;
