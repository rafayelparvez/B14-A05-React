export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <a
                href="#"
                className="text-xl font-extrabold tracking-tight text-[#4F46E5]"
              >
                DEVORA
              </a>
            </div>

            <p className="mb-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center gap-5 text-sm font-medium text-slate-600">
              <a href="#" className="transition-colors hover:text-[#4F46E5]">
                GitHub
              </a>

              <a href="#" className="transition-colors hover:text-[#4F46E5]">
                Twitter
              </a>

              <a href="#" className="transition-colors hover:text-[#4F46E5]">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-slate-900">
              PRODUCT
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-slate-900">
              COMPANY
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-slate-900">
              LEGAL
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#4F46E5]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 Parvez M. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-400">
            <a href="#" className="transition-colors hover:text-[#4F46E5]">
              Privacy
            </a>

            <a href="#" className="transition-colors hover:text-[#4F46E5]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
