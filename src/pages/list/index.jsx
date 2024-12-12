import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

export default function List() {

    const [myList, setMyList] = useState([])

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("myList"))
        console.log(localData);

        if (localData) {
            setMyList(localData)
        }
    }, [])

    const deleteList = (id) => {
        localStorage.setItem("myList", JSON.stringify(myList.filter(list => list.id !== id)))
        setMyList(myList.filter(list => list.id !== id))
    }

    console.log(myList);

    return (
        <div className='container mx-[auto] mt-[40px]'>
            {
                myList.map(list => <div className='bg-[#ffffffe9] border-[1px] shadow-lg px-[30px] py-[15px] flex justify-between mb-[20px]'>
                    <Link to={`${list.id}`}>{list.title}</Link>
                    <button className='bg-[#f31515] py-[6px] px-[30px]'
                        onClick={() => deleteList(list.id)}>delete</button>
                </div>)
            }
        </div>
    )
}
