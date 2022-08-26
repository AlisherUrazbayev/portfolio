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
        {id: 1, name: "React", description: "lorem descrotr fdfdsn trtfsdsasasasasasasasasa"},
        {id: 2, name: "JavaScript", description: "lorem descrotr fdfdsn trtfsd"},
        {id: 3, name: "HTML/CSS", description: "lorem descrotr fdfdsn trtfsd"},
        {id: 4, name: "HTML/CSS", description: "lorem descrotr fdfdsn trtfsd"},
        {id: 5, name: "HTML/CSS", description: "lorem descrotr fdfdsn trtfsd"},
        {id: 6, name: "HTML/CSS", description: "lorem descrotr fdfdsn trtfsd"},
        {id: 7, name: "HTML/CSS", description: "lorem descrotr fdfdsn trtfsd"},
        {id: 8, name: "HTML/CSS", description: "lorem descrotr fdfdsn trtfsd"},

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
