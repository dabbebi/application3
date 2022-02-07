export const setPost = (post) => {
    return (dispatch) => {
        dispatch({
            type : "setPost",
            payload : post
        })
    }
}
