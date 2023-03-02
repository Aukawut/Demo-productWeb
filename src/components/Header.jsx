import React from 'react'
import picHeader from '/Hisense.png'
import css from './header.module.css'
const Header = () => {
  return (
    <div>
        <img src={picHeader} className={`${css.imgHeader}`}/>
    </div>
  )
}

export default Header