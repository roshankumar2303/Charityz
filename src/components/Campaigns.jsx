import React, { useState, useEffect } from "react";
import axios from 'axios';

import CampaignDesc from "./CampaignDesc";

const Campaigns = () => {
    const [campaigns, setCampaigns ] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3200/campaigns").then((res) => {
            setCampaigns(res.data);
        })
    }, [])

    return <div className="campaigns">
        {
            campaigns.map((campaign, index) => (
                <CampaignDesc
                    key={index}
                    cmpImg={campaign.cmpImg}
                    cmpTitle={campaign.cmpTitle}
                    cmpDesc={campaign.cmpDesc}
                    cmpOrganiser={campaign.cmpOrganiser}
                    cmpTarget={campaign.cmpTarget}
                    cmpCurrent={campaign.cmpCurrent}
                    donorCount={campaign.donorCount}
                    daysLeft={campaign.daysLeft}
                />
            ))
        }
    </div>
}

export default Campaigns;