import React from "react";

const DonationDesc = (props) => {
    console.log(props)
    return <div className="custom-card container" style={{ marginTop: "40px" }}>
        <div className="row" style={{ backgroundImage: "url(" + props.cmpImg + ")", backgroundSize: "contain", borderRadius: "16px" }}>
            <div className="col-md-5" style={{ backgroundImage: "linear-gradient(to right, #00000000, #00000000, #ffffffff)" }}>
            </div>
            <div className="col-md-7 p-4" style={{ backgroundColor: "white", borderTopRightRadius: "16px", borderBottomRightRadius: "16px" }}>
                <span class="badge bg-primary">Status: {props.status}</span>
                <h3 className="py-4">{props.cmpTitle}</h3>
                <p className="lead">You Donated INR {props.amt}</p>
                {
                    props.timeline.map((events, index) => (
                        <div>
                            <span class="badge bg-dark mb-2">{events.time}</span>
                            <p>{events.desc}</p>
                        </div>
                    ))
                }
                <p className="text-muted text-end">Last Updated: {props.lastUpdated}</p>
            </div>
        </div>
    </div>
}

export default DonationDesc;