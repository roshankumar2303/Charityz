import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <div>
        <div className="container">
            <div className="row" style={{ height: "70vh" }}>
                <div className="col-md-4 col-sm-6 d-flex flex-column justify-content-center">
                    <h1 className="display-4">Donate for the <br></br><strong>Needy</strong></h1>
                    <div className="my-4">
                        <button className="custom-btn">
                            <Link style={{color:"white", textDecoration:"none"}} to="campaigns">Donate</Link>   
                        </button>
                    </div>
                </div>
                <div className="col-md-8 col-sm-6 d-flex flex-column justify-content-center">
                    <img style={{ width: "100%" }} src="images/cover_bg_1.jpg" alt="cover-bg-1" />
                </div>
            </div>
        </div>

        <div style={{ backgroundColor: "#EEEEEE", color: "white" }}>
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-4">
                        <div className="custom-card m-2" style={{ minWidth: "18rem", color: "black" }}>
                            <div className="card-body">
                                <h5 className="card-title">About Us</h5>
                                <p className="card-text">Some text here</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="custom-card m-2" style={{ minWidth: "18rem", color: "black" }}>
                            <div className="card-body">
                                <h5 className="card-title">About Us</h5>
                                <p className="card-text">Some text here</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="custom-card m-2" style={{ minWidth: "18rem", color: "black" }}>
                            <div className="card-body">
                                <h5 className="card-title">About Us</h5>
                                <p className="card-text">Some text here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ backgroundColor: "#DD4A48", color: "white" }}>
            <div className="d-flex py-4 justify-content-center">
                <p className="lead m-0">© Team SA-02, 2022</p>
            </div>
        </div>
    </div>
    
}

export default Home;