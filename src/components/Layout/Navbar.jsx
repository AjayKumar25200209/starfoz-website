import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoDark from "../../assets/logoDark.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "About Us", path: "/about" },
  ];

  // Close mobile menu when route or hash changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent background scrolling when mobile menu is open
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
        ? "text-white after:w-full"
        : "text-[#B9C8DF] after:w-0 hover:text-white hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#293956] bg-[#101B35]/95 backdrop-blur-xl">
      {/* Main Navbar */}
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Brand Identity */}

        {/* Brand Identity */}
        <Link
          to="/"
          aria-label="StarFoz Home"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <img
            src={logoDark}
            alt=""
            aria-hidden="true"
            width="30"
            height="30"
            fetchPriority="high"
            className="object-contain "
          />

          <span className="flex items-center text-[28px] font-bold leading-none tracking-[-0.06em]">
            <span className="text-white">STAR</span>
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

        {/* Desktop Contact CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 rounded-lg bg-[#3987FF] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3987FF]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2875ED] hover:shadow-[#3987FF]/25"
          >
            Let's Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
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
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#293956] text-white transition-all duration-300 hover:border-[#3987FF] hover:bg-[#172746] lg:hidden"
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
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#293956] bg-[#101B35] shadow-2xl shadow-black/20 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[500px] translate-y-0 opacity-100"
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
                `border-b border-[#293956]/70 py-4 text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#3987FF]"
                    : "text-[#B9C8DF] hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/contact"
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#3987FF] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2875ED]"
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
