import React, { useState,useEffect } from 'react'
import picHeader from '/Hisense.png'
import picHeader2 from '/Hisense2.png'
import css from './header.module.css'
import { useLanguageStore } from '../store'
const Header = () => {
  const [isL,setIsL] = useState(useLanguageStore((state) => state.language))
console.log("Header",isL);
useEffect(() => {
  if(isL == null ||isL=="null"||isL == undefined||isL == 'undefined'){
    localStorage.setItem("L","TH");
  }
  setIsL("TH")
},[isL])

  return (
    <div>
        <img src={isL == "TH" ? picHeader :picHeader2} className={`${css.imgHeader}`}/>
    </div>
  )
}

export default Header