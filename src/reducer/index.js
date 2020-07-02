import { combineReducers } from 'redux';

const dataReducer = (state = {
    token: {},
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case 'GET_TOKEN':
            return { ...state, token: action.token };
        case 'SAVE_TOKEN':
            return { ...state, token: action.token };
        case 'REMOVE_TOKEN':
            return { ...state, token: action.token };
        case 'LOADING':
            return { ...state, loading: action.isLoading };
        case 'ERROR':
            return { ...state, error: action.error };
        case 'LIST_DATA':
            return { ...state, listData: action.listData };
        case 'LIST_ITEM_DATA':
            const item = action.item
            return { ...state, item };
        default:
            return state;
    }
};

export default combineReducers({
    dataReducer
})