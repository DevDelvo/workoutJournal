//initial state
const defaultUser = {};

export default function(state = defaultUser, action) {
    switch (action.type) {
        case GET_USER: 
            return action.user;
        case REMOVE_USER:
            return defaultUser;
        default: 
            return state;
    }
}
