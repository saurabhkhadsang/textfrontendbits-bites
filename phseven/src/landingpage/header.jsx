import { NavLink } from 'react-router-dom';
import mainlogo from "../assets/img/mainlogo.png";





const header = () => {
    return (
        <>
            <header id="header" className="header fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">



                    <NavLink to="/" className="logo d-flex align-items-center">

                        <img src={mainlogo} alt="logo" />
                        <span>Ph7aPharmaHelp</span>
                    </NavLink>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><NavLink className="nav-link scrollto active" to="/">Home</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/">About</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/">Login</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/">Portfolio</NavLink></li>
                            <li><NavLink className="nav-link scrollto" to="/">Team</NavLink></li>
                            <li><NavLink to="blog.html">Blog</NavLink></li>
                            <li className="dropdown"><a to="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><NavLink to="breafabout.html">Breaf About</NavLink></li>
                                    <li className="dropdown"><NavLink to="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                                        <ul>
                                            <li><NavLink to="/">Deep Drop Down 1</NavLink></li>
                                            <li><NavLink to="/">Deep Drop Down 2</NavLink></li>
                                            <li><NavLink to="/">Deep Drop Down 3</NavLink></li>
                                            <li><NavLink to="/">Deep Drop Down 4</NavLink></li>
                                            <li><NavLink to="/">Deep Drop Down 5</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/">Drop Down 2</NavLink></li>
                                    <li><NavLink to="/">Drop Down 3</NavLink></li>
                                    <li><NavLink to="/">Drop Down 4</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink className="nav-link scrollto" to="/">Contact</NavLink></li>
                            <li><NavLink className="getstarted scrollto" to="/">Get Started</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </>

    );
};

export default header;
