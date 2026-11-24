
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiGitMerge,
  FiCpu,
} from "react-icons/fi";

const ease = [0.16, 1, 0.3, 1];

const services = [
  {
    id: "digital-products",
    number: "01",
    category: "Digital Products",
    title: "Turn your business ideas into digital experiences.",
    description:
      "We design and develop digital experiences that help businesses grow and deliver meaningful value. From your first website to a complete digital platform, we build solutions around your business needs.",
    icon: FiCode,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Developer working on a digital product",
    offerings: [
      {
        title: "Web Development",
        description:
          "Professional, responsive websites that showcase your business, explain your services, and help customers connect with you.",
      },
      {
        title: "Mobile Applications",
        description:
          "Android and iOS applications that make it easier for your customers and employees to access your services.",
      },
      {
        title: "Custom Software",
        description:
          "Business-specific platforms such as customer management systems, booking applications, admin portals, and dashboards.",
      },
    ],
    outcome:
      "A digital platform designed around your business, your customers, and the way you work.",
    whatsappMessage:
      "Hi STARFOZ, I'm interested in your Digital Products services. I'd like to discuss my project.",
  },
  {
    id: "business-automation",
    number: "02",
    category: "Business Automation",
    title: "Let technology handle repetitive work.",
    description:
      "Simplify everyday operations by automating repetitive tasks and connecting business workflows. We help businesses reduce manual work, improve accuracy, and make everyday processes easier to manage.",
    icon: FiGitMerge,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Team collaborating on business technology",
    offerings: [
      {
        title: "Workflow Automation",
        description:
          "Automate everyday activities such as notifications, follow-ups, data updates, and task assignments.",
      },
      {
        title: "Power Platform Solutions",
        description:
          "Build business applications and automated workflows using Microsoft Power Apps and Power Automate.",
      },
      {
        title: "Process Automation",
        description:
          "Connect different business activities to reduce manual steps in approvals, customer handling, and internal operations.",
      },
    ],
    outcome:
      "Less repetitive work, fewer manual steps, and more time for your team to focus on important tasks.",
    whatsappMessage:
      "Hi STARFOZ, I'm interested in your Business Automation services. I'd like to discuss my project.",
  },
  {
    id: "artificial-intelligence",
    number: "03",
    category: "Artificial Intelligence",
    title: "Make your business applications intelligent.",
    description:
      "Build intelligent applications and practical AI solutions that make business processes smarter. We use AI to help businesses understand information, assist employees, interact with customers, and simplify complex tasks.",
    icon: FiCpu,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Artificial intelligence technology concept",
    offerings: [
      {
        title: "Generative AI",
        description:
          "Use AI to generate content, summarize information, understand documents, and assist with everyday business tasks.",
      },
      {
        title: "AI Agents",
        description:
          "Develop AI-powered agents that understand instructions, use connected tools, and perform tasks with appropriate controls.",
      },
      {
        title: "Intelligent Applications",
        description:
          "Integrate AI capabilities into business applications to make information easier to access and workflows smarter.",
      },
    ],
    outcome:
      "Smarter applications, easier access to information, and practical AI capabilities that support your business.",
    whatsappMessage:
      "Hi STARFOZ, I'm interested in your Artificial Intelligence services. I'd like to discuss my project.",
  },
];

const ServicesList = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.9,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="services-list"
      className="overflow-hidden bg-[#F7F9FC] py-14 text-[#101B35] sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10 xl:px-12">

        {/* Section Introduction */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 max-w-[850px] sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={reveal}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-9 bg-[#3987FF]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#64748B]">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="text-4xl font-bold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            Technology should solve
            <span className="block text-[#3987FF]">
              real business problems.
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-[680px] text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8"
          >
            Every business has different challenges. We bring together
            software development, automation, and artificial intelligence
            to create technology that makes a meaningful difference.
          </motion.p>
        </motion.div>

        {/* Services */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <motion.article
                key={service.id}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14"
              >
                {/* Image */}
                <motion.div
                  variants={reveal}
                  className={`relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-full ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/75 via-[#071426]/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                    <div>
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        Our Expertise
                      </span>

                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {service.category}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md sm:h-14 sm:w-14">
                      <Icon size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={stagger}
                  className={`flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <motion.div
                    variants={reveal}
                    className="mb-4 flex items-center gap-3"
                  >
                    <span className="text-sm font-semibold tracking-widest text-[#3987FF]">
                      {service.number}
                    </span>

                    <span className="h-px w-10 bg-[#CBD5E1]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                      {service.category}
                    </span>
                  </motion.div>

                  <motion.h3
                    variants={reveal}
                    className="max-w-[600px] text-3xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-[42px]"
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    variants={reveal}
                    className="mt-4 max-w-[600px] text-base leading-7 text-[#64748B] sm:leading-8"
                  >
                    {service.description}
                  </motion.p>

                  {/* Offerings */}
                  <motion.div variants={reveal} className="mt-6">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#101B35]">
                      What can we build for you?
                    </h4>

                    <div className="space-y-4">
                      {service.offerings.map((offering) => (
                        <motion.div
                          key={offering.title}
                          variants={reveal}
                          className="flex gap-3"
                        >
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3987FF]/10 text-[#3987FF]">
                            <FiCheck size={13} />
                          </div>

                          <div>
                            <h5 className="text-base font-semibold text-[#101B35]">
                              {offering.title}
                            </h5>

                            <p className="mt-1 max-w-[520px] text-sm leading-6 text-[#64748B]">
                              {offering.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Outcome */}
                  <motion.div
                    variants={reveal}
                    className="mt-6 border-l-[3px] border-[#3987FF] py-1 pl-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3987FF]">
                      What you get
                    </span>

                    <p className="mt-1.5 max-w-[550px] text-sm leading-6 text-[#334155]">
                      {service.outcome}
                    </p>
                  </motion.div>

                  {/* Direct WhatsApp CTA */}
                  <motion.div variants={reveal} className="mt-6">
                    <a
                      href={`https://wa.me/919080524940?text=${encodeURIComponent(
                        service.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Discuss ${service.category} with STARFOZ on WhatsApp`}
                      className="group inline-flex min-h-[50px] items-center gap-3 rounded-lg bg-[#101B35] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3987FF] hover:shadow-lg hover:shadow-[#3987FF]/20"
                    >
                      Discuss Your Project

                      <FiArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 border-t border-[#DCE3ED] pt-10 text-center sm:mt-20 sm:pt-14"
        >
          <motion.p
            variants={reveal}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]"
          >
            Have an idea in mind?
          </motion.p>

          <motion.h3
            variants={reveal}
            className="mx-auto mt-3 max-w-[700px] text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl"
          >
            Let's find the right technology
            <span className="block text-[#3987FF]">
              for your business.
            </span>
          </motion.h3>

          <motion.p
            variants={reveal}
            className="mx-auto mt-3 max-w-[550px] text-base leading-7 text-[#64748B]"
          >
            Tell us what you're looking to build. Let's discuss how we can
            help bring your idea to life.
          </motion.p>

          <motion.div variants={reveal} className="mt-6">
            <a
              href={`https://wa.me/919080524940?text=${encodeURIComponent(
                "Hi STARFOZ, I'd like to discuss a project with your team."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] items-center gap-3 rounded-lg bg-[#3987FF] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2875E8] hover:shadow-xl hover:shadow-[#3987FF]/20"
            >
              Start a Conversation

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
