import React from 'react';
import { FaCode} from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
  const ReloadPage = () => {   
    window.location.reload();
  };
  const LinkedInRedirect=()=>{
    window.location.href='https://www.linkedin.com/in/mmujtabaahmad15';
  }
  const GithubRedirect=()=>{
    window.location.href='https://www.github.com/Mujster';
  }
  const TwitterRedirect=()=>{
    window.location.href='https://twitter.com/Mujtaba53135111';
  }
  const DevRedirect=()=>{ 
    window.location.href='https://dev.to/hammer15';
  }
  const MediumRedirect=()=>{
    window.location.href='https://medium.com/@mmujtabach1234';
  }
  return (
    <div className="navbar">
      <button onClick={ReloadPage} className='logo-btn'>
      <h1>
        <p>
          <FaCode />
        </p>
        Mujster
      </h1>
      </button>
        <div className="wrapper">
          <button onClick={LinkedInRedirect} className="icon linkedin">
            <div className="tooltip">LinkedIn</div>
            <span><i className="fab fa-linkedin"></i></span>
          </button>
          <button onClick={GithubRedirect} className="icon github">
            <div className="tooltip">Github</div>
            <span><i className="fab fa-github"></i></span>
          </button>
          <button onClick={DevRedirect} className="icon dev">
            <div className="tooltip">Dev</div>
            <span><i className="fab fa-dev"></i></span>
          </button>
          <button onClick={MediumRedirect} className="icon github">
            <div className="tooltip">Medium</div>
            <span><i className="fab fa-medium"></i></span>
          </button>
          <button onClick={TwitterRedirect} className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span><i className="fab fa-twitter"></i></span>
          </button>
        </div>
    </div>
  );
};

export default Navbar;
