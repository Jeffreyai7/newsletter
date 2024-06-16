import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css"


function Home({email, handleChange, handleSubmit, emailerr, erralert, handleFocus}){

  return (
  <div className="wrapper">
    <div className='container'>
      <picture className="flexbox1">
      <source media="(min-width: 750px)" srcset="assets/images/illustration-sign-up-desktop.svg"/>
      <img src="assets/images/illustration-sign-up-mobile.svg" alt="" />
      </picture>
    <div className="secondflexbox">
      <h1>Stay Updated</h1>
      <p>Join 60,000+ product managers receiving monthly updates on: </p>
      <div className="list"><img src="/assets/images/icon-list.svg" alt="list"/><span>Product discovery and building what matters</span></div>
      <div className="list"><img src="/assets/images/icon-list.svg" alt="list"/><span> Measuring to ensure updates are a success</span></div>
      <div className="list"><img src="/assets/images/icon-list.svg" alt="list"/><span> And much more</span></div>
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