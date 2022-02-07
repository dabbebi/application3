const err = (state = "", action) => {
    switch(action.type) {
        case "setErr" :
            return action.payload;
        default :
            return state;
    }
}

export default err;