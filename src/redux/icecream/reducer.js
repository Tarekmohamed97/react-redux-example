import {BUY_ICECREAM} from './types'


const icecreamInitialState = {
    numOfIcecreams : 20
}

const icecreamReducer = (state = icecreamInitialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            };

        default:
            return state;
    }
}

export default icecreamReducer