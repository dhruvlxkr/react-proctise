// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import svgIcon from '../public/favicon.svg'
// import './App.css'
import Hello from "./Hello";
import FirstProject from "./firstProject";

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Hello />
      <FirstProject />
      <img src={reactLogo} width="140px" />
      <img src={viteLogo} width="140px" />
      <img src={heroImg} width="140px" />
      <img src={svgIcon} width="140px" />
    </>

  )
}

export default App
