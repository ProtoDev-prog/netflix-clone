import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';
const TitleCards = ({title,category}) => {
  const [apiData,setApiData]=useState([]);
  const url = `https://api.themoviedb.org/3/movie/${category?category:"popular"}?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDllN2ZjNTNkNjI4ZDdlMjEzYzQ5YmEwY2FmNDc0NyIsIm5iZiI6MTczMDcyNTQzNi4yNDE3OTYzLCJzdWIiOiI2NzI4YzQ4NjM5NDBjMTIwMmZmN2NmYjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FfIN9fFN1a_L5DGddfPcLDSNkHP0Yy2SScyKp3el9HI'
  }
};
  useEffect(()=>{
    fetch(url, options)
    .then(res => res.json())
    .then(json => setApiData(json.results))
    .catch(err => console.error(err));   
  },[])
  return (
    <div className='card-container'>
      <h2>{title?title:"Popular Shows"}</h2>
      <div className="cards">
        {apiData.map((ele)=>{
          return(
            <Link to={'/player/'+ele.id} className="card" key={ele.id}>
            <img src={`https://image.tmdb.org/t/p/w185${ele.backdrop_path}`} alt="" />
            <p>{ele.original_title}</p>
          </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards