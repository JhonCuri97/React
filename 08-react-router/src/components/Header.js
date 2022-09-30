import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<NavLink exact className="navbar-brand" to={'/'}>
					Mi App
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								activeClassName={'active'}
								// activeStyle={{ backgroundColor: 'red' }}
								to="/nosotros"
								className="nav-link"
							>
								Nosotros
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName={'active'}
								to="/portafolio"
								className="nav-link"
							>
								Portafolio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName={'active'}
								to="/contacto"
								className="nav-link"
							>
								Contacto
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
