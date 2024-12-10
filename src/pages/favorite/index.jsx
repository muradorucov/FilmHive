import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/moviecard'

function Favorite() {

    const { favList } = useSelector(state => state)
    return (
        <div className='container mx-[auto]'>
            <div className='grid grid-cols-4 mt-[4rem] gap-[15px]'>
                {
                    favList.length ? favList.map(movie => <MovieCard movie={movie} />) : null
                }
            </div>

        </div >
    )
}

export default Favorite