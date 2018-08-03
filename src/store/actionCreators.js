import { user } from './actionTypes'

export const getUser = user => ({
    type: user.GET_USER,
    user
});

export const removeUser = () => ({
    type: user.REMOVE_USER
})