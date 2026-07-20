import React from "react";
import { motion } from "framer-motion";
import ExpertiseCard from "./ExpertiseCard";
import { expertise } from "./data";

const CoreExpertise = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-blue-500 font-semibold mb-4">
            What I Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Core Expertise
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-8">
            I enjoy designing scalable full-stack applications, building secure
            backend services, and creating responsive user interfaces with
            modern web technologies.
          </p>
        </motion.div>

        {/* Expertise Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {expertise.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ExpertiseCard
                icon={item.icon}
                title={item.title}
                skills={item.skills}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default CoreExpertise;