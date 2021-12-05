import { FETCHING_IMAGE, FETCH_FAILUR, FETCH_SUCCESS } from '../Const';

const initialState = {
    images: [],
    isFetching: false,
    error: false
}

export default function imagesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_IMAGE:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SUCCESS:
            // console.log('reduserState',action.data);
            return {
                ...state,
                isFetching: false,
                images: action.data
            }
        case FETCH_FAILUR:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}