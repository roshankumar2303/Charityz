import React from "react";

const CampaignDesc = (props) => {
    const progress = ((props.cmpCurrent / props.cmpTarget) * 100) + "%";
    return <div className="custom-card container" style={{marginTop:"20px", marginBottom: "20px"}}>
            <div className="row">
                <div 
                className="col-md-6" 
                style={{
                    backgroundImage:"linear-gradient(to right, #00000000, #00000000, #ffffffff), url(" + props.cmpImg + ")", 
                    backgroundSize:"cover", 
                    borderRadius:"16px"
                }}
                ></div>
                <div className="col-md-6 p-4">
                    <h3 className="py-4">{props.cmpTitle}</h3>
                    <p>{props.cmpDesc}</p>
                    <p className="lead">{props.cmpCurrent} raised out of {props.cmpTarget}</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: progress }} aria-valuenow={props.cmpCurrent} aria-valuemin="0" aria-valuemax={props.cmpTarget}></div>
                    </div>
                    <p>{props.daysLeft} Days left | {props.donorCount} Contributors</p>

                    <form className="py-4">
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
}

export default CampaignDesc