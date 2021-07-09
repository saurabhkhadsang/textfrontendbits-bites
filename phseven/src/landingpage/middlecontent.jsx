import { NavLink } from 'react-router-dom';



import values3 from '../assets/img/values3.png'
import doctorremovebgpreview from "../assets/img/doctorremovebgpreview.png";
import TEamremovebgpreview from "../assets/img/TEamremovebgpreview.png";
import idearemovebgpreview from "../assets/img/idearemovebgpreview.png";
import prescriptionremovebgpreview from "../assets/img/prescriptionremovebgpreview.png";


const middlecontent = () => {

    return (

        <>

            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 >Bits&Bytes Presents</h1>
                            <h2 >Is Technological aspect lacking to have a connection between Doctors , Patient and Chemist ?
                                Don't worry Ph7 a Pharmahelp is Here !
                            </h2>
                            <div >
                                <div className="text-center text-lg-start">
                                    <NavLink to="/" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img" >
                            <img src={doctorremovebgpreview} className="img-fluid" alt="." />
                        </div>
                    </div>
                </div>
            </section>







            <main id="main">


                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">

                    <div className="container" >
                        <div className="row gx-0">

                            <div className="col-lg-6 d-flex flex-column justify-content-center"  >
                                <div className="content">
                                    <h3>Who We Are</h3>
                                    <h2>We are First year enthusiast Engineering Students having ignited minds creating our first ever site that will help alot of people
                                    </h2>
                                    <p>
                                        Hola Peeps! You are at right place !This site takes up the patient's information and
                                        prescription provided by the doctor and converts it into a Qr code this code is provided to
                                        patient through mail so that the chemist can scan it and provide him/her the respective medicines

                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-6 d-flex align-items-center"  >
                                <img src={TEamremovebgpreview} className="img-fluid" alt="." />
                            </div>

                        </div>
                    </div>

                </section>
                {/* <!-- End About Section --> */}




                {/* <!-- ======= Values Section ======= --> */}
                <section id="values" className="values">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Our Values</h2>
                            <p>So ! What Problems does it solve and what makes it different?</p>
                        </header>

                        <div className="row">

                            <div className="col-lg-4">
                                <div className="box"  >
                                    <img src={idearemovebgpreview} className="img-fluid" alt="." />
                                    <h3>A unique thought.</h3>
                                    <p>The thought process behind this actually differentiates it from all other apps / sites


                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box"  >
                                    <img src={prescriptionremovebgpreview} className="img-fluid" alt="" />
                                    <h3>The prescription list</h3>
                                    <p>Since it involves technological attributes the chances of loosing this list is very less</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box" >
                                    <img src={values3} className="img-fluid" alt="." />
                                    <h3>Time Saving.</h3>
                                    <p>Technology has evolved so far inorder to solve this problem so does this site does .</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                {/* <!-- End Values Section --> */}







                {/* <!--  Team Section --> */}
                <section id="team" className="team">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Team</h2>
                            <p>Our hard working team</p>
                        </header>

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={values3} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="mailto:riteshwanave@gmail.com"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="https://github.com/RiteshWanave"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="https://www.linkedin.com/in/ritesh-wanave-68b723212/"><i className="bi bi-linkedin"></i></NavLink>
                                            <NavLink to=""><i className="bi bi-instagram"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Ritesh Wanave </h4>
                                        <span>Team Leader </span>
                                        <span>Back-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={values3} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                                            <NavLink to="mailto:simransv1402@gmail.com"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="https://github.com/SimranSv"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="https://www.linkedin.com/in/simran-vedpathak-b4a291207"><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Simran Vedpathak</h4>
                                        <span>Front-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={values3} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                                            <NavLink to="mailto:kulkarnivaishnavi499@gmail.com"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="https://github.com/vaishnavi802"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="https://www.linkedin.com/in/vaishnavi-kulkarni-b0489a210"><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Vaishnavi Kulkarni </h4>
                                        <span>Back-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={values3} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                                            <NavLink to="mailto:saurabhkhadsang2018@gmail.com"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="https://github.com/saurabhkhadsang"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to=""><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Saurabh Khadsang</h4>
                                        <span>Front-end </span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                {/* <!-- End Team Section --> */}



                {/* <!-- Mentor--> */}

                <section id="team" className="team">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Mentor</h2>
                            <p>Our hard working Mentor</p>
                        </header>

                        <div className="row gy-4 mentorbox align-items-center justify-content-center ">

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={values3} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Devang kamble </h4>
                                        <span>Senior developer</span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" >
                                <div className="member">
                                    <div className="member-img">
                                        <img src={values3} className="img-fluid" alt="." />
                                        <div className="social">
                                            <NavLink to="/"><i className="bi bi-twitter"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-envelope"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to="/"><i className="bi bi-linkedin"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sayed Alfhad Shah</h4>
                                        <span>Senior developer</span>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                {/* <!-- end Mentor--> */}





                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" className="contact">

                    <div className="container" >

                        <header className="section-header">
                            <h2>Contact</h2>
                            <p>Contact Us</p>
                        </header>

                        <div className="row gy-4">

                            <div className="col-lg-6">

                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <i className="bi bi-geo-alt"></i>
                                            <h3>Address</h3>
                                            <p>---------,<br />---------------------</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <i className="bi bi-telephone"></i>
                                            <h3>Call Us</h3>
                                            <p>+91 85509 60012<br />+91 91754 86500</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <i className="bi bi-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>help@pharmahelp.com<br />ph7apharmahelp@pharmahelp.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <i className="bi bi-github"></i>
                                            <h3>Github</h3>
                                            {/* <!-- <p>Monday - Friday<br>9:00AM - 05:00PM</p> --> */}
                                            <NavLink to="https://github.com/RiteshWanave/Bits-Bytes.git">Bits-Bytes</NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="row gy-4">

                                        <div className="col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                        </div>

                                        <div className="col-md-6 ">
                                            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                        </div>

                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required />
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button type="submit">Send Message</button>
                                        </div>

                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>

                </section>
                {/* <!-- End Contact Section --> */}

            </main>

        </>

    );
};

export default middlecontent;
