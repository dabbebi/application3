export const setIsPending = (isPending) => {
    return (dispatch) => {
        dispatch({
            type : "setIsPending",
            payload : isPending
        })
    }
}