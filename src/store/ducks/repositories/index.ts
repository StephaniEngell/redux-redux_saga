import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes, Repository } from "./types";

const INITIAL_STATE: RepositoriesState = {
    data: [],
    error: false,
    loading: false,
}



const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { 
                ...state, loading: true 
            }
        case RepositoriesTypes.LOAD_SUCCES:
            return { 
                ...state, loading: false, error: false, data: action.payload as Repository[], 
            }
        case RepositoriesTypes.LOAD_FAILUDE:
            return { 
                ...state, loading: false, error: true, data: [] 
            }
        default:
            return state
    }
}

export default reducer