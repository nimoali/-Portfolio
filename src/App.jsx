
import { Route , Routes, defer } from "react-router-dom";

import Home from "./assets/component/Homepage";
import Header from "./assets/component/Header";
import AboutMe from "./assets/component/About";



function App(){
  return  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<AboutMe/>}/>

</Routes>
}

export default App
