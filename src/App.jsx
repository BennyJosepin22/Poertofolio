import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import "./App.css";

function NotFound() {
  return <div className="p-8 text-gray-400">Page not found</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
