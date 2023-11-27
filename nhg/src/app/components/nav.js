

export default function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="nav-icon">
                <a className="navbar-brand" href="/home">
                    { /* add logo here when completed */ }
                </a>
            </div>


            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/service">Request a Service</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/volunteer">Volunteer</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/donate">Donate</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}