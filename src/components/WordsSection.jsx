import React from 'react'
import "../styles/words-section.css"
import WordsArticle from './WordsArticle'

function WordsSection() {
  return (
    <section id='words-section'>
      <h1 id='main-title'><span id='A-maj'>A</span>BSURD GENERATO<span>R</span></h1>
      <div id='all-articles-container'>
        <article>
          <WordsArticle type='verbes' />
        </article>
        <article>
          <WordsArticle type='noms' /> 
        </article>
        <article>
          <WordsArticle type='compléments' /> 
        </article>
      </div>
    </section>
  )
}

export default WordsSection