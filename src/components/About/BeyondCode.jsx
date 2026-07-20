import React from "react";
import { motion } from "framer-motion";
import { beyondCode } from "./data";

const BeyondCode = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-blue-500 font-semibold mb-4">
            Beyond Development
          </p>

          <h2 className="text-5xl font-bold text-white">
            Beyond The Code
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
            Software engineering is a major part of my life, but I also
            believe that curiosity, leadership, and continuous learning
            shape who we become as professionals.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {beyondCode.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-gray-800 bg-[#161B22] p-8 hover:border-blue-500/40 transition-all duration-300"
            >

              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BeyondCode;