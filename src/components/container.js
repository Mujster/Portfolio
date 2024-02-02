import React from "react";
import '../App.css'

const InfoContainer=()=>{
   return (
    <div className="container">
        <p>#underconstruction</p>
        <h1>Coming Soon</h1>
        <p className="pg">Our website is under construction. Subscribe to get notified when it drops</p>
        <div className="input-container">
            <input type="text" placeholder="Email Address" required/>
            <button>Get Notified</button>
        </div>
    </div>
   );
}
export default InfoContainer;