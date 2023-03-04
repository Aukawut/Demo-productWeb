import React, { useState,useEffect } from 'react'
import picHeader from '/Hisense.png'
import picHeader2 from '/Hisense2.png'
import css from './header.module.css'
import { useLanguageStore } from '../store'
const Header = () => {
  const [isL,setIsL] = useState(useLanguageStore((state) => state.language))
  return (
    <div>
        <img src={isL == "TH" ? picHeader :picHeader2} className={`${css.imgHeader}`}/>
    </div>
  )
}

export default Header