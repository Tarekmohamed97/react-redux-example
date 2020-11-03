import {BUY_CAKE} from './types'


export const buyCake_action = (numbOfWantedCakes = 1) => {
    return {
        type: BUY_CAKE,
        payload: numbOfWantedCakes
    }
}