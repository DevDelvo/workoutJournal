import axios from 'axios'
import history from '../history'
import { getUser, removeUser } from './actionCreators';

export const me = () => {
    axios
    .get('/auth/me')
    .then(res => dispatchEvent(getUser(res.data || {})))
    .catch(err => console.log(err));
}

export const auth = (email, password, method) => dispatch => {
    axios 
    .post(`auth/${method}`, { email, password })
    .then(
        res => {
            dispatch(getUser(res.data));
            history.push('/profile')
        },
        authError => {
            dispatch(getUser({ error: authError }));
        }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));
}

export const logOut = () => dispatch => {
    axios
    .post('auth/logout')
    .then(() => {
        dispatch(removeUser());
        history.push('/login');
    })
    .catch(err => console.log(err));
}