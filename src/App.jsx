import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router'
import { routers } from './routes'
import { Provider, useDispatch } from 'react-redux'
import { globalState } from './store'
import { getMoviesSearch } from './services/movies-services'
import { moviesAction } from './store/actions/movies.actions'

function App() {
  const dis = useDispatch()

  useEffect(() => {
    getMoviesSearch()
      .then(data => dis(moviesAction(data.Search)))
      .catch(err => console.log("MOvies Comp", err))
  }, [])
  return (

    <RouterProvider router={routers} />
  )
}

export default App