import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css"
import listimage from "/assets/images/icon-list.svg"
import desktopimage from "/assets/images/illustration-sign-up-desktop.svg"
import mobileimage from "/assets/images/illustration-sign-up-mobile.svg"



function Home({email, handleChange, handleSubmit, emailerr, erralert, handleFocus}){

  return (
  <div className="wrapper">
    <div className='container'>
      <picture className="flexbox1">
      <source media="(min-width: 750px)" srcset={desktopimage} />
      <img src={mobileimage} alt="displaypic" />
      </picture>
    <div className="secondflexbox">
      <h1>Stay Updated</h1>
      <p>Join 60,000+ product managers receiving monthly updates on: </p>
      <div className="list"><img src={listimage} alt="list"/><span>Product discovery and building what matters</span></div>
      <div className="list"><img src={listimage} alt="list"/><span> Measuring to ensure updates are a success</span></div>
      <div className="list"><img src={listimage} alt="list"/><span> And much more</span></div>
      <div className="formInput">
      <div>
      <div className="err-container"><label htmlFor="email"><small><b>Email address</b></small></label> <small className="errmsg">{emailerr}</small></div>
      <div><input type="email" className={erralert ? "erralert" : "inputstyle"} placeholder='email@company.com' value={email} onChange={handleChange} onFocus={handleFocus} /></div>    
      </div>
      <div className="btn-container" onClick={handleSubmit}>Subscribe to monthly newsletter</div>
      </div>
    </div> 
    </div>
  </div>


  )
}

export default Home