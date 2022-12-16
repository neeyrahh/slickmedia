import React, { useState, useEffect } from 'react'
import { movieList } from '../../utils/constants'
import Axios from 'axios'
import './home.css'


const Home = () => {
    const [image, setImage] = useState([]);
  
  
    const baseUrl = `https://api.ruubby.com/api/v1/profile`;
  
   
    const movieImage = (e) => {
     
      Axios.get(
        baseUrl,
        
      )
        .then(function (response) {
        //  console.log(response);
         const data = response.data.data;
         setImage(data)
        })
        .catch(function (error) {
         console.log(error);
        
        });
    };
    useEffect(() => {
      movieImage();
      }, []);
  return (
    <>
        <div className='hero'>
            <h1>Watch <br/> Something <br/> Incredible</h1>
        </div>

        <section className='search'>
            <label>Search</label>
            <input type='text'/>
        </section>

        <section className='movie-box'>
            <span>$[Movie category Name]</span>
            <div className='movie-card-container'>
                {movieList.map((movie) => (
                <div key={movie.id} className='movie-card'>
                    <span key={movie.id}>{movie.name}</span>
                </div>
                ))}
            </div>
        </section>

        <section className='movie-box'>
            <span>$[Movie category Name]</span>
            <div className='movie-card-container'>
                {movieList.map((movie) => (
                <div key={movie.id} className='movie-card'>
                    <span key={movie.id}>{movie.name}</span>
                </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Home