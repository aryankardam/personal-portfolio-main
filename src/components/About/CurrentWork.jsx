import React from "react";
import { motion } from "framer-motion";
import { currentWork } from "./data";

const CurrentWork = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-blue-500 font-semibold mb-4">
            Current Focus
          </p>

          <h2 className="text-5xl font-bold text-white">
            Currently Building
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8 text-lg">
            I'm constantly improving my engineering skills by building
            production-ready applications, solving backend problems,
            and exploring scalable software architectures.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-800"></div>

          <div className="space-y-12">

            {currentWork.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                className="relative pl-16"
              >

                {/* Circle */}

                <div className="absolute left-0 top-5 h-8 w-8 rounded-full border-4 border-[#0D1117] bg-blue-500 shadow-lg shadow-blue-500/40"></div>

                {/* Card */}

                <div className="rounded-3xl border border-gray-800 bg-[#161B22] p-8 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-2">

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-400 leading-8">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CurrentWork;