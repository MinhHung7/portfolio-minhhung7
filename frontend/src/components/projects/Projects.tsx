import { BadgeJapaneseYen, File, OctagonMinus, Bot, Check } from "lucide-react";

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
    <div>
      <div className="flex flex-col gap-4 sm:!hidden">
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
      <div className="hidden flex flex-col gap-4 sm:!flex">
        {/* Nihon Memo */}
        <div className="grid grid-cols-2 px-4 py-3 bg-[#171717] rounded-2xl border-2 border-[#2E2E2E] gap-3 cursor-pointer">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-5 px-1 py-3">
              <div className="flex items-center gap-3">
                <BadgeJapaneseYen className="text-[#3cc88a] h-5 w-5" />
                <div className="text-left text-white font-bold">NihonMemo</div>
              </div>
              <div className="text-left text-gray-400 text-sm font-medium">
                A Website focused on supporting Kanji, Hiragana, and Katakana
                memorization for Japanese learners
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1">
              <div className="flex items-center text-white gap-2">
                <Check className="h-4 w-4" />
                <p className="text-left text-sm font-medium">
                  <span className="text-gray-400">Role: </span> Team Leader
                </p>
              </div>
              <div className="flex items-center text-white gap-2">
                <Check className="h-4 w-4" />
                <p className="text-left text-sm font-medium">
                  <span className="text-gray-400">Techs stack: </span>ReactJS,
                  NodeJS, Supabase
                </p>
              </div>
              <div className="flex items-center text-white gap-2">
                <Check className="h-4 w-4" />
                <p className="text-left text-sm font-medium">
                  <span className="text-gray-400">Status: </span>In progress
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/nihonmemo.png" alt="nihonmemo" className="h-40 w-auto" />
          </div>
        </div>
        {/* PDF Sync Hub - Docwhiz ++++++ Multimodal Legal QA on Traffic Sign Rules */}
        <div className="flex flex-col md:!grid md:!grid-cols-2 gap-4">
          {/* PDF Sync Hub - Docwhiz */}
          <div className="flex flex-col bg-[#171717] rounded-2xl border-2 border-[#2E2E2E] justify-between cursor-pointer">
            <div className="flex flex-col gap-10 px-4 py-3">
              <div className="flex flex-col items-center gap-3 p-3">
                <div className="flex items-center gap-3">
                  <File className="text-[#3cc88a] h-5 w-5" />
                  <div className="text-left text-white font-bold">
                    PDF Sync Hub - Docwhiz
                  </div>
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  DocWhiz is an intelligent chatbot powered by
                  Retrieval-Augmented Generation (RAG), designed to help users
                  interact with PDF documents more effectively
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/docwhiz.png"
                alt="docwhiz"
                className="h-auto w-full object-cover rounded-b-xl"
              />
            </div>
          </div>
          {/* Multimodal Legal QA on Traffic Sign Rules */}
          <div className="flex flex-col bg-[#171717] rounded-2xl border-2 border-[#2E2E2E] justify-between cursor-pointer">
            <div className="flex flex-col gap-10 px-4 py-3">
              <div className="flex flex-col items-center gap-3 p-3">
                <div className="flex items-start gap-3">
                  <OctagonMinus className="text-[#3cc88a]" />
                  <div className="text-left text-white font-bold">
                    Multimodal Legal QA on Traffic Sign Rules
                  </div>
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  We developed a multimodal retrieval-augmented generation (RAG)
                  system for Vietnamese legal QA on traffic sign rules
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/QA_traffic.png"
                alt="Multimodal Legal QA on Traffic Sign Rules"
                className="h-auto w-full object-cover rounded-b-xl"
              />
            </div>
          </div>
        </div>
        {/* Explainable AI for Educational Question-Answering */}
        <div className="flex flex-col bg-[#171717] rounded-2xl border-2 border-[#2E2E2E] justify-between cursor-pointer">
          <div className="flex flex-col gap-10 px-4 py-3">
            <div className="flex flex-col items-center gap-3 p-3">
              <div className="flex items-start gap-3">
                <Bot className="text-[#3cc88a]" />
                <div className="text-left text-white font-bold">
                  Explainable AI for Educational Question-Answering
                </div>
              </div>
              <div className="text-gray-400 text-sm font-medium">
                Build a systems that combine the power of LLMs with symbolic
                reasoning to handle complex, rule-based, and logic-driven
                questions.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/xAI_education.png"
              alt="Multimodal Legal QA on Traffic Sign Rules"
              className="h-auto w-full object-cover rounded-b-xl"
            />
          </div>
        </div>
        <div>
          <p className="text-left text-gray-400">
            Just <span className="font-bold text-white">Click</span> to see more
            detail
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
