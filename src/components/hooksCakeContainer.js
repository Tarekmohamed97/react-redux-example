import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake_action } from '../redux'

function HooksCakeContainer() {

    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>The number of cakes - {numberOfCakes} </h2>
            <button onClick = {() => dispatch(buyCake_action())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
