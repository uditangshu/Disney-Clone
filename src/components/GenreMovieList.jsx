import React from 'react'
import GenreList from '../source/GenreList'
import MovieList from './Movielist'

function GenreMovieList() {
  return (
    <div>
        {GenreList.genre.map((item,index)=>index<5&&(
            <div className='w-screen p-8 px-5 md:px-10'>
                <h2 className='text-[15px] md:text-[20px] text-white 
                font-bold'>{item.name}
                </h2>
                <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList