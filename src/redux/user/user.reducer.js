
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = ( state = INITIAL_STATE, action ) => {  // state = INITIAL_STATE is a default value; if we don't pass any value to state it will fall back to INITIAL_STATE as value (null is considered a valid value)
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;