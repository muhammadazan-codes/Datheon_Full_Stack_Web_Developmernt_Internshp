import { easeOut, motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Gallery Web App",
    category: "React / Axios / API",
    image: "gallaryapp.png",
    description:
      "A responsive image gallery built with React and Axios, featuring API integration, dynamic image rendering and smooth pagination.",
    liveLink: "https://gallery-web-app-ruddy.vercel.app/",
  },
  {
    number: "02",
    title: "Notes App",
    category: "React / Tailwind CSS",
    image: "notesapp.png",
    description:
      "A clean and responsive notes application designed to create, manage and organize personal notes through a simple and intuitive interface.",
    liveLink: "https://notes-app-one-eosin-24.vercel.app/",
  },
  {
    number: "03",
    title: "Portfolio Website",
    category: "React / Tailwind / Framer Motion",
    image: "portfolioscreenshot.png",
    description:
      "A modern personal portfolio designed to showcase my skills, experience and projects through a professional and interactive user experience.",
    liveLink: null,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen bg-transparent px-5 py-10 text-white 
        sm:px-8 sm:py-24 
        md:px-10 md:py-28 
        lg:px-24 lg:py-24 
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="mx-auto max-w-7xl"
      >
        {/* Heading */}
        <p
          className="mb-3 text-xs tracking-[4px] text-[#66c61c] 
            sm:mb-4 sm:text-sm sm:tracking-[5px] 
          "
        >
          MY WORK
        </p>

        <div
          className="flex flex-col justify-between gap-5 
            sm:gap-6 
            md:flex-row md:items-end 
          "
        >
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
            "
          >
            Selected
            <span className="text-gray-500"> projects.</span>
          </h2>

          <p
            className="max-w-md text-sm leading-7 text-gray-500 
              sm:text-base 
            "
          >
            A selection of projects I have built using modern web technologies,
            focusing on responsive design, functionality and user experience.
          </p>
        </div>

        {/* Projects */}
        <div
          className="mt-12 space-y-5 
            sm:mt-14 sm:space-y-6 
            md:mt-16 
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="group flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition duration-300 hover:border-[#66c61c]
                sm:gap-7 sm:p-6
                md:flex-row md:items-center md:p-8
                lg:gap-10
              "
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Number */}
              <div
                className="text-sm text-[#66c61c]
                  md:w-12 md:shrink-0
                "
              >
                {project.number}
              </div>

              {/* Project Image */}
              <div
                className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-black
               md:w-[48%] md:shrink-0
               "
              >
                <div className="flex aspect-video w-full items-center justify-center bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="mb-2 text-xs text-gray-500 sm:text-sm">
                  {project.category}
                </p>

                <h3
                  className="text-xl font-semibold transition duration-300 group-hover:text-[#66c61c]
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="mt-2 max-w-2xl text-sm leading-7 text-gray-500
                    sm:mt-3 sm:text-base
                  "
                >
                  {project.description}
                </p>

                {/* Live Demo */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#66c61c] transition duration-300 hover:text-white"
                  >
                    Live Demo
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
              </div>

              {/* Arrow */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-lg text-[#66c61c] transition duration-300 hover:border-[#66c61c] hover:rotate-45
                    sm:h-12 sm:w-12 sm:text-xl
                  "
                >
                  ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
