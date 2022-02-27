import React from "react";
import campaigns from "../campaigns.json"
import CampaignDesc from "./CampaignDesc";

const Campaigns = () => {
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