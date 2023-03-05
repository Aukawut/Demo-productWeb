import { useEffect, useState } from 'react'
import './App.css'
import Detail from './components/Detail'
import NavBar from './components/NavBar'
import DetailCHN from './components/DetailCHN'
function App() {
 const [L,setL] = useState(localStorage.getItem("L"))
  useEffect(() => {
    if(L == null || L==undefined || L=="null"|| L=="undefined"){
      setL("TH")
      localStorage.setItem("L","TH")
    }
    console.log(L);
  },[])
  return (
    <div className="App">
       <Detail />
    </div>
  )
}

export default App
