import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return <div className="container d-flex justify-content-center">
        <div className="custom-card p-4">
            <form>
                <h4 className="mb-4">Login</h4>
                <div className="form-floating my-4">
                    <input type="email" className="form-control" placeholder="Enter E-Mail" id="e-mail" />
                    <label htmlFor="e-mail">E-Mail</label>
                </div>
                <div className="form-floating my-4">
                    <input type="password" className="form-control" placeholder="Enter Password" id="passwd" />
                    <label htmlFor="passwd">Password</label>
                </div>
                <button className="custom-btn my-4 my-auto" style={{width: "100%"}}>Login</button>
            </form>
            <div className="row mt-4">
                <div className="col-sm-6">
                <a href="#" style={{color:"#DD4A48", textDecoration:"none"}}>Forgot Password</a>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                <Link style={{color:"#DD4A48", textDecoration:"none"}} to="register">Register</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Login;