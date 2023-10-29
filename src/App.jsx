import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";



function App() {
 
  // <Hero />
  return (
    <div className="main--div">
      <Navbar />
      <Card
       img="image_12.png"
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life lessons with Katie Zaferes"
       price={136}
      
      />
    </div>
  )
}

export default App
