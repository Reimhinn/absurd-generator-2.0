import React from 'react'
import '../styles/active-packs.css'
import openBox from '../assets/open-box.png'
import { useSelector } from 'react-redux'

function ActivePacks() {

    // const ActivePacks = useSelector((state) => state.packs.active)


  return (
    <article className='generation-footer-articles' id='active-packs-container'>
        <header>
					<img src={openBox} alt="" />
					<h2>PACKS ACTIFS</h2>
        </header>
        <ul>
					<li className='active-packs'>mots ajoutéffffffs</li>
					<li className='active-packs'>mots ajoutés</li>
					<li className='active-packs'>mots ajoutéfs</li>
					<li className='active-packs'>mots ajoutés</li>
					<li className='active-packs'>mots ajoutffffffffffés</li>
					<li className='active-packs'>mots ajoufftés</li>
					<li className='active-packs'>mots ajoutés</li>

        </ul>
      
    </article>
  )
}

export default ActivePacks