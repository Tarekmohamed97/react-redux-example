import React, {useState} from 'react';
import {connect} from 'react-redux'
import {buyCake_action} from '../redux/index'

function MultipleNumberCakeContainer(props) {

    const [numOfWantedCakes, setNumberOfWantedCakes] = useState(1)

    return (
        <div>
            <h2>The Number of cakes is {props.numberOfCakes} , order multiple cakes here</h2>
            <input type = "text" value = {numOfWantedCakes} onChange = {e => setNumberOfWantedCakes(e.target.value)} />
            <button onClick = {() => props.buyCake_action(numOfWantedCakes)} >Buy {numOfWantedCakes} cakes</button>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake_action: (numOfWantedCakes) => dispatch(buyCake_action(numOfWantedCakes))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultipleNumberCakeContainer)
