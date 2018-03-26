import React from 'react'

const Article = props => {
  return (
    <article>
      <img alt={props.alt} src={props.img}/>
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
      <div>
        <button>VER MÁS</button>
      </div>
    </article>
  )
}

export default Article