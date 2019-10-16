export function userReducer(
    state = {username:null, password: null, phonenumber: null},action) {
    switch (action.type){
        case 'UPDATE_USER_AND_PASS' : {
            return {...state, 
                username: action.payload.username,
                password: action.payload.password,
                phonenumber: action.payload.phonenumber,
            }
        }
        case 'DELETE_USER': {
            return {
                ...state,
                username: null,
                password: null,
                phonenumber: null,
            }
        }
        default :{
            return {...state}
        }
    }
}