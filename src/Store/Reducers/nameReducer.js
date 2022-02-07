const name = (state = "", action) => {
    switch(action.type) {
        case "setName" :
            return action.payload;
        default :
            return state;
    }
}

export default name;