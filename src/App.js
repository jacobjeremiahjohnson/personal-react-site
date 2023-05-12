import React from "react"
import './App.css'
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Resume from "./components/Resume.js"
import Footer from "./components/Footer.js"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/personal-react-site' element={<Home />} />
        <Route exact path='/personal-react-site/about' element={<About />} />
        <Route exact path='/personal-react-site/projects' element={<Projects />} />
        <Route exact path='/personal-react-site/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
