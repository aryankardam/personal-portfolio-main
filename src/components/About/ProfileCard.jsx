import React from "react";
import { motion } from "framer-motion";

const ProfileCard = ({ facts }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-gray-800 bg-[#161B22]/90 backdrop-blur-xl p-8 shadow-xl"
    >
      <div className="text-center mb-8">

    <h3 className="text-2xl font-bold text-white">
        Aryan Kardam
    </h3>

    <p className="text-blue-500 mt-2">
        Software Engineer
    </p>

    <span className="inline-block mt-4 rounded-full bg-green-500/10 border border-green-500/30 px-4 py-2 text-sm text-green-400">
        ● Open to Work
    </span>

</div>

      <p className="text-gray-400 mb-8">
        A quick overview of my journey.
      </p>

      <div className="space-y-5">

        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="h-11 w-11 rounded-full bg-blue-600/15 text-blue-500 flex items-center justify-center text-xl">
              {fact.icon}
            </div>

            <span className="text-gray-300">
              {fact.text}
            </span>
          </div>
        ))}

      </div>
    </motion.div>
  );
};

export default ProfileCard;