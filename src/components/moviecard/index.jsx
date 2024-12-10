import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavAction, removeFromFavAction } from '../../store/actions/favorite.actions';

function MovieCard({ movie }) {
    const { Year, Poster, Title, imdbID } = movie;

    const dis = useDispatch()
    const { favList } = useSelector(state => state)
    return (
        <div className='p-[20px] rounded-sm border-[2px] shadow '>
            <img src={Poster} alt="" />
            <h2 className='text-[20px] text-[#3467ac]'>{Title}</h2>
            <div className='flex justify-between items-center'>
                <p>Year {Year}</p>
                {
                    favList.find(item => item.imdbID === imdbID) ?
                        <button onClick={() => dis(removeFromFavAction(imdbID))}>
                            <MdFavorite />
                        </button> :
                        <button onClick={() => dis(addToFavAction(movie))}>
                            <MdFavoriteBorder />
                        </button>

                }
            </div>
        </div>
    )
}

export default MovieCard