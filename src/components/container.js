import {React,useRef,useState} from "react";
import {ToastContainer,toast}from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import '../App.css'

const InfoContainer=()=>{
   const[inputValue,setInputValue]=useState(''); 
   const inputRef=useRef(null);     
   const handleInput=(e)=>{
       setInputValue(e.target.value);
   }
   const SendEmail=async()=>{
         if(inputValue===''){
              toast('Please enter your email address');
         }
         else{
              try{
                  const response= await axios.post('https://under-construction-backend-service.vercel.app/addEmail',{email_:inputValue});
                  if(!response){
                    toast('Unknown Error Occured! Please try again later.');
                  }
                  toast("You will be notified soon");
                  setInputValue('');
                  if(inputRef.current){
                    inputRef.current.value='';
                  }
              }
              catch(err){
                console.log(err.message);
              }
         }
   }
   return (
    <>
    <div className="container">
        <p>#underconstruction</p>
        <h1>Coming Soon</h1>
        <p className="pg">Our website is under construction. Subscribe to get notified when it drops</p>
        <div className="input-container">
            <input input={inputValue} onChange={handleInput} type="text" placeholder="Email Address" ref={inputRef} required/>
            <button onClick={SendEmail}>Get Notified</button>
        </div>
    </div>
    <ToastContainer/>
    </>
   );
}
export default InfoContainer;