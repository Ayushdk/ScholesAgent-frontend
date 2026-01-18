import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import Calculator from "./pages/Calculator";
import Graphs from "./pages/Graphs";
import About from "./pages/About";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

