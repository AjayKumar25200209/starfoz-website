
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiCode,
  FiGitBranch,
  FiCpu,
  FiLayers,
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
  {
    number: "04",
    title: "System Integration",
    description:
      "Connect applications, platforms and enterprise systems for seamless information exchange.",
    capabilities: [
      "API Integration",
      "Enterprise Systems",
      "Connected Platforms",
    ],
    icon: FiLayers,
  },
];

const ease = [0.16, 1, 0.3, 1];

const WhatWeDo = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-heading"
      className="bg-[#101B35] py-16 text-white sm:py-20 lg:py-24"
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
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end"
        >
          <div className="max-w-[850px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#3987FF]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#91A5C5]">
                02 / What We Do
              </span>
            </div>

            <h2
              id="what-we-do-heading"
              className="text-[clamp(2.3rem,5vw,4.5rem)] font-bold leading-[1.06] tracking-[-0.06em]"
            >
              Technology that
              <span className="block text-[#3987FF]">
                moves business forward.
              </span>
            </h2>
          </div>

          <p className="max-w-[370px] text-sm leading-7 text-[#B9C8DF] sm:text-[15px] lg:pb-1">
            We create digital products and intelligent solutions
            that help businesses operate, connect and grow.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 22,
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
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease,
                }}
                className="group flex min-h-[310px] flex-col rounded-lg border border-[#293246] bg-transparent p-6 transition-colors duration-300 hover:border-[#39465B] sm:min-h-[330px] sm:p-7 lg:p-8"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tabular-nums tracking-[0.12em] text-[#7889A3]">
                    {service.number}
                  </span>

                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#A8B6CA]"
                  />
                </div>

                {/* Main Content */}
                <div className="mt-10">
                  <h3 className="max-w-[280px] text-xl font-semibold leading-snug tracking-[-0.035em] text-white sm:text-[22px]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-6 text-[#B9C8DF] sm:text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="mt-auto pt-8">
                  <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2">
                    {service.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="text-[10px] font-medium text-[#91A5C5] sm:text-[11px]"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    aria-label={`Explore ${service.title}`}
                    className="flex items-center justify-between border-t border-[#293246] pt-4 text-xs font-medium text-[#B9C8DF] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
                  >
                    <span>Explore Service</span>

                    <FiArrowUpRight
                      size={17}
                      className="text-[#A8B6CA] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs leading-6 text-[#91A5C5]">
            Different disciplines. One engineering mindset.
          </p>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-white transition-colors duration-300 hover:text-[#B9C8DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
          >
            Explore All Services

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
