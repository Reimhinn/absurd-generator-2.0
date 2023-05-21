import React from 'react'
import '../styles/generation-section.css'
import wordGenBg from '../assets/bg mot créé.png'
import { useDispatch, useSelector } from 'react-redux'
import { addPack } from '../redux/store'
import refresh from '../assets/refresh.png'
import favorite from '../assets/ajouter-aux-favoris.png'

function GenerationSection() {

  const dispatch = useDispatch()

  const packs = useSelector(state => state.packs)
  
   
  console.log(packs)
  return (
    <section id='generation-section'>
      <div id='wordGenBg'>
        <img src={wordGenBg} alt="" />
      </div>
      <div id='refresh-fav-container'>
        <img id='refresh-img' src={refresh} alt="" />
        <img id='add-favorite-img' src={favorite} alt="" />
      </div>
      <article id='active-packs-container'>
        
      </article>
       
    </section>
  )
}

export default GenerationSection