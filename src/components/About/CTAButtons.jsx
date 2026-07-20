import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

const CTAButtons = () => {
  return (
    <div className="flex flex-wrap gap-5">

      {/* Projects */}

      <a
        href="#projects"
        className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
      >
        View Projects

        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Resume */}

      <a
              href="https://drive.google.com/file/d/1GovMQ4978hTf_qZ3gGD8mm38KQg-AfeY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
            >
              Download Resume
            </a>

    </div>
  );
};

export default CTAButtons;