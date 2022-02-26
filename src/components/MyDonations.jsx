import React from "react";
import myDonations from "../myDonations.json"
import DonationDesc from "./DonationDesc";

const MyDonations = () => {
    return myDonations.map((donation, index) => (
        <DonationDesc
            key={index}
            cmpImg={donation.cmpImg}
            cmpTitle={donation.cmpTitle}
            amt={donation.amt}
            status={donation.status}
            lastUpdated={donation.lastUpdated}
        />
    ))
}

export default MyDonations;