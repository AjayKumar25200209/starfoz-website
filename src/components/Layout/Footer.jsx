
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
        { name: "Industries", path: "/industries" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services" },
        { name: "Mobile App Development", path: "/services" },
        { name: "Software Development", path: "/services" },
        { name: "AI Solutions", path: "/services" },
        { name: "Business Automation", path: "/services" },
      ],
    },
    {
      title: "Explore",
      links: [
        { name: "Our Solutions", path: "/solutions" },
        { name: "Industries", path: "/industries" },
        { name: "Insights", path: "/insights" },
        { name: "Get in Touch", path: "/contact" },
      ],
    },
  ];

  const linkStyles =
    "text-sm text-[#B9C8DF] transition-colors duration-300 hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101B35]";

  return (
    <footer
      className="border-t border-[#293956] bg-[#101B35] text-white"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-14 sm:px-8 lg:px-14 lg:pt-16 xl:px-20">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 border-b border-[#293956] pb-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              aria-label="StarFoz Home"
              className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              <img
                src={logoDark}
                alt=""
                aria-hidden="true"
                width="54"
                height="54"
                loading="lazy"
                className="h-[54px] w-[54px] object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <span className="flex text-[27px] font-bold leading-none tracking-[-0.06em]">
                <span className="text-white">STAR</span>
                <span className="text-[#3987FF]">FOZ</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#B9C8DF]">
              We build custom software, AI-powered applications and
              business automation that help organizations work
              smarter and grow.
            </p>

            {/* Contact */}
            <div className="mt-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                Get in Touch
              </p>

              <a
                href="mailto:contact@starfoz.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#B9C8DF] transition-colors duration-300 hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
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
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                contact@starfoz.com
              </a>
            </div>
          </div>

          {/* Footer Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-sm font-semibold tracking-wide text-white">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className={linkStyles}>
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

          <p className="text-xs text-[#91A5C5]">
            © {currentYear} StarFoz. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">

            <Link
              to="/privacy-policy"
              className="text-xs text-[#91A5C5] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-[#91A5C5] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Terms & Conditions
            </Link>

            <a
              href="#top"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#B9C8DF] transition-colors duration-300 hover:text-[#3987FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
            >
              Back to top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
