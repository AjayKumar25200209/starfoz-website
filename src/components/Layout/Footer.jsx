
import { Link } from "react-router-dom";
import logoDark from "../../assets/logoDark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Services", path: "/services" },
        { name: "Solutions", path: "/solutions" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Digital Products", path: "/services" },
        { name: "Business Automation", path: "/services" },
        { name: "Artificial Intelligence", path: "/services" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Customer Management", path: "/solutions#solutions-list" },
        { name: "Business Operations", path: "/solutions#solutions-list" },
        { name: "AI-Powered Solutions", path: "/solutions#solutions-list" },
        { name: "Custom Digital Platforms", path: "/solutions#solutions-list" },
      ],
    },
  ];

  const linkStyles =
    "text-sm text-[#A9BBD3] transition-colors duration-300 ease-in-out hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071426]";

  const contactStyles =
    "group inline-flex items-center gap-3 text-sm text-[#A9BBD3] transition-colors duration-300 hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]";

  return (
    <footer
      className="border-t border-[#1C304B] bg-[#071426] text-white"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-14 sm:px-8 lg:px-14 lg:pt-16 xl:px-20">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 border-b border-[#1C304B] pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_0.85fr_0.85fr_1.15fr] lg:gap-12 xl:gap-16">

          {/* Brand and Contact Section */}
          <div className="min-w-0">

            {/* Logo */}
            <Link
              to="/"
              aria-label="STARFOZ Home"
              className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              <img
                src={logoDark}
                alt="STARFOZ"
                width="54"
                height="54"
                loading="lazy"
                className="h-[54px] w-[54px] object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <span className="flex text-[27px] font-bold leading-none tracking-[-0.06em]">
                <span className="text-white">STAR</span>
                <span className="text-[#3987FF]">FOZ</span>
              </span>
            </Link>

            {/* Description */}
            <p className="mt-5 max-w-[420px] text-sm leading-7 text-[#A9BBD3]">
              We build custom digital products, intelligent AI-powered
              applications, and business automation solutions that help
              organizations simplify operations and grow.
            </p>

            {/* Contact Details */}
            <div className="mt-7 max-w-[470px] border-t border-[#1C304B] pt-5">

              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                Get in Touch
              </p>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">

                {/* Email */}
                <a
                  href="mailto:contact@starfoz.com"
                  className={contactStyles}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>

                  <span className="min-w-0 break-all">
                    contact@starfoz.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919080524940"
                  className={contactStyles}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z" />
                  </svg>

                  <span className="whitespace-nowrap">
                    +91 90805 24940
                  </span>
                </a>

              </div>

              {/* Office Address */}
              <a
                href="https://share.google/9Rri9hj7t8hSITWPy"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 flex items-start gap-3 text-sm leading-6 text-[#A9BBD3] transition-colors duration-300 hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-1 shrink-0"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span>
                  16A/1B, Bryant Nagar, 10th Street Middle,
                  Thoothukudi, Tamil Nadu - 628008
                </span>
              </a>

            </div>
          </div>

          {/* Footer Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="min-w-0">

              <h3 className="mb-6 text-sm font-semibold tracking-wide text-white">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={linkStyles}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-[#8298B5]">
            © {currentYear} StarFoz. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">

            <Link
              to="/privacy-policy"
              className="text-xs text-[#8298B5] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-[#8298B5] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Terms & Conditions
            </Link>

            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#A9BBD3] transition-colors duration-300 hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Back to top
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:-translate-y-1"
              >
                ↑
              </span>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
