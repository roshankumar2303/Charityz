import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Campaigns from "./Campaigns";
import Navbar from "./Navbar"
import MyDonations from "./MyDonations";
import Login from "./Login";
import Register from "./Register";

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="campaigns" element={<Campaigns />} />
                <Route path="mydonations" element={<MyDonations />}/>
                <Route path="login" element={<Login />} />
                <Route path="login/register" element={<Register />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App;