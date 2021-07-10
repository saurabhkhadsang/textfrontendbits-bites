import React, { useState } from 'react'
import Header from "../landingpage/header";
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Patpresciptionwithadd = () => {

    
    return (
        <>
            <Header />
            <div className=" mx-5" style={{ marginTop: "7%" }}>
                <div className="mx-5 grid">
                    <div className="col-md-12 border  ">
                        <h4 className="my-5" >Name : <span>Ramesh Gupta</span> </h4>

                    </div>

                    <div className="d-grid  col-3 mx-auto mt-3"  >
                        <NavLink exact to='/createprescription'>
                            <button className="btn btn-primary "> <h5 className="fw-bold my-1">  Add Presciption </h5> </button>
                        </NavLink>
                    </div>



                    <div className="col-md-12 my-3">

                        <div className="row shadow p-3 mb-5 rounded"  >
                            <div className="col-md-9">
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Medicien List</h5>
                                    <h5>this is medicin</h5>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Diagnosic</h5>

                                    <h5>this is Diagnosic</h5>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">remark</h5>
                                    <h5>this is remark</h5>
                                </div>
                            </div>



                            <div className="col-md-3">
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold" >Date</h5>
                                    <h5>21/12/1212</h5>
                                </div>
                            </div>
                        </div>



                        <div className="row shadow p-3 mb-5 rounded"  >
                            <div className="col-md-9">
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Medicien List</h5>
                                    <h5>this is medicin</h5>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">Diagnosic</h5>

                                    <h5>this is Diagnosic</h5>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold">remark</h5>
                                    <h5>this is remark</h5>
                                </div>
                            </div>



                            <div className="col-md-3">
                                <div className=" ">
                                    <h5 style={{ textDecoration: 'underline', color: '#4154f1' }} className="fw-bold" >Date</h5>
                                    <h5>21/12/1212</h5>
                                </div>
                            </div>
                        </div>










                    </div>




                </div>
            </div>

        </>

    );
};

export default Patpresciptionwithadd;
