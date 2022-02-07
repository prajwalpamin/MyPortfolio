
import './App.css';
import Navbar from "./Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contacts";
import Works from "./Components/Works";
import Resume from "./Components/Resume"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
<Router className="App">
    <Navbar />
    {/* <div class="background"></div> */}
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/resume" element={<Resume/>}></Route>
      <Route path="/works" element={<Works/>}></Route>
    </Routes>
  </Router>
    </div>
    
  );
}

export default App;
