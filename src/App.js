import './App.css';
import Greetings from "./components/greetings/Greetings";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
        <Header />
        <Greetings />
        <Skills />
    </div>
  );
}

export default App;
