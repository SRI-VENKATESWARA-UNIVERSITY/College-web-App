import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import * as M from "materialize-css"
// import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";


const Navba = () =>{
   const [isLoggedIn,setIsloggedIn] = useState(false)
   useEffect(()=>{
   const x = (JSON.parse(localStorage.getItem("user")));
   
   if(x){
     console.log("ho")
    if(x.token && x._id)
    {
      setIsloggedIn(true)
    }
  }
   },[])
  
  
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, { edge: 'left',
      draggable: true,
      inDuration: 100,
      outDuration: 200,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null,
      preventScrolling: true});
      console.log(instances)
    });
    const handleLOgout = (e)=>{
      e.preventDefault();
      localStorage.clear()
      window.location.reload()
      (alert("Logged out succesfully"))
    }
    return(
      <>
     <nav style={{background:"black"  ,position:"fixed",zIndex:1}} >
    <div className="nav-wrapper">
      <a href="/" style={{marginLeft:"52px",fontSize:24,textDecoration:"none"}}><img src="/svuce_logo.png" alt="#"/></a>
      <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" ><FaBars /></i></a>
      <ul className="right hide-on-med-and-down navli navb">
      <li><a href="/#" >HOME</a></li>
        <li><a href="/#about">ABOUT</a></li>
       
        <li><a href="/#departments" >DEPARTMENTS</a></li>
        <li><a href="/#services" >QUICK LINKS</a></li>
        <li><a href="/teqip" >TEQIP</a></li>
        <li><a href="/news" >NEWS</a></li>
       {isLoggedIn ? (<><li><Button onClick={handleLOgout} >LOGOUT</Button></li></>):(<> <li><a href="/login" >LOGIN</a></li></>)}
      </ul>
    </div>
  </nav>

  <ul className="sidenav navb" id="mobile-demo">

  <li><a href="/#" >HOME</a></li>
        <li><a href="/#about">ABOUT</a></li>
       
        <li><a href="/#departments" >Departments</a></li>
        <li><a href="/#services" >QUICK LINKS</a></li>
        <li><a href="/teqip" >TEQIP</a></li>
        <li><a href="/news" >NEWS</a></li>
        {isLoggedIn ? (<><li><a href="/" >LOGOUT</a></li></>):(<> <li><a href="/login" >LOGIN</a></li></>)}
  </ul> 
         </>   
           
           
    )
}
export default Navba
