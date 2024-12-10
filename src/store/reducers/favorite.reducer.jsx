export function favoriteReducer(state = [], action) {
    if (action.type === "ADD_TO_FAV") {
        return [...state, action.payload]
    } else if (action.type === "REMOVE_FROM_FAV") {
        return state.filter(movie => movie.imdbID !== action.payload)
    }
    return state
}