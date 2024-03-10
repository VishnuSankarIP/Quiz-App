import React from 'react'

function SvgComponent() {
  return (
    <div className="MainDiv" style={{position:'absolute',bottom:'0',left:'0',width:'100%',zIndex:'-1'}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,160C384,139,480,85,576,90.7C672,96,768,160,864,197.3C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
  )
}

export default SvgComponent