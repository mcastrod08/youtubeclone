import React from 'react'
import logo from "../utils/signature.png"

const Footer = () => {
  return (
    <div style={{color:"#fff", textAlign: 'center'}}> 
      © 2024 Copyrights: 
      <img src={logo} alt="logo" width='60px' style={{marginLeft:'0.3rem'}}/>
    </div>
  )
}

export default Footer