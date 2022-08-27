import './App.css';
import Greetings from "./components/greetings/Greetings";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import {useState} from "react";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {

    const [skills, setSkills] = useState([
        {id: 1, name: "React", description: "lorem descrotr fdfdsn trtfsdsasasasa", icon: "images/react.png"},
        {id: 1, name: "JavaScript", description: "lorem descrotr fdfdsn trtfsdsasasasa", icon: "images/javascript.png"},
        {id: 1, name: "HTML", description: "lorem descrotr fdfdsn trtfsdsasasasa", icon: "images/html5.png"},
        {id: 1, name: "CSS", description: "lorem descrotr fdfdsn trtfsdsasasasa", icon: "images/css3.png"},
    ]);

    const [projects, setProjects] = useState([
        {id:1, name: "First project", description: 'some info here', projectUrl: '#', imageUrl: '#'},
        {id:2, name: "First project", description: 'some info here', projectUrl: '#', imageUrl: '#'},
        {id:3, name: "First project", description: 'some info here', projectUrl: '#', imageUrl: '#'},
        {id:4, name: "First project", description: 'some info here', projectUrl: '#', imageUrl: '#'},
        {id:5, name: "First project", description: 'some info here', projectUrl: '#', imageUrl: '#'},
    ]);

  return (
    <div className="App">
        <Header />
        <Greetings />
        <Skills skills={skills}/>
        <Projects projects={projects}/>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
