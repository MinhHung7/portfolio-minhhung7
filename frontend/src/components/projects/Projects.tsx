import { BadgeJapaneseYen, File, OctagonMinus, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NihonMemo",
      description:
        "A Website focused on supporting Kanji, Hiragana, and Katakana memorization for Japanese learners",
      icon: BadgeJapaneseYen,
    },
    {
      title: "PDF Sync Hub - Docwhiz",
      description:
        "DocWhiz is an intelligent chatbot powered by Retrieval-Augmented Generation (RAG), designed to help users interact with PDF documents more effectively",
      icon: File,
    },
    {
      title: "Multimodal Legal QA on Traffic Sign Rules",
      description:
        "We developed a multimodal retrieval-augmented generation (RAG) system for Vietnamese legal QA on traffic sign rules",
      icon: OctagonMinus,
    },
    {
      title: "Explainable AI for Educational Question-Answering",
      description:
        "Build a systems that combine the power of LLMs with symbolic reasoning to handle complex, rule-based, and logic-driven questions.",
      icon: Bot,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col px-4 py-3 bg-[#171717] rounded-2xl border-2 border-[#2E2E2E] gap-3 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <project.icon className="text-[#3cc88a] h-5 w-5" />
            <div className="text-left text-white font-bold">
              {project.title}
            </div>
          </div>
          <div className="text-left text-gray-400 text-sm font-medium">
            {project.description}
          </div>
        </div>
      ))}
      <div>
        <p className="text-left text-gray-400">
          Just <span className="font-bold text-white">Click</span> to see more
          detail
        </p>
      </div>
    </div>
  );
};

export default Projects;
