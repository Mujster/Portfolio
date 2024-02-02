import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import InfoContainer from './components/container';

function App() {
  const [currentImage,setCurrentImage]=useState(0);
  useEffect(()=>{
    const images=['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg'];
    const interval=setInterval(()=>{
      setCurrentImage((idx)=>(idx+1)%images.length);
    },7000);
    return ()=>clearInterval(interval);
  },[]);
  return (
    <div>
      <Navbar/>
      <InfoContainer/>
     <img src={`/${currentImage+1}.jpeg`} alt="img" />
     </div>
  );
}

export default App;
