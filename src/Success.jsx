import React from "react";
import "./success.css"
import successimage from "/assets/images/icon-success.svg"


function Success({handleDismiss, email, ismodalopen}){
    return (
        <div className="wrapper">
        <div className={!ismodalopen ? "hide" : "success-container" }>
            <div className="info">
            <img src={successimage} alt="successimage" />
            <h1>Thanks for <br/> Subscribing!</h1>
            <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription</p>
            </div>
            <div className="btn-container" onClick={handleDismiss} >Dismiss message</div>
        </div>
        </div>
    ) 
}
export default Success;

