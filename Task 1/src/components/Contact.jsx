import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm("service_8ow52ll", "template_4lyn5wi", form.current, {
        publicKey: "XULUAfyThf7jw31at",
      })
      .then(
        () => {
          setStatus("Message sent successfully! ✓");
          form.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen bg-transparent px-5 py-20 text-white
        sm:px-8 sm:py-24
        md:px-10 md:py-28
        lg:px-24 lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="mb-3 text-xs tracking-[4px] text-[#66c61c]
              sm:mb-4 sm:text-sm sm:tracking-[5px]
            "
          >
            CONTACT
          </p>

          <h2
            className="max-w-4xl text-3xl font-bold leading-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Let's build something
            <span className="text-gray-500"> great together.</span>
          </h2>
        </motion.div>

        <div
          className="mt-12 grid gap-12
            sm:mt-14 sm:gap-14
            md:mt-20 md:grid-cols-2 md:gap-12
            lg:gap-20
          "
        >
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="max-w-lg text-sm leading-7 text-gray-500
                sm:text-base sm:leading-8
              "
            >
              Have a project in mind or want to work together? Feel free to
              reach out. I would love to hear about your idea.
            </p>

            <div
              className="mt-8 space-y-5
                sm:mt-10 sm:space-y-6
              "
            >
              <div>
                <p className="text-xs text-gray-500 sm:text-sm">EMAIL</p>

                <p
                  className="mt-2 text-base
                    sm:text-lg
                  "
                >
                  muhammadazan.web@gmail.com
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500 sm:text-sm">LOCATION</p>

                <p
                  className="mt-2 text-base
                    sm:text-lg
                  "
                >
                  Pakistan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border-b border-zinc-700 bg-transparent px-2 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#66c61c]
                sm:py-4 sm:text-base
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border-b border-zinc-700 bg-transparent px-2 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#66c61c]
                sm:py-4 sm:text-base
              "
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full resize-none border-b border-zinc-700 bg-transparent px-2 py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#66c61c]
                sm:py-4 sm:text-base
              "
            />

            <button
              type="submit"
              disabled={status === "Sending..."}
              className="rounded-full bg-[#66c61c] px-6 py-3 text-sm font-medium text-black transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-60
                sm:px-7 sm:text-base
              "
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-sm text-gray-400">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
