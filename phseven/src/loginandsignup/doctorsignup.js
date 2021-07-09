import React, { useState } from 'react'



import Doctorsiginimage from '../assets/img/privacy.png'
import Header from "../landingpage/header";
import Footer from "../landingpage/footer";
import { NavLink } from 'react-router-dom';





const Doctorsignup = () => {

    return (
        <>
            <Header />
            <div className="doctormaindiv">


                <div className="doctorcontainer doctordiv" id="doctorcontainer">

                    <div className="form-doctorcontainer sign-in-doctorcontainer doctordiv">
                        <form className="doctorform" action="#">

                            <h1 className="doctorh1" >Sign UP</h1>

                            <input className="doctorinput" type="text" placeholder="Full Name" />
                            <input className="doctorinput" type="text" placeholder="Username" />
                            <input className="doctorinput" type="email" placeholder="Email" />
                            <input className="doctorinput" type="password" placeholder="Password" />
                            <input className="doctorinput" type="password" placeholder="Confirm Password" />

                            <button className="doctorbutton" >Sign Up</button>
                            {/* <a href="#">Forgot your password?</a> */}
                            <h6>Already User ?  <NavLink exact to="/doctorlogin">Sign In</NavLink></h6>

                        </form>
                    </div>
                    <div className="doctoroverlay-doctorcontainer doctordiv">
                        <div className="doctoroverlay doctordiv ">

                            <div className="doctoroverlay-panel doctoroverlay-right doctordiv">
                                <h4 className="doctorh1 signupprivacy">There won't be leakage of sensitive data and It would be completely secure</h4>


                            </div>

                            <div className="doctorimagediv">
                                <img className="doctorimagecontainersignup float-right" src={Doctorsiginimage} alt="." />
                            </div>



                        </div>



                    </div>
                </div>




            </div>
            <Footer />
        </>
    )
}


export default Doctorsignup;