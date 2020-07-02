import AsyncStorage from '@react-native-community/async-storage'
export const getToken = (token) => ({
    type: 'GET_TOKEN',
    token,
});

export const saveToken = token => ({
    type: 'SAVE_TOKEN',
    token
});

export const removeToken = () => ({
    type: 'REMOVE_TOKEN',
});

export const loading = bool => ({
    type: 'LOADING',
    isLoading: bool,
});

export const error = error => ({
    type: 'ERROR',
    error,
});

export const listItem = (item) => ({
    type: 'LIST_ITEM_DATA',
    item: item,
});

export const getUserToken = async () => dispatch => {
    AsyncStorage.getItem('userToken')
        .then((data) => {
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(error(err.message || 'ERROR'));
        })
}

export const saveUserToken = data => dispatch =>
    AsyncStorage.setItem('userToken', data)
        .then((data) => {
            dispatch(saveToken(data));
        })
        .catch((err) => {
            dispatch(error(err.message || 'ERROR'));
        })

export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem('userToken')
        .then((data) => {
            dispatch(removeToken(data));
        })
        .catch((err) => {
            dispatch(error(err.message || 'ERROR'));
        })
