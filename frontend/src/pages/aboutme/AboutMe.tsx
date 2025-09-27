import React, { useState } from "react";

import {
  Handshake,
  BrainCircuit,
  PackageSearch,
  Workflow,
  Grid2x2Check,
  LaptopMinimal,
  Container,
  Waypoints,
  Coffee,
  GraduationCap,
} from "lucide-react";

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-10">
        <img src="/logo.jpg" alt="logo" className="w-20 h-20 rounded-full" />
        <div className="flex flex-col text-left">
          <p className="text-2xl text-white">Welcome, guys!</p>
          <p className="text-white">
            I'm happy that someone is looking out for me.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-3">
        <div className="flex items-center gap-3">
          <Coffee className="w-8 h-8 text-[#3cc88a]" />
          <p className="font-bold text-2xl text-[#3cc88a]">
            A little more about me ...
          </p>
        </div>
        <p className="text-sm text-[#898989] text-justify">
          I am a passionate AI Engineer with good knowledges in machine
          learning, deep learning. I am also interested in handling realistic
          projects, learn how to integrate, train and evaluate different AI
          models for many tasks.
        </p>
        <p className="text-sm text-[#898989] text-justify">
          Besides on, I also enjoy learning new concepts, techniques, and tools,
          then writing about them on my blog. Currently, I’m exploring SUI — a
          layer 1 blockchain. If you’re interested, we can learn together!
        </p>
      </div>
      {/* Education Timeline */}
      <div className="flex flex-col mt-10 gap-3">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-[#3cc88a]" />
          <p className="font-bold text-2xl text-[#3cc88a]">Education</p>
        </div>

        <div className="relative border-l-2 border-[#3cc88a] pl-6 ml-2">
          <div className="mb-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#3cc88a]" />
            <p className="text-white font-semibold">2022 – 2026</p>
            <p className="text-sm text-[#898989]">
              Bachelor of Computer Science
            </p>
            <p className="text-sm text-[#898989]">
              VNUHCM – University of Science (HCMUS)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
