export const setErr = (err) => {
    return (dispatch) => {
        dispatch({
            type : "setErr",
            payload : err
        })
    }
}