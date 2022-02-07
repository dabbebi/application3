export const setName = (name) => {
    return (dispatch) => {
        dispatch({
            type : "setName",
            payload : name
        })
    }
}
