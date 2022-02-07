const isPend = (state = false, action) => {
    switch(action.type) {
        case "setIsPend" :
            return action.payload;
        default :
            return state;
    }
}

export default isPend;