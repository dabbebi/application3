const del = (state = false, action) => {
    switch(action.type) {
        case "setDel" :
            return action.payload;
        default :
            return state;
    }
}

export default del;