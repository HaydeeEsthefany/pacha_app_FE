import React from 'react';
import { Link } from "react-router-dom";
import logo from './PACHA.png';
import './Menu.css';
import {NavLink} from "react-router-dom";

class Menu extends React.Component {
  render() {
  	return (
		  
  		<nav className="principal navbar navbar-expand-lg navbar-light fixed-top bg-light">

		   <a href="/">             
		   		<img src={logo} alt="logo" height="" width="150" /> 
			</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">			  
			        <li className="nav-item">
			        </li>
			    </ul>

			    
				<div class="dropdown">
                <button class="opciones btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Comunidad
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<NavLink to="/login" className="nav-link">Ingreso </NavLink>
					<NavLink to="/registro" className="nav-link">Registro </NavLink>
					<NavLink to="/nosotros" className="nav-link">Nosotros </NavLink>
                  
                </div>
                </div>
		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;