function Header() {
    return (
        <>
            {/* Top Contact Bar */}
            <div className="rsp-topbar">
                <div className="container">
                    <div className="rsp-topbar-inner">

                        <div className="rsp-contact-info">

                            {/* Phone */}
                            <a
                                href="tel:+916290423926"
                                className="rsp-contact-link"
                                aria-label="Call R.S.P Enterprise"
                            >
                                <i className="bi bi-telephone-fill"></i>
                                <span>+91 6290423926</span>
                            </a>


                            {/* Email */}
                            <a
                                href="mailto:rspenterprise2002@gmail.com"
                                className="rsp-contact-link"
                                aria-label="Email R.S.P Enterprise"
                            >
                                <i className="bi bi-envelope-fill"></i>
                                <span>rspenterprise2002@gmail.com</span>
                            </a>

                        </div>


                        {/* Address */}
                        <a
                            href="https://maps.app.goo.gl/6huWgZibAiKDdguW7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rsp-location"
                            aria-label="Open R.S.P Enterprise location in Google Maps"
                        >
                            <i className="bi bi-geo-alt-fill"></i>

                            <span>
                                Rabindra Nagar, Alipore, Nimta,
                                North Dumdum, West Bengal 700049
                            </span>
                        </a>

                    </div>
                </div>
            </div>


            {/* Main Navigation */}
            <header className="rsp-header">

                <div className="container">

                    <nav className="navbar navbar-expand-lg">

                        {/* Logo */}
                        <a
                            className="navbar-brand rsp-brand"
                            href="#home"
                            aria-label="R.S.P Enterprise Home"
                        >
                            <span className="rsp-brand-main">
                                R.S.P
                            </span>

                            <span className="rsp-brand-sub">
                                ENTERPRISE
                            </span>
                        </a>


                        {/* Mobile Menu Button */}
                        <button
                            className="navbar-toggler rsp-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#rspNavbar"
                            aria-controls="rspNavbar"
                            aria-expanded="false"
                            aria-label="Open navigation menu"
                        >
                            <i className="bi bi-list"></i>
                        </button>


                        {/* Navigation Links */}
                        <div
                            className="collapse navbar-collapse"
                            id="rspNavbar"
                        >

                            <ul className="navbar-nav ms-auto align-items-lg-center">

                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="#home"
                                    >
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#about"
                                    >
                                        About
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#products"
                                    >
                                        Products
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#projects"
                                    >
                                        Projects
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#gallery"
                                    >
                                        Gallery
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#contact"
                                    >
                                        Contact
                                    </a>
                                </li>

                                <li className="nav-item ms-lg-3 mt-3 mt-lg-0">

                                    <a
                                        href="#contact"
                                        className="rsp-quote-btn"
                                    >
                                        Get Quote
                                        <i className="bi bi-arrow-right"></i>
                                    </a>

                                </li>

                            </ul>

                        </div>

                    </nav>

                </div>

            </header>
        </>
    );
}

export default Header;