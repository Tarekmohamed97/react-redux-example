import {combineReducers} from 'redux';
import cakeReducer from './cakes/reducer';
import icecreamReducer from './icecream/reducer';
import userReducer from './users/reducer'


const rootReducer =  combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: userReducer
})


export default rootReducer