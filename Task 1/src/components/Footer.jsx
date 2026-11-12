import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative z-10 border-t border-zinc-800 bg-black px-5 py-10 text-white
        sm:px-8 sm:py-12
        md:px-10
        lg:px-24
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div
          className="flex flex-col justify-between gap-10
            sm:gap-12
            lg:flex-row lg:gap-10
          "
        >
          {/* Brand */}
          <div className="max-w-md">
            <img
              src="/logo.png"
              alt="M. Azan"
              className="mb-5 h-12 w-12 object-contain
                sm:mb-6 sm:h-14 sm:w-14
              "
            />

            <h3
              className="text-xl font-semibold
                sm:text-2xl
              "
            >
              Let's create something
              <span className="text-[#66c61c]"> meaningful.</span>
            </h3>

            <p
              className="mt-3 text-sm leading-7 text-gray-500
                sm:mt-4 sm:text-base
              "
            >
              I'm a frontend developer focused on building modern, responsive
              and interactive web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-4 text-xs tracking-[3px] text-[#66c61c]
                sm:mb-5 sm:text-sm sm:tracking-[4px]
              "
            >
              NAVIGATION
            </p>

            <div className="flex flex-col gap-2.5 text-sm text-gray-400 sm:gap-3 sm:text-base">
              <a href="#hero" className="transition hover:text-[#66c61c]">
                Home
              </a>

              <a href="#about" className="transition hover:text-[#66c61c]">
                About
              </a>

              <a href="#services" className="transition hover:text-[#66c61c]">
                Services
              </a>

              <a href="#projects" className="transition hover:text-[#66c61c]">
                Projects
              </a>

              <a href="#contact" className="transition hover:text-[#66c61c]">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              className="mb-4 text-xs tracking-[3px] text-[#66c61c]
                sm:mb-5 sm:text-sm sm:tracking-[4px]
              "
            >
              SOCIAL
            </p>

            <div className="flex gap-2.5 sm:gap-3">
              <a
                href="https://github.com/muhammadazan-codes/My-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-[#66c61c] hover:text-[#66c61c]
    sm:h-11 sm:w-11
  "
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-azan-3a287043b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-[#66c61c] hover:text-[#66c61c]
    sm:h-11 sm:w-11
  "
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/muhammadazan.web/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-[#66c61c] hover:text-[#66c61c]
    sm:h-11 sm:w-11
  "
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 flex flex-col justify-between gap-4 border-t border-zinc-800 pt-5 text-xs text-gray-600
            sm:mt-14 sm:gap-5 sm:pt-6 sm:text-sm
            md:flex-row md:items-center
          "
        >
          <p>© 2026 M. Azan. All rights reserved.</p>

          <a
            href="#hero"
            className="flex items-center gap-2 transition hover:text-[#66c61c]"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
