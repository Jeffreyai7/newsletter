import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Home({email, handleChange, handleSubmit, emailerr}){

  return (
  <div className='container'>
  <div className="gridboxes">
  <img src="assets/images/illustration-sign-up-mobile.svg" alt="" />
  </div>
  <div className="gridboxes">
    <h1>Stay Updated</h1>
    <p>Join 60,000+ product managers receiving monthly updates on: </p>
    <div><img src="assets/images/icon-list.svg" alt="list"/> <p>Product discovery and building what matters</p></div>
    <div><img src="assets/images/icon-list.svg" alt="list"/> <p> Measuring to ensure updates are a success</p></div>
    <div><img src="assets/images/icon-list.svg" alt="list"/> <p> And much more</p></div>
    <div><label htmlFor="email">Email address</label> <span>{emailerr}</span></div>
    <div><input type="email" placeholder='email@company.com' value={email} onChange={handleChange} /></div>    
    <div><button type="submit" onClick={handleSubmit}>Subscribe to monthly newsletter</button></div>
  </div> 
</div>

  )
}

export default Home