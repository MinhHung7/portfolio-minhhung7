// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutme/AboutMe";
import Blogs from "./pages/blogs/Blogs";
import BlogDetail from "./pages/blogs/BlogDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Các route bên trong Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} /> {/* chi tiết */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
