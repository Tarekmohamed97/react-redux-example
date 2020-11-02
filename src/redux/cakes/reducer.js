import {BUY_CAKE} from './types'

const initialState = {
    numberOfCakes : 10
}

const cakeReduer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes : state.numberOfCakes - 1
            }
        
        default:
            return state;
    }
}

export default cakeReduer;