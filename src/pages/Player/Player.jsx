import './Player.css'
import React, { useState,useEffect } from 'react'
import back_icon from '../../assets/back_arrow_icon.png'
import { useParams,useNavigate } from 'react-router-dom'
const Player = () => {
  let {id}=useParams();
  const nav =useNavigate();
  const [apiData,setApiData]=useState({});
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDllN2ZjNTNkNjI4ZDdlMjEzYzQ5YmEwY2FmNDc0NyIsIm5iZiI6MTczMDcyNTQzNi4yNDE3OTYzLCJzdWIiOiI2NzI4YzQ4NjM5NDBjMTIwMmZmN2NmYjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FfIN9fFN1a_L5DGddfPcLDSNkHP0Yy2SScyKp3el9HI'
  }
};
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(json => setApiData(json.results[0]))
    .catch(err => console.error(err));   
  },[])
  return (
    <div className='player'>
      <img src={back_icon} alt="" className='back-icon' onClick={()=>{
        nav('/')
      }}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0"></iframe>
      <div className="details">
        <p className="pub">{apiData.published_at}</p>
        <p className="type">{apiData.name}</p>
      </div>
    </div>
  )
}

export default Player