export const setError = (error) => {
    return (dispatch) => {
        dispatch({
            type : "setError",
            payload : error
        })
    }
}