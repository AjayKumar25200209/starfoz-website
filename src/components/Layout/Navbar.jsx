
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiPhone, FiArrowUpRight } from "react-icons/fi";
import logo from "../../assets/logo.png";

const PHONE_NUMBER = "+919080524940";
const DISPLAY_PHONE = "+91 90805 24940";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const desktopLinkStyles = ({ isActive }) =>
    `relative whitespace-nowrap text-sm font-medium tracking-wide transition-colors duration-300
    after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:rounded-full after:bg-[#3987FF]
    after:transition-all after:duration-300
    ${
      isActive
        ? "text-[#101B35] after:w-full"
        : "text-[#64748B] after:w-0 hover:text-[#101B35] hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E9EDF3] bg-white">
      {/* Main Navbar */}
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* Brand Identity */}
        <Link
          to="/"
          aria-label="StarFoz Home"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF]"
        >
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            width="50"
            height="50"
            fetchPriority="high"
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
          />

          <span className="flex items-center text-[28px] font-bold leading-none tracking-[-0.06em]">
            <span className="text-[#101B35]">STAR</span>
            <span className="text-[#3987FF]">FOZ</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              className={desktopLinkStyles}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Call Us CTA */}
        <div className="hidden lg:block">
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label={`Call StarFoz at ${DISPLAY_PHONE}`}
            className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-lg bg-[#F59A1B] px-6 py-3 text-sm font-semibold text-[#101B35] shadow-[0_8px_22px_rgba(245,154,27,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EA8C0C] hover:shadow-[0_10px_26px_rgba(245,154,27,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59A1B] focus-visible:ring-offset-2"
          >
            <FiPhone
              size={19}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:rotate-[-12deg]"
            />

            Call Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5EAF1] text-[#101B35] transition-all duration-300 hover:border-[#3987FF] hover:bg-[#F1F6FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3987FF] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="transition-transform duration-300"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#E9EDF3] bg-white shadow-[0_16px_30px_rgba(16,27,53,0.08)] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[550px] translate-y-0 opacity-100"
            : "invisible pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col px-6 py-5 sm:px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `border-b border-[#EDF0F5] py-4 text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#3987FF]"
                    : "text-[#475569] hover:text-[#101B35]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Call Us CTA */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label={`Call StarFoz at ${DISPLAY_PHONE}`}
            className="mt-5 flex min-h-[50px] items-center justify-center gap-3 rounded-lg bg-[#F59A1B] px-5 py-3.5 text-sm font-semibold text-[#101B35] shadow-[0_6px_18px_rgba(245,154,27,0.15)] transition-all duration-300 hover:bg-[#EA8C0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59A1B]"
          >
            <FiPhone size={18} strokeWidth={2.2} />
            Call Us
          </a>

          <p className="mt-3 text-center text-xs text-[#8492A6]">
            {DISPLAY_PHONE}
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
