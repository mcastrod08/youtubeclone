import React from 'react'
import logo from "../utils/signature2.png"

const Footer = () => {
  return (
    <div style={{color:"#fff", textAlign: 'center'}}> 
      © 2024 Copyrights: 
      <img src={logo} alt="logo" width='60px'/>
    </div>
  )
}

export default Footer