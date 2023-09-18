import React from "react";
// import axios from "axios";
import Link from "next/link";
import "../../styles/navbar.css";
// import AmericanTigersLogo from "../../../public/American-Tigers-Logo.png";
import AmericanTigersLogo from "../../../public/ATI_Transparent_Logo.png";
import Image from "next/image";

function Navbar() {
	return (
		<header className="header">
			<nav className="navbar">
				<div className="navbar-logo">
					{/* <Image src="/American-Tigers-Logo.png" width={160} height={140} alt="logo"/> */}
					<img className="ati-logo" alt="ati-logo" src={AmericanTigersLogo}/>
				</div>
				<ul className="navbar-links">
					<li className="nav-link">
						<Link href="/">Home</Link>
					</li>
					<li className="nav-link">
						<Link href="/">About</Link>
					</li>
					<li className="nav-link">
						<Link href="/">Staff</Link>
					</li>
					<li className="nav-link">
						<Link href="/">Location</Link>
					</li>
					<li className="nav-link">
						<Link href="/">Class Schedule</Link>
					</li>
					<li className="nav-link">
						<Link href="/">Contact Us</Link>
					</li>
				</ul>
			</nav>
		</header>

	)
}

export default Navbar;

