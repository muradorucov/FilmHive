import MovieCard from '../moviecard'
import { useSelector } from 'react-redux'

function Movies() {

    const { movies } = useSelector(state => state)


    return (
        <div className='grid grid-cols-4 mt-[4rem] gap-[15px]'>
            {
                movies.length ? movies.map(movie => <MovieCard movie={movie} key={movie.imdbID} />) : <p className='text-[35px] text-[#34565c]'>Movies Not Found</p>
            }
        </div>
    )
}

export default Movies