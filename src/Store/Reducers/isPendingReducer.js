const isPending = (state = false, action) => {
    switch(action.type) {
        case "setIsPending" :
            return action.payload;
        default :
            return state;
    }
}

export default isPending;