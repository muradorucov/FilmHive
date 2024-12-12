import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { getSingleList } from '../../services/save-services'
import MovieCard from '../../components/moviecard'

function SingleList() {
    const [list, setList] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getSingleList(id)
            .then(data => setList(data))
            .catch(err => console.log(err))
    }, [id])
    return (
        <div className='container mx-[auto] mt-[40px]'>
            <div className='flex justify-between items-start'>
                <h1 className='text-[30px] font-bold text-[#2411b4]'>{list.title}</h1>
                <a href={`https://api.whatsapp.com/send?text=${location.href}`} target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.freepik.com/256/2496/2496112.png?semt=ais_hybrid"
                        className='w-[60px] rounded-full' />
                </a>
            </div>
            <div className='grid grid-cols-4 mt-[4rem] gap-[15px]'>
                {list.movies?.map(movie => <MovieCard movie={movie} key={movie.imdbID} />)}
            </div>

        </div>
    )
}

export default SingleList