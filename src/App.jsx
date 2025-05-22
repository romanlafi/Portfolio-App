import './App.css'
import Navbar from "./components/navegation/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import Skills from "./components/pages/Skills.jsx";
import Contact from "./components/pages/Contact.jsx";
import Education from "./components/pages/Education.jsx";

function App() {
    return (
        <div className="flex">
            <Navbar />
            <div className="flex-1 md:ml-64">
                <Home />
                <About />
                <Portfolio />
                <Education />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}

export default App
