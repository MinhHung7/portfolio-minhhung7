import React, { useState } from "react";

import TechSlider from "../../components/techslider/TechSlider";
import RepoSlider from "../../components/reposlider/RepoSlider";
import Achievements from "../../components/achievements/Achievements";
import Projects from "../../components/projects/Projects";

import {
  Handshake,
  BrainCircuit,
  PackageSearch,
  Workflow,
  Grid2x2Check,
  LaptopMinimal,
  Container,
  Waypoints,
} from "lucide-react";

const Home = () => {
  const [field, setField] = useState("");
  const fields = [
    { title: "AI-powered system", icon: BrainCircuit },
    { title: "AI workflow", icon: Workflow },
    { title: "AI Product Innovation", icon: PackageSearch },
    { title: "MLOps", icon: Container },
    { title: "Model Training", icon: Waypoints },
    { title: "Data Science", icon: Grid2x2Check },
    { title: "Web Backend", icon: LaptopMinimal },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-10 gap-2">
        <p className="text-3xl">Hello, thank you for visiting</p>
        <p className="text-[#3cc88a] text-3xl">Minh Hung (Calvin)'s Porfolio</p>
      </div>
      <div className="mt-5">
        <p className="text-sm font-bold">
          As a Computer Science student at VNUHCM – University of Science in
          Vietnam, I have a solid foundation in C++ and Python, and I am
          passionate about Machine Learning and AI Engineering.
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 mt-5">
        <div className="text-sm px-3 py-2 bg-[#006239] hover:bg-[#287050] rounded-md border border-[#3cc88a] cursor-pointer">
          Download my CV
        </div>
        <div className="text-sm px-3 py-2 bg-[#242424] rounded-md hover:border hover:border-gray-500 cursor-pointer">
          Send an email
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <TechSlider />
        <p className="text-sm font-bold text-[#898989]">
          Some technicals I used to use in projects
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-[#3cc88a]">Want to see some analytics, huh?</p>
          <div className="flex items-center gap-2">
            <Handshake className="text-[#3cc88a]" />
            <p>Cool</p>
          </div>
        </div>
        <Achievements />
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-[#3cc88a]">Notable Projects</p>
        </div>
        <Projects />
      </div>
      <div className="flex flex-col justify-center mt-15">
        <p className="text-3xl font-bold text-[#898989]">
          The fields I can take on
        </p>
        <p className="font-bold text-white text-2xl">{field}</p>
        <div className="flex flex-wrap gap-3 mt-5 justify-center">
          {fields.map((field, index) => (
            <div
              key={index}
              className="h-20 w-20 flex flex-col items-center justify-center cursor-pointer hover:bg-[#242424] hover:border hover:border-white rounded-md"
              onMouseEnter={() => setField(field.title)}
            >
              <field.icon className="h-10 w-10 text-[#898989]" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-3">
        <div className="flex flex-col justify-between justify-center gap-2">
          <p className="text-3xl text-[#3cc88a]">Github Repositories</p>
          <p>
            Explore my latest projects showcasing technologies and innovative
            solutions.
          </p>
        </div>
        <RepoSlider />
      </div>
    </div>
  );
};

export default Home;
