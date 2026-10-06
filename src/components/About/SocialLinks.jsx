import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      icon: <FaGithub />,
      url: "https://github.com/aryankardam",
      name: "GitHub",
    },

    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/aryan-kardam-b94b16296/",
      name: "LinkedIn",
    },

    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/aryan_kardam?stkn=MXdtcmtxb3QxdDZ2bQ==",
      name: "Instagram",
    },
  ];

  return (
    <div>

      <h4 className="text-lg font-semibold text-white mb-5">
        Let's Connect
      </h4>

      <div className="flex gap-5">

        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="group h-14 w-14 rounded-full border border-gray-700 bg-[#161B22] flex items-center justify-center text-2xl text-gray-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-2"
          >
            {item.icon}
          </a>
        ))}

      </div>

    </div>
  );
};

export default SocialLinks;