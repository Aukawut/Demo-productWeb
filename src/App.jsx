import { useEffect, useState } from 'react'
import './App.css'
import Detail from './components/Detail'
import NavBar from './components/NavBar'
import DetailCHN from './components/DetailCHN'
import { useLanguageStore } from './store'
function App() {
 const [L,setL] = useLanguageStore((state) => state.language);
  useEffect(() => {
    if(L == null || L==undefined || L=="null"|| L=="undefined"){
      setL("TH")
      localStorage.setItem("L","TH")
    }
   
  },[])
  return (
    <div className="App">
       <Detail />
    </div>
  )
}

export default App
