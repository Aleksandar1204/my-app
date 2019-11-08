export function weatherReducer (state = {curweather: [],forweather:[]}, action) {
    switch(action.type) {
        case 'CHECK_WEATHER': {
            return {...state, 
                curweather: [action.payload.current] ,
                forweather: [action.payload.forecast]
            
            } 
        }
        default : {
            return {...state}
        }
    }
}



