import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black px-5 border-bottom border-secondary">
			<a className="navbar-brand fw-bold" href="#">
				Azteca
			</a>
			
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">Home</a>
					<a className="nav-item nav-link" href="#">About</a>
					<a className="nav-item nav-link" href="#">Services</a>
					<a className="nav-item nav-link" href="#">Contact</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;