import React from 'react'
import heart from '../assets/favori.png'

export default function FavoritesGenerations() {
  return (
    <article className='generation-footer-articles' id='favorites-generations'>
        <header>
            <img src={heart} alt="" />
            <h2>FAVORIS</h2>
        </header>
    </article>
  )
}
