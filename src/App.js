import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Projects from "./components/Projects"
import { useState } from 'react'


function App() {

  return (
    <div>
      <Navbar />
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;



