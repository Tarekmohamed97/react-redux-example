import {createStore} from 'redux'
import cakeReduer from './cakes/reducer'

const store = createStore(cakeReduer);


export default store