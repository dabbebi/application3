export const setData = (data) => {
    return (dispatch) => {
        dispatch({
            type : "setData",
            payload : data
        })
    }
}