export function addToFavAction(payload) {
    return {
        type: "ADD_TO_FAV",
        payload
    }
}
export function removeFromFavAction(payload) {
    return {
        type: "REMOVE_FROM_FAV",
        payload
    }
}