const post = (state = "", action) => {
    switch(action.type) {
        case "setPost" :
            return action.payload;
        default :
            return state;
    }
}

export default post;