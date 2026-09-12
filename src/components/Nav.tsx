
const Nav = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <header className="w-full bg-white">
        <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Mobile Hamburger */}
          <button
            className="flex items-center justify-center text-slate-600 transition-colors hover:text-[#4F46E5] md:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Word Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <a
              href="#"
              className="text-xl font-extrabold tracking-tight text-[#4F46E5]"
            >
              DEVORA
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-[#4F46E5] transition-colors hover:text-[#4338CA]"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#4F46E5]"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#4F46E5]"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#4F46E5]"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[#4F46E5]"
            >
              Contact
            </a>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Sign In */}
            <a
              href="#"
              className="hidden text-sm font-medium text-slate-700 transition-colors hover:text-[#4F46E5] md:block"
            >
              Sign In
            </a>

            {/* Sign Up */}
            <a
              href="#"
              className="rounded-full bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#4338CA] hover:shadow-md md:px-5 md:py-2.5"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
