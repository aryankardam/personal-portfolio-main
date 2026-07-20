import React from "react";
import { motion } from "framer-motion";
import myImg from "../../assets/avatar.svg";

import { intro, quickFacts } from "./data";

import CTAButtons from "./CTAButtons";
import SocialLinks from "./SocialLinks";
import ProfileCard from "./ProfileCard";

const AboutHero = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.3em] text-blue-500 font-semibold mb-4">
              Get To Know Me
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {intro.title.split(" ")[0]}{" "}
              <span className="text-blue-500">
                {intro.title.split(" ")[1]}
              </span>
            </h2>

            <div className="space-y-6 text-gray-300 leading-8 text-lg max-w-2xl">

              {intro.description.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

            <div className="mt-12">
              <CTAButtons />
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Blue Glow */}

              <div className="absolute inset-0 rounded-full blur-3xl bg-blue-600/20"></div>

              {/* Avatar */}

              <img
                src={myImg}
                alt="Aryan Kardam"
                className="relative w-72 lg:w-80 z-10"
              />

              {/* Profile Card */}

              <div className="mt-10">
                <ProfileCard facts={quickFacts} />
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;