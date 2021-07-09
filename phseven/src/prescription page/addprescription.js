import React, { useState } from 'react'
import Header from "../landingpage/header";
import Footer from "../landingpage/footer";
import "./addprescription.css"



const Addprescription = () => {
    const [par0, setPar0] = useState("");
    const [par1, setPar1] = useState("");


    const [allentry, setAllentry] = useState([]);

    const addpargroup = (e) => {
        e.preventDefault();

        const newentry = {
            newpar0: par0,
            newpar1: par1,

        };

        // setAllentry([newentry]);
        setAllentry([...allentry, newentry]);


    }



    return (

        <>
            <Header />

            <div className="addprescriptionmaindiv">



                <div className="grid mx-5">

                    <div className="row mx-5 mt-3  medicinesection">
                        <h5 className="text-center py-2 mb-0  border rounded customaddmedicin">Medicine Section</h5>


                        <div className="col-md-12 my-3 mx-0  border border-danger ">
                            <h5 className="text-center py-2 px- mt-0 border rounded customaddmedicin">Add Medicine</h5>
                            <div>
                                <form action="" onSubmit={addpargroup}  >
                                    <div className="row">
                                        <div className="my-3 col-md-8">
                                            <label htmlFor="demail" className="form-label "> <h5>Medicine Name</h5> </label>
                                            <input type="text" className="form-control" id="demail" aria-describedby="emailHelp"
                                                value={par0}
                                                onChange={(e) => setPar0(e.target.value)}
                                            />

                                        </div>
                                        <div className="my-3 col-md-4">
                                            <label htmlFor="demail" className="form-label font-weight-bold"><h5>Remark</h5></label>
                                            <input type="textarea" className="form-control" id="demail" aria-describedby="emailHelp"
                                                value={par1}
                                                onChange={(e) => setPar1(e.target.value)}
                                            />
                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-between">
                                        <button type="submit" className="btn btn-primary my-2 mx-auto">Add</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className="row">

                            {/* <div className="col-md-12  my-3  overflow-auto border border-danger overflow-auto "> */}
                            <div className="col-md-12  my-3  overflow-auto border border-danger  ">

                                <div className="row mx-2 d-flex justify-content-between    align-left">
                                    <div className="col-1  my-2 text-left ">
                                        <h5>No</h5>
                                    </div>
                                    <div className="col-2 my-2 text-left  ">
                                        <h5>Medicine Name</h5>
                                    </div >
                                    <div className="col-2 my-2   text-left ">
                                        <h5>Remark</h5>
                                    </div>

                                </div>

                                <form action=""  >
                                    <div>
                                        {
                                            allentry.map((curelem, ind) => {
                                                return (
                                                    <div >
                                                        <div className="row my-2  border rounded  ">



                                                            <div className="row d-flex justify-content-between    align-left">
                                                                <div className="col-md-2  mx-2  border rounded ">
                                                                    <div>{ind + 1}</div>
                                                                </div>
                                                                <div className="col-md-5  mx-2 border rounded ">
                                                                    <div>{curelem.newpar0}</div>
                                                                </div >
                                                                <div className="col-md-4  mx-2  bg-danger  border rounded ">
                                                                    <div>{curelem.newpar1}</div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>


                                    <div className="d-flex justify-content-between">
                                        <button type="submit" className="btn btn-primary my-3 mx-auto">Submit</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Addprescription;