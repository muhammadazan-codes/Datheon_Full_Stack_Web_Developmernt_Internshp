
import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
];

const highlights = [
  {
    title: "Clean Code",
    text: "Writing simple, reusable and maintainable code.",
    details:
      "I focus on writing clean and organized code with reusable components, meaningful naming, and a structure that makes projects easier to understand and maintain.",
  },
  {
    title: "Responsive Design",
    text: "Building interfaces that work across different screen sizes.",
    details:
      "I build responsive interfaces that adapt smoothly to mobile, tablet, and desktop screens while keeping the layout clean, accessible, and easy to use.",
  },
  {
    title: "Interactive UI",
    text: "Creating smooth and engaging user experiences.",
    details:
      "I use modern frontend techniques and animation libraries such as Framer Motion to create smooth interactions and engaging user experiences without unnecessary effects.",
  },
];

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="about"
      className="relative z-10 min-h-screen w-full bg-transparent px-5 py-20 text-white
        sm:px-8 sm:py-24
        md:px-10 md:py-28
        lg:px-24 lg:py-24
      "
    >
      {/* Heading */}
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <p
          className="mb-3 text-xs tracking-[4px] text-[#66c61c]
          sm:mb-4 sm:text-sm sm:tracking-[5px]
        "
        >
          ABOUT ME
        </p>

        <h2
          className="max-w-4xl text-3xl font-bold leading-tight
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
        >
          I turn ideas into
          <span className="text-gray-500"> modern experiences.</span>
        </h2>
      </motion.div>

      {/* Main Content */}
      <div
        className="mx-auto mt-14 grid max-w-7xl gap-12
        sm:mt-16 sm:gap-14
        md:mt-20 md:grid-cols-2 md:gap-12
        lg:gap-20
      "
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <p
            className="mb-3 text-xs uppercase tracking-[2px] text-[#66c61c]
            sm:mb-4 sm:text-sm sm:tracking-[3px]
          "
          >
            Who I am
          </p>

          <h3
            className="text-2xl font-semibold
            sm:text-3xl
          "
          >
            I'm M. Azan
          </h3>

          <p
            className="mt-5 max-w-xl text-base leading-7 text-gray-400
            sm:mt-6 sm:text-lg sm:leading-8
          "
          >
            I'm a Software Engineering student at the University of Malakand and
            a passionate Frontend Developer focused on building modern,
            responsive, and interactive web experiences.
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-7 text-gray-500
            sm:mt-5 sm:text-lg sm:leading-8
          "
          >
            I enjoy transforming ideas and designs into clean, user-friendly
            interfaces using React, JavaScript, Tailwind CSS, and modern
            frontend technologies.
          </p>

          {/* Education */}
          <div
            className="mt-8 border-l-2 border-[#66c61c] pl-5
            sm:mt-10
          "
          >
            <p className="text-xs uppercase tracking-[2px] text-[#66c61c]">
              Education
            </p>

            <h4 className="mt-2 text-lg font-semibold sm:text-xl">
              Bachelor of Science in Software Engineering
            </h4>

            <p className="mt-1 text-sm text-gray-400 sm:text-base">
              University of Malakand
            </p>

            <p className="mt-4 text-lg font-semibold text-white">
              F.Sc Pre-Engineering
            </p>

            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              FG Collage BTK
            </p>
          </div>
        </motion.div>

        {/* Right - Skills */}
        <motion.div
          initial={{ opacity: 0 ,x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <p
            className="mb-3 text-xs uppercase tracking-[2px] text-[#66c61c]
            sm:mb-4 sm:text-sm sm:tracking-[3px]
          "
          >
            My Skills
          </p>

          <h3
            className="text-2xl font-semibold
            sm:text-3xl
          "
          >
            What I work with
          </h3>

          <div
            className="mt-6 grid grid-cols-2 gap-3
            sm:mt-8 sm:gap-4
          "
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 transition duration-300 hover:border-[#66c61c]
                  sm:px-5 sm:py-4
                "
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <span
                  className="text-sm text-gray-300
                  sm:text-base
                "
                >
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Highlights */}
      <div
        className="mx-auto mt-16 grid max-w-7xl gap-5
        sm:mt-20 sm:gap-6
        md:mt-24 md:grid-cols-2
        lg:grid-cols-3
      "
      >
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/30 p-5 transition duration-300 hover:-translate-y-2 hover:border-[#66c61c]
              sm:p-6
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <div
              className="mb-4 h-1 w-10 rounded-full bg-[#66c61c]
              sm:mb-5
            "
            />

            <h4
              className="text-xl font-semibold
              sm:text-2xl
            "
            >
              {item.title}
            </h4>

            <p
              className="mt-3 text-sm leading-7 text-gray-500
              sm:text-base
            "
            >
              {item.text}
            </p>

            {/* Read More */}
            <button
              onClick={() =>
                setActiveCard(activeCard === index ? null : index)
              }
              className="mt-5 text-sm font-medium text-[#66c61c] transition hover:text-white"
            >
              {activeCard === index ? "Show Less" : "Read More"}
            </button>

            {/* More Details */}
            {activeCard === index && (
              <motion.p
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="mt-4 border-t border-zinc-800 pt-4 text-sm leading-7 text-gray-400"
              >
                {item.details}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;