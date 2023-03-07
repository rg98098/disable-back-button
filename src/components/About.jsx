
import React, { useEffect } from 'react'

const About = ({handler}) => {
  const handlerCallback = () => {
    handler(true);
  }
  useEffect(()=>{
    const handleBackBtn = () => {
      window.history.pushState(null,  window.location.href);
  }
    handleBackBtn()
    window.addEventListener('popstate',handleBackBtn);
    return () => {
      window.removeEventListener('popstate',handleBackBtn)
    }


  },[])
  return (
    <>
    <div>About</div>
    <button onClick={handlerCallback}>Set off</button>
    </>
  )
}

export default About