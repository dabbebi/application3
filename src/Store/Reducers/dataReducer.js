const data = (state = null, action) => {
    switch(action.type) {
        case "setData" :
            return action.payload;
        default :
            return state;
    }
}

export default data;