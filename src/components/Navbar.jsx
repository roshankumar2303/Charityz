import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link className="navbar-brand" to="/">CharityZ</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="campaigns">Campaigns</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="mydonations">My Donations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Join us/Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>
}

export default Navbar;