import React, { useState, useEffect } from "react";
import axios from "axios";

import DonationDesc from "./DonationDesc";

const MyDonations = () => {
    const [myDonations, setMyDonations] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3200/myDonations").then((res) => {
            setMyDonations(res.data);
        })
    }, [])

    return myDonations.map((donation, index) => (
        <DonationDesc
            key={index}
            cmpImg={donation.cmpImg}
            cmpTitle={donation.cmpTitle}
            amt={donation.amt}
            status={donation.status}
            lastUpdated={donation.lastUpdated}
            timeline={donation.timeline}
        />
    ))
}

export default MyDonations;