import { combineReducers, createStore } from "redux";
import { moviesReducer } from "./reducers/movies.reducer";
import { favoriteReducer } from "./reducers/favorite.reducer";
const reducers = combineReducers({
    movies: moviesReducer,
    favList: favoriteReducer
})
export const globalState = createStore(reducers)