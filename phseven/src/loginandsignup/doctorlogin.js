import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


import Doctorloginimage from '../assets/img/doctorlogin.png'
import './doctorlogin.css'
import Header from "../landingpage/header";
import Footer from "../landingpage/footer";



const Doctorlogin = () => {

    return (
        <>
            <Header />
            <div className="doctormaindiv">


                <div className="doctorcontainer doctordiv" id="doctorcontainer">

                    <div className="form-doctorcontainer sign-in-doctorcontainer doctordiv">
                        <form className="doctorform" action="#">

                            <h1 className="doctorh1" >Sign in</h1>


                            <input className="doctorinput" type="email" placeholder="Email" />
                            <input className="doctorinput" type="password" placeholder="Password" />

                            <button className="doctorbutton" >Sign In</button>
                            <a href="#">Forgot your password?</a>
                            <h6>New User ?  <NavLink exact to="/doctorsignup">Sign Up</NavLink></h6>
              


                        </form>
                    </div>
                    <div className="doctoroverlay-doctorcontainer doctordiv">
                        <div className="doctoroverlay doctordiv ">

                            <div className="doctorimagediv">
                                <img className="doctorimagecontainer float-right" src={Doctorloginimage} alt="." />
                            </div>



                        </div>



                    </div>
                </div>




            </div>
            <Footer />
        </>
    )
}


export default Doctorlogin;