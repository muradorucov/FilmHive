export function moviesReducer(state = [], action) {
    if (action.type === "GET_MOVIES") {
        return [...action.payload]
    }
    return state
}