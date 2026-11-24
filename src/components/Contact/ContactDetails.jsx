
import { motion, useReducedMotion } from "motion/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageCircle,
  FiArrowUpRight,
} from "react-icons/fi";

const officeAddress =
  "16A/1B, Bryant Nagar, 10th Street Middle, Thoothukudi, Tamil Nadu - 628008";

const contactDetails = [
  {
    number: "01",
    title: "Call Us",
    subtitle: "Speak with our team",
    value: "+91 90805 24940",
    description:
      "Have a question or project in mind? Give us a call and let's discuss.",
    icon: FiPhone,
    action: "Call Now",
    href: "tel:+919080524940",
  },
  {
    number: "02",
    title: "Email Us",
    subtitle: "Send us an enquiry",
    value: "contact@starfoz.com",
    description:
      "Share your business requirements, project ideas, or enquiries with us.",
    icon: FiMail,
    action: "Send Email",
    href: "mailto:contact@starfoz.com",
  },
  {
    number: "03",
    title: "WhatsApp Us",
    subtitle: "Quick and easy communication",
    value: "Chat with our team",
    description:
      "Prefer messaging? Start a WhatsApp conversation with our team.",
    icon: FiMessageCircle,
    action: "Chat on WhatsApp",
    href: "https://wa.me/919080524940",
    external: true,
  },
];

export default function ContactDetails() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.13,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-5 py-20 sm:px-8 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#3987FF]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#3987FF]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center lg:mb-16"
        >
         

          <h2 className="text-3xl font-semibold tracking-tight text-[#101B35] sm:text-4xl lg:text-5xl">
            Let's start a{" "}
            <span className="text-[#3987FF]">conversation.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#68758A] sm:text-lg">
            Have a project in mind or need help with your business?
            Choose the easiest way to reach us. We'd love to hear from you.
          </p>
        </motion.div>

        {/* Three contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -7 }}
                className="group flex min-h-[320px] flex-col rounded-2xl bg-white p-7 shadow-[0_8px_35px_rgba(16,27,53,0.045)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(16,27,53,0.09)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3987FF]/[0.09] text-[#2875E5] transition-colors duration-300 group-hover:bg-[#3987FF] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-medium tracking-widest text-[#A5AFBE]">
                    {item.number}
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#3987FF]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[#101B35]">
                    {item.title}
                  </h3>

                  <p className="mt-3 break-words text-[15px] font-semibold text-[#35445D]">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#7A879A]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external ? "noopener noreferrer" : undefined
                    }
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#101B35] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] focus-visible:ring-offset-2"
                  >
                    {item.action}
                    <FiArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Office address section */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 22,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 overflow-hidden rounded-2xl bg-[#101B35]"
        >
          <div className="relative flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full bg-[#3987FF]/20 blur-3xl" />

            <div className="relative flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#70A9FF]">
                <FiMapPin size={23} strokeWidth={1.7} />
              </div>

              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#70A9FF]">
                  Our Office
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Come find us in Thoothukudi.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                  {officeAddress}
                </p>
              </div>
            </div>

            {/* Google Maps direction button */}
            <div className="relative shrink-0 sm:pl-4">
              <a
                href="https://share.google/9Rri9hj7t8hSITWPy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#101B35] transition-all duration-300 hover:bg-[#3987FF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101B35] sm:w-auto"
              >
                <FiMapPin size={17} />
                Get Directions
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 text-center text-sm text-[#8A96A8]"
        >
          Prefer a quick conversation?{" "}
          <a
            href="https://wa.me/919080524940"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#2875E5] transition-colors hover:text-[#101B35]"
          >
            Message us on WhatsApp.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
