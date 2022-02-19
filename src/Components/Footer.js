import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position:"fixed",
    background: "#808080",
    left: "0",
    bottom: "0",
    width:"100%",
    overflow: "hidden",
  }
  return (
  <div className =" text-light  py-3" style={footerStyle}>
    <p className = "text-center">
     &copy; CHILL x THOR
    </p>
    
  </div>
  )
};