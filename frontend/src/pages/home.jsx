import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';

const home = () => {
    const image=require("../images/Cover.jpg")
 return (
  <div className="Home-Page bg-dark text-white container-fluid">
    <div className='row container '>
        <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
        style={{height: "91.5vh"}}>
            <h2 style={{ fontSize: "60px" }}>
            BOOK STORE
            <span style={{ display: 'block' }}>
              FOR YOU
            </span></h2>
            <p className="mb-0"style={{color:"silver"}}>Check the books from here</p>
          
            <Link to="/books" className='viewBook my-3'>VIEW BOOKS</Link>
            </div>
            <div
            className='col-lg-6 d-flex justify-content-center align-items-center flex-column'
            style={{height:"85vh"}}>
                <img 
              style={{height: "91.5vh"}}  src={image} alt="/"/>
                
                </div>
                </div>
                </div> 
 );
};
  

export default home;