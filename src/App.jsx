
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";


const App = () => {
  return (
    <Routes>
    {/* Landing Page */}
    <Route path="/" element={<LandingPage />} />
  
    {/* Layout with Nested Routes */}
    <Route path="/layout" element={<Layout />}>
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="courses" element={<Courses />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  
    {/* Redirect invalid paths to the landing page */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  );
};

export default App;
