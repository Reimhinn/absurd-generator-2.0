import React from 'react'
import '../styles/words-article.css'

function WordsArticle({type}) {
    const placeholder = 'ajouter un ' + type.slice(0, -1);
    const idContainer = type + 'Container'
  return (
    <div className='article-container'>
        <h2>+ {type.toUpperCase()}</h2>
        <input type="text" placeholder={placeholder} />
        <div className='words-container' id={idContainer}>

        </div>
    </div>

  )
}

export default WordsArticle