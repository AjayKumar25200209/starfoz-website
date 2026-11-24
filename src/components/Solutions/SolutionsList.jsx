
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiUsers,
  FiGitMerge,
  FiCpu,
  FiLayers,
  FiTarget,
  FiZap,
  FiPhone,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "919080524940";

const ease = [0.16, 1, 0.3, 1];

const solutions = [
  {
    id: "customer-management",
    number: "01",
    title: "Customer Management",
    description:
      "A connected view of your customers, leads, enquiries, and relationships. Keep every interaction organized and every opportunity visible.",
    capabilities: [
      "CRM",
      "Lead Tracking",
      "Customer Database",
      "Follow-up Management",
    ],
    icon: FiUsers,
    message:
      "Hi STARFOZ, I'd like to discuss a Customer Management solution for my business.",
  },
  {
    id: "business-operations",
    number: "02",
    title: "Business Operations",
    description:
      "Reduce manual work and connect everyday business processes through organized workflows, automated tasks, and streamlined approvals.",
    capabilities: [
      "Workflow Automation",
      "Digital Approvals",
      "Task Management",
      "Process Automation",
    ],
    icon: FiGitMerge,
    message:
      "Hi STARFOZ, I'd like to discuss a Business Operations solution for my company.",
  },
  {
    id: "ai-solutions",
    number: "03",
    title: "AI-Powered Solutions",
    description:
      "Put business knowledge and intelligent applications to work. Make information easier to access and complex tasks easier to handle.",
    capabilities: [
      "AI Assistants",
      "AI Agents",
      "Document Intelligence",
      "Intelligent Applications",
    ],
    icon: FiCpu,
    message:
      "Hi STARFOZ, I'd like to discuss an AI-Powered solution for my business.",
  },
  {
    id: "custom-platforms",
    number: "04",
    title: "Custom Digital Platforms",
    description:
      "Software shaped around your business, your teams, and your customers — built to fit the way you actually work.",
    capabilities: [
      "Web Applications",
      "Customer Portals",
      "Business Platforms",
      "Custom Dashboards",
    ],
    icon: FiLayers,
    message:
      "Hi STARFOZ, I'd like to discuss building a Custom Digital Platform for my business.",
  },
];

const SolutionsList = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="solutions-list"
      className="overflow-hidden bg-[#F7F9FC] py-16 text-[#101B35] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10 xl:px-12">

        {/* =====================================================
            EXPLORE SOLUTIONS
        ====================================================== */}

        <div className="mb-12 max-w-[850px] sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#3987FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#64748B]">
                Business Solutions
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-[64px]">
              Technology for the way
              <span className="block text-[#3987FF]">
                your business works.
              </span>
            </h2>

            <p className="mt-6 max-w-[620px] text-base leading-8 text-[#64748B] sm:text-lg">
              Purpose-built digital solutions for everyday business
              challenges. Explore how we bring technology, automation,
              and intelligence together to move your business forward.
            </p>
          </motion.div>
        </div>

        {/* Solutions Index */}
        <div className="border-t border-[#D6DFEB]">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.id}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease,
                }}
                className="group relative grid grid-cols-1 gap-5 border-b border-[#D6DFEB] py-9 transition-colors duration-300 hover:bg-white/60 sm:py-11 lg:grid-cols-[90px_minmax(0,1.05fr)_minmax(0,0.95fr)_48px] lg:items-center lg:gap-8 lg:py-12"
              >
                {/* Number */}
                <div className="flex items-center justify-between lg:block">
                  <span className="text-3xl font-light tracking-[-0.06em] text-[#3987FF] sm:text-4xl lg:text-[42px]">
                    {solution.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center text-[#3987FF] lg:hidden">
                    <Icon size={21} strokeWidth={1.5} />
                  </span>
                </div>

                {/* Title and Description */}
                <div className="min-w-0">
                  <div className="mb-3 hidden items-center gap-2 text-[#3987FF] lg:flex">
                    <Icon size={18} strokeWidth={1.6} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                      Solution {solution.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#101B35] transition-colors duration-300 group-hover:text-[#2875E8] sm:text-3xl lg:text-[34px]">
                    {solution.title}
                  </h3>

                  <p className="mt-3 max-w-[530px] text-sm leading-7 text-[#64748B] sm:text-base">
                    {solution.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="min-w-0 lg:pl-5">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                    What we can build
                  </p>

                  <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                    {solution.capabilities.map((capability, capabilityIndex) => (
                      <span
                        key={capability}
                        className="inline-flex items-center text-xs font-medium text-[#475569] sm:text-sm"
                      >
                        {capability}

                        {capabilityIndex !==
                          solution.capabilities.length - 1 && (
                          <span className="ml-2 text-[#3987FF]">/</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      solution.message
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#3987FF] transition-colors duration-300 hover:text-[#101B35]"
                  >
                    Discuss this solution
                    <FiArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>

              </motion.article>
            );
          })}

        </div>

        {/* Custom Requirement Note */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="mt-10 flex flex-col justify-between gap-4 sm:mt-12 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-semibold text-[#101B35]">
              Looking for something different?
            </p>
            <p className="mt-1 text-sm text-[#64748B]">
              We can create a solution around your specific business needs.
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi STARFOZ, I have a different business requirement and would like to discuss a custom solution."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#3987FF] transition-colors duration-300 hover:text-[#101B35]"
          >
            Discuss your requirement
            <FiArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* =====================================================
            OUR APPROACH - ORIGINAL SECTION PRESERVED
        ====================================================== */}

        <div className="mt-20 border-t border-[#DCE3ED] pt-12 sm:mt-24 sm:pt-16">
          <div className="max-w-[600px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#3987FF]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                Our Approach
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              From business challenge
              <span className="text-[#3987FF]"> to working solution.</span>
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#64748B]">
              We work with you through each stage to understand your needs
              and develop a solution that fits your business.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Discover",
                description:
                  "Understand your business, challenges, and requirements.",
                icon: FiTarget,
              },
              {
                n: "02",
                title: "Design",
                description:
                  "Plan the experience and define the right solution.",
                icon: FiLayers,
              },
              {
                n: "03",
                title: "Develop",
                description:
                  "Build and test the solution around your requirements.",
                icon: FiZap,
              },
              {
                n: "04",
                title: "Deliver",
                description:
                  "Deploy, refine, and support your digital solution.",
                icon: FiArrowUpRight,
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.n}
                  className="relative border-t border-[#DCE3ED] pt-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-[#3987FF]">
                      {step.n}
                    </span>
                    <Icon size={19} className="text-[#94A3B8]" />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#101B35]">
                    {step.title}
                  </h4>

                  <p className="mt-2 max-w-[260px] text-sm leading-6 text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA - ORIGINAL SECTION PRESERVED
        ====================================================== */}

        <div className="mt-16 overflow-hidden rounded-2xl bg-[#101B35] px-6 py-10 sm:mt-20 sm:px-10 sm:py-14 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-[650px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8DBAFF]">
                Have a challenge to solve?
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Let's find the right solution for your business.
              </h3>

              <p className="mt-3 max-w-[540px] text-sm leading-7 text-[#CBD5E1]">
                Tell us what you're trying to achieve. We'll explore the
                right technology and approach together.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi STARFOZ, I'd like to discuss a technology solution for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] shrink-0 items-center gap-3 rounded-lg bg-[#3987FF] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2875E8]"
            >
              Call us
              <FiPhone
                size={18}
                className="transition-transform duration-300"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsList;
