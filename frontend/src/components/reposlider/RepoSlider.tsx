import { Star, GitFork, Github, ExternalLink } from "lucide-react";
const repos = [
  {
    title: "Docwhiz",
    description:
      "DocWhiz is an AI chatbot powered by RAG, designed for smart PDF interaction. It answers questions from PDF files, generates summaries, creates custom notes, and builds interactive mindmaps. Ideal for study, research, and document review with a user-friendly, visual experience.",
    tech: "Javascript",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/Docwhiz",
  },
  {
    title: "MathSolver-LLM-based-system",
    description:
      "A LLM-based chatbot can solve math problems, give clearly explainable reasons and self-training by using reinforcement learning, Fine-tune Mistral v0.3 (7B) on MathQA-40K datasets, Use Unsloth framework for increasing performance model, speed training time, Apply Google Mind paper’s techniques for increasing accuracy and performance of model",
    tech: "Jupter Notebook",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/MathSolver-LLM-based-system",
  },
  {
    title: "Spark_MongoDB_step_by_step",
    description:
      "A MongoDB guide book for beginners to get started with MongoDB",
    tech: "Doc",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/Spark_MongoDB_step_by_step",
  },
  {
    title: "Note_blog_retrieval_chatbotAI",
    description:
      "A chatbot help analize the trend in Note - a social media in Japanese",
    tech: "HTMl",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/Note_blog_retrieval_chatbotAI",
  },
  {
    title: "Multimodal-RAG-pipeline-with-LlamaIndex-and-Neo4j",
    description:
      "A AI-powered system for multimodal retrieval-augmented generation (RAG) pipeline with LlamaIndex and Neo4j",
    tech: "Jupyter Notebook",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/Multimodal-RAG-pipeline-with-LlamaIndex-and-Neo4j",
  },
  {
    title: "xAI_Educational_QA_System",
    description:
      "A AI-powered system for educational question answering (QA) system with xAI",
    tech: "Python",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/xAI_Educational_QA_System",
  },
  {
    title: "xAI_Educational_QA_System",
    description:
      "A face-recognition project used for 'Recognition' subject. The goal is face-human recognition in Near-Infrared (NIR) images",
    tech: "Jupyter Notebook",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/Face-Recognition-in-Near-Infrared-Images",
  },
  {
    title: "BKAI_Hackathon_2024",
    description:
      "The repository for BKAI Hackathon 2024 - Traffic Vehicle Detection Track. The competition focuses solely on one task: detecting and classifying vehicle types from traffic cameras under normal or challenging conditions (nighttime, rain, glare, etc.).",
    tech: "Python",
    star: "1",
    fork: "0",
    link: "https://github.com/MinhHung7/BKAI_Hackathon_2024",
  },
  {
    title: "Final_Project_Data_Visualization",
    description:
      "A data visualization project for Final Project in Data Visualization course",
    tech: "Jupyter Notebook",
    star: "1",
    fork: "3",
    link: "https://github.com/MinhHung7/Final_Project_Data_Visualization",
  },
  {
    title: "Streamlit-Otaku-ChatBot",
    description:
      "This is an anime-data analysis app, deployed by Streamlit and integrate ChatBot (PandasAI + BambooAI)",
    tech: "Jupyter Notebook",
    star: "0",
    fork: "0",
    link: "https://github.com/MinhHung7/Streamlit-Otaku-ChatBot",
  },
  {
    title: "Final_Project_DataScienceProgramming",
    description:
      "Our project explores the Anime 2023 Dataset, a comprehensive collection of data related to anime, including details on genres, ratings, popularity, release years, studios, and more. This project aims to analyze trends in the anime industry, uncover hidden patterns, and provide insights through data visualization and predictive modeling.",
    tech: "Jupyter Notebook",
    star: "6",
    fork: "0",
    link: "https://github.com/MinhHung7/Final_Project_DataScienceProgramming",
  },
  {
    title: "AISearch_AresAdventure",
    description:
      "Ares's adventure is a game based on the original game 'Sokoban'. In this lab, we are making a version of Sokoban using BFS, DFS, UCS and A* algorithms.",
    tech: "Python",
    star: "0",
    fork: "1",
    link: "https://github.com/MinhHung7/AISearch_AresAdventure",
  },
];

const RepoSlider = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="repo-animate-marquee flex gap-10">
        {repos.concat(repos).map((repo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 p-4 bg-[#1a1a1a] rounded-md hover:bg-[#242424] cursor-pointer"
          >
            <a href={repo.link} target="_blank" rel="noopener noreferrer">
              <p className="text-left text-xs font-bold text-[#3cc88a]">
                {repo.title}
              </p>
              <p className="mt-2 text-left text-xs text-gray-400 line-clamp-3">
                {repo.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="mt-2 text-white bg-[#3cc88a] w-fit px-2 py-1 rounded-md">
                  <p className="text-xs">{repo.tech}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="text-white w-4 h-4" />
                    <p className="text-xs">{repo.star}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitFork className="text-white w-4 h-4" />
                    <p className="text-xs">{repo.fork}</p>
                  </div>
                </div>
              </div>
              <hr className="my-3 text-gray-500" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="text-white w-4 h-4" />
                  <p className="text-xs text-gray-400">View</p>
                </div>
                <div>
                  <ExternalLink className="text-[#3cc88a] w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-5 convert-repo-animate-marquee flex gap-10">
        {repos.concat(repos).map((repo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 p-4 bg-[#1a1a1a] rounded-md hover:bg-[#242424] cursor-pointer"
          >
            <a href={repo.link} target="_blank" rel="noopener noreferrer">
              <p className="text-left text-xs font-bold text-[#3cc88a]">
                {repo.title}
              </p>
              <p className="mt-2 text-left text-xs text-gray-400 line-clamp-3">
                {repo.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="mt-2 text-white bg-[#3cc88a] w-fit px-2 py-1 rounded-md">
                  <p className="text-xs">{repo.tech}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="text-white w-4 h-4" />
                    <p className="text-xs">{repo.star}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitFork className="text-white w-4 h-4" />
                    <p className="text-xs">{repo.fork}</p>
                  </div>
                </div>
              </div>
              <hr className="my-3 text-gray-500" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="text-white w-4 h-4" />
                  <p className="text-xs text-gray-400">View</p>
                </div>
                <div>
                  <ExternalLink className="text-[#3cc88a] w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoSlider;
