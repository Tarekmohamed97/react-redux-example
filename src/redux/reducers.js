import {combineReducers} from 'redux';
import cakeReducer from './cakes/reducer';
import icecreamReducer from './icecream/reducer';


const rootReducer =  combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})


export default rootReducer