export const setIsPend = (isPend) => {
    return (dispatch) => {
        dispatch({
            type : "setIsPend",
            payload : isPend
        })
    }
}
