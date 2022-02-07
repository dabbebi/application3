export const setDel = (del) => {
    return (dispatch) => {
        dispatch({
            type : "setDel",
            payload : del
        })
    }
}