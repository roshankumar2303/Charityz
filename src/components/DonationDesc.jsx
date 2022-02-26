import React from "react";

const DonationDesc = (props) => {
    console.log(props)
    return <div className="container my-4">
        <div className="card p-4">
            <div className="row" style={{ backgroundImage: "url(" + props.cmpImg + ")" }}>
                <div className="col-sm-6" style={{backgroundImage:"linear-gradient(to right, #00000000, #00000000,#00000000,#00000000, #ffffffff"}}>
                </div>
                <div className="col-sm-6" style={{ backgroundColor: "white"}}>
                    <span class="badge bg-primary">Status: {props.status}</span>
                    <h3 className="py-4">{props.cmpTitle}</h3>
                    <p className="lead">Donation Amount: {props.amt} INR</p>
                    <p className="text-muted text-end">Last Updated: {props.lastUpdated}</p>
                </div>
            </div>
        </div>
    </div>
}

export default DonationDesc;