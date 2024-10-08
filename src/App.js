import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Navba from './layouts/Navbar';
import firebase from "firebase/app"
import MainHomePage from './Components/MainHomePage';

import Cse from './Components/Departments/Cse.js';

import firebaseConfig from "./config/firebaseConfig"
import NEWS from './Components/NavbarElements/NEWS';
import Login from './Components/Login/Login';
import Ece from './Components/Departments/Ece';
import Footer from './layouts/Footer';
import Che from './Components/Departments/Che';
import CE from './Components/Departments/CE';
import Me from './Components/Departments/Me';
import EEE from './Components/Departments/EEE';
import SC from './Components/Departments/SC';

import Placements from './Components/NavbarElements/Placements';
import Teqip from './Components/NavbarElements/TEQIP';
import CoursesOffered from './Components/NavbarElements/Academics/CoursesOffered';
import MensHostel from './Components/NavbarElements/Facilities/MensHostel';
import Library from './Components/NavbarElements/Facilities/Library';
import Healthcentre from './Components/NavbarElements/Facilities/Health_center';
import Alumni from './Components/NavbarElements/Facilities/Alumni';
import NCC_NSS from './Components/NavbarElements/Facilities/NCC_NSS';
import NSS from './Components/NavbarElements/Facilities/NSS';
import Contact from './Components/NavbarElements/Contact';
import principal from './Components/NavbarElements/About/Principal'
import about from './Components/NavbarElements/About/about';
import viceprincipal from './Components/NavbarElements/About/viceprincipal';
import timetables from './Components/NavbarElements/Academics/TimeTables';
import calender from './Components/NavbarElements/Academics/Academic_calender';
// import WebTeam from './Components/Credits/WebTeam';
import NotFound from './layouts/NotFound';
// App.js





firebase.initializeApp(firebaseConfig)


function App() {

    
  
    return (
      <>
        <Router>
          <Navba />
  
          
            <Switch>
              <Route exact path="/" component={MainHomePage}/>
              <Route path="/CSE" component={Cse}/>
              <Route path="/ECE" component={Ece}/>
              <Route path="/ChE" component={Che}/>
              <Route path="/CE" component={CE}/>
              <Route path="/ME" component={Me}/>
              <Route path="/EEE" component={EEE}/>
              <Route path="/SC" component={SC}/>
              <Route path="/newsportal" component={NEWS}/>
              <Route path="/login" component={Login}/>
              <Route path="/TQ" component ={Teqip}/>
              <Route path="/teqip" component={Teqip} />
              <Route path="/placements" component={Placements}/>
              <Route path="/courses_offered" component={CoursesOffered}/>
              <Route path="/calender" component={calender}/>
              <Route path="/timetables" component={timetables}/>
              <Route path="/hostels" component={MensHostel}/>
              <Route path="/library" component={Library}/>
              <Route path="/healthcenter" component={Healthcentre}/>
              <Route path="/alumni" component={Alumni}/>
              <Route path="/nss_ncc" component={NCC_NSS}/>
              <Route path="/nss" component={NSS}/>
              <Route path="/contact" component ={Contact}/>
              <Route path="/principal" component ={principal}/>
              <Route path="/about" component ={about}/>
              <Route path="/viceprincipal" component ={viceprincipal}/>


              // etc...
              <Route path="*" component={NotFound} />
            </Switch>
         
          
          <Footer />
        </Router>
      </>
    );
  }
  

export default App;
