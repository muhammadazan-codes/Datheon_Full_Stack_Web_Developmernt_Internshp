import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className="
        relative z-50 flex w-full items-center justify-between
        px-4 py-2

        sm:px-6 sm:py-2

        lg:fixed 
        md:px-8 md:py-2

        lg:px-10
      "
    >
      {/* Logo */}
      <a href="#hero">
        <motion.img
          src="/logo.png"
          alt="M. Azan Logo"
          className="
      h-16 w-16 object-contain
      sm:h-18 sm:w-18
      md:h-20 md:w-20
      md:-ml-6
      cursor-pointer
    "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </a>

      {/* Menu */}
      <div className="relative">
        {/* Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-zinc-700
            bg-zinc-900/70
            text-xl text-[#66c61c]
            backdrop-blur-md
            transition-colors duration-300
            hover:border-[#66c61c]
            hover:bg-zinc-800/80

            sm:h-12 sm:w-12
            sm:text-2xl
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.25 }}
          >
            ☰
          </motion.span>
        </motion.button>

        {/* Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute right-0 top-full mt-3
                w-48
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-zinc-950/70
                p-2
                shadow-2xl
                backdrop-blur-xl

                sm:w-52
              "
            >
              {/* Small green glow */}
              <div
                className="
                  pointer-events-none
                  absolute -right-10 -top-10
                  h-24 w-24
                  rounded-full
                  bg-[#66c61c]/10
                  blur-2xl
                "
              />

              {/* Menu Items */}
              <div className="relative">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.06,
                    }}
                    className="
                      group flex items-center
                      rounded-xl
                      px-4 py-3
                      text-sm text-gray-300
                      transition-all duration-300

                      hover:bg-[#66c61c]/10
                      hover:text-[#66c61c]

                      sm:text-base
                    "
                  >
                    <span
                      className="
                        mr-3 h-1.5 w-1.5
                        rounded-full
                        bg-zinc-600
                        transition-all duration-300
                        group-hover:bg-[#66c61c]
                        group-hover:shadow-[0_0_8px_#66c61c]
                      "
                    />

                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
