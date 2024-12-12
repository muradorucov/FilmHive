import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/moviecard'
import { saveList } from '../../services/save-services'
import { saveFormValidation } from '../../validation/saveform'

function Favorite() {

    const title = useRef(null)
    const [erros, setErros] = useState({})
    // const [myList, setMyList] = useState([])

    const { favList } = useSelector(state => state)

    // useEffect(() => {



    // }, [])


    const formSubmit = async (e) => {
        e.preventDefault()

        let localData = JSON.parse(localStorage.getItem("myList"));
        const { schema } = saveFormValidation();



        try {
            await schema.validate({
                title: title.current.value
            }, { abortEarly: false });

            const data = await saveList({
                title: title.current.value,
                movies: favList
            })

            localData ? localStorage.setItem("myList", JSON.stringify([...localData, data]))
                : localStorage.setItem("myList", JSON.stringify([data]))
            alert("Save List")

        } catch (err) {
            if (err.name === "ValidationError") {
                const validationErrors = {};
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                setErros(validationErrors);
            }
            console.log(erros);

        }


    }
    return (
        <div className='container mx-[auto]'>
            <form className=' mt-[4rem] flex gap-[20px] items-start' onSubmit={formSubmit}>
                <div className='w-[80%]'>
                    <input type="text" placeholder='list title'
                        ref={title}
                        className='border-[2px] block rounded-sm w-[100%]  px-[30px] py-[10px] outline-none' />

                    {erros.title ? <p className='text-red-700'>{erros.title}</p> : null}
                </div>
                <button className='bg-[#354abc] px-[30px] py-[10px] text-[#fff] w-[20%]'>Save</button>
            </form>
            <div className='grid grid-cols-4 mt-[2rem] gap-[15px]'>
                {
                    favList.length ? favList.map(movie => <MovieCard movie={movie} />) : null
                }
            </div>

        </div >
    )
}

export default Favorite