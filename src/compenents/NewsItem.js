
import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  return (
    <>
      <div className="card my-5 news-item">
        <Link to={props.newsUrl} target="_blank" className="articleUrl">
          <p className="btn sourceStyle">{props.source}</p>
          <img src={props.url} className="card-img-top" alt="." style={{ height: '14rem' }} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <p className="card-text-top"><small className="text-muted">Author: {!props.author ? "Unknown" : props.author}</small></p>
            <p className="card-text-bottom"><small className="text-muted">Published at : {props.date.toGMTString().slice(0, 17)}</small></p>
          </div>
        </Link>
      </div>
    </>
  )
}
