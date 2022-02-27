import React from "react";

const Register = () => {
    return <div className="container d-flex justify-content-center">
        <div className="custom-card p-4">
            <form>
                <h4 className="mb-4">Register</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input type="string" className="form-control" placeholder="Enter First Name" id="fname" />
                            <label htmlFor="fname">First Name</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input type="string" className="form-control" placeholder="Enter Last Name" id="lname" />
                            <label htmlFor="lname">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="form-floating my-4">
                    <input type="string" className="form-control" placeholder="Enter Phone Number" id="phn" />
                    <label htmlFor="phn">Phone Number</label>
                </div>
                <div className="form-floating my-4">
                    <input type="email" className="form-control" placeholder="Enter E-Mail" id="e-mail" />
                    <label htmlFor="e-mail">E-Mail</label>
                </div>
                <div className="form-floating my-4">
                    <input type="password" className="form-control" placeholder="Enter Password" id="newPwd" />
                    <label htmlFor="newPwd">Enter Password</label>
                </div>
                <div className="form-floating my-4">
                    <input type="password" className="form-control" placeholder="Confirm Password" id="confirmPwd" />
                    <label htmlFor="confirmPwd">Confirm Password</label>
                </div>
                <button className="custom-btn my-4 my-auto" style={{ width: "100%" }}>Register</button>
            </form>
        </div>
    </div>
}

export default Register;