export function updateUser (username, password, phonenumber) {
    return{
        type: 'UPDATE_USER_AND_PASS',
        payload: {
            username, password, phonenumber
        }
    }
}

export function deleteUser(){
    return{type: 'DELETE_USER'}
}