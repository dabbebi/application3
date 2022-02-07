const error = (state = "", action) => {
    switch(action.type) {
        case "setError" :
            return action.payload;
        default :
            return state;
    }
}

export default error;