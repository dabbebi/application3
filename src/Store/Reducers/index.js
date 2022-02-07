import { combineReducers } from "redux";
import name from "./nameReducer";
import post from "./postReducer";
import isPend from "./isPendReducer";
import data from "./dataReducer";
import error from "./errorReducer";
import isPending from "./isPendingReducer";
import err from "./errReducer";
import del from "./delReducer";
const reducers = combineReducers({
    name : name,
    post : post,
    isPend : isPend,
    data : data,
    error : error,
    isPending : isPending,
    err : err,
    del : del
});

export default reducers;