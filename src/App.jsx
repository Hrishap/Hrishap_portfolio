import Dock from '#components/Dock'
import Navbar from '#components/Navbar'
import Welcome from '#components/Welcome'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import React from 'react'

gsap.registerPlugin(Draggable)
const App = () => {
  return (
  <main>
    <Navbar/>
    <Welcome/>
   <Dock/>
  </main>
  )
}

export default App