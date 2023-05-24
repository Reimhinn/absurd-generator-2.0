import React from 'react'
import "../styles/main-navbar.css"
import add from "../assets/add.png"
import swap from "../assets/swap.png"
import openBox from "../assets/open-box.png"
import homeLogo from "../assets/accueil.png"
import share from "../assets/share.png"
import settings from "../assets/settings.png"
import help from "../assets/help.png"



function MainNavbar() {
  return (
    <div id='main-navbar'>
		<img id='home-logo' src={homeLogo} alt="" />

		<nav>
			<ul>
				<li><img src={add} alt="" /></li>
				<li><img src={swap} alt="" /></li>
				<li><img src={openBox} alt="" /></li>
				<li><img src={share} alt="" /></li>
				<li><img src={settings} alt="" /></li>
				<li><img src={help} alt="" /></li>
			</ul>
		</nav>
	</div>
  )
}

export default MainNavbar