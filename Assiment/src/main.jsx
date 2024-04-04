import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Home from './assets/component/Homepage.jsx'
import './assets/style/index.css'
import Bio from './assets/component/Bio.jsx'
import Skill from './assets/component/Skills.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div className='' >
      <Skill name="Web Designer"   />
  <Home />
  <Bio />
  <Skill name="Web Designer" />

  </div>


)
