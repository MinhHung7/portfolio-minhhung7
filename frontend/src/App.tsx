// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Các route bên trong Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/flashcard" element={<Flashcard />} /> */}
          {/* <Route path="/kanjiwriting" element={<KanjiWriting />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
