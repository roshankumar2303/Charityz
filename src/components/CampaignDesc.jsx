import React from "react";

const CampaignDesc = (props) => {
    const progress = ((props.cmpCurrent / props.cmpTarget) * 100) + "%";
    return <div className="container my-4">
        <div className="card p-4">
            <div className="row" style={{ backgroundImage: "url(" + props.cmpImg + ")" }}>
                <div className="col-sm-6" style={{ backgroundImage: "linear-gradient(to right, #00000000, #00000000,#00000000,#00000000, #ffffffff" }}>
                </div>
                <div className="col-sm-6" style={{ backgroundColor: "white" }}>
                    <h3 className="py-4">{props.cmpTitle}</h3>
                    <p>{props.cmpDesc}</p>
                    <p className="lead">{props.cmpCurrent} raised out of {props.cmpTarget}</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: progress }} aria-valuenow={props.cmpCurrent} aria-valuemin="0" aria-valuemax={props.cmpTarget}></div>
                    </div>
                    <p>Days Left: {props.daysLeft} days</p>
                    <p>Contributors: {props.donorCount}</p>



                    <form>
                        <div className="d-flex">
                        <div className="form-floating">
                            <input type="string" className="form-control" placeholder="Enter amount" id="amtInput" />
                            <label htmlFor="amtInput">Amount</label>
                        </div>
                        <button className="custom-btn mx-4 my-auto">Donate</button>
                        </div>
                    </form>




                    
                </div>
            </div>
        </div>
    </div>
}

export default CampaignDesc