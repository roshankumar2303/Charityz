import React from "react";

const DonationDesc = (props) => {
    console.log(props)
    return <div className="custom-card container" style={{ marginTop: "40px" }}>
        <div className="row" >
            <div className="col-md-7 p-4">
                <span class="badge bg-primary">Status: {props.status}</span>
                <h3 className="py-4">{props.cmpTitle}</h3>
                <p className="lead">You Donated INR {props.amt}</p>

                <p className="text-muted text-end">Last Updated: {props.lastUpdated}</p>
            </div>
            <div 
            className="col-md-5" 
            style={{ 
                backgroundImage: "linear-gradient(to left, #00000000, #00000000, #ffffffff), url(" + props.cmpImg + ")", 
                backgroundSize: "cover", 
                borderTopRightRadius: "16px" 
            }}
            ></div>
        </div>
        <div className="container py-4">
            {
                props.timeline.map((events, index) => (
                    <div>
                        <span class="badge bg-dark mb-2">{events.time} </span>
                        <p><strong>Update from {events.updateFrom}</strong> - {events.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
}

export default DonationDesc;