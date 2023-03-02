import { useState } from 'react'
import './App.css'
import Detail from './components/Detail'
import NavBar from './components/NavBar'
import Header from './components/Header'
function App() {
 

  return (
    <div className="App">
      <NavBar />
      <Header />
       <Detail />
    </div>
  )
}

export default App
