import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ExpertiseCard = ({ icon, title, skills }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-[#161B22] p-7 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
    >
      {/* Glow */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl text-blue-500 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <FiArrowUpRight className="text-xl text-gray-500 transition-all duration-300 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-gray-800"></div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full border border-gray-700 bg-[#0D1117] px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;