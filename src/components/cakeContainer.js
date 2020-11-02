import React from 'react';
import {connect} from 'react-redux'
import {buyCake_action} from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h2>The Number of cakes is {props.numberOfCakes} </h2>
            <button onClick = {props.buyCake_action} >Buy cakes</button>
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
        buyCake_action: () => dispatch(buyCake_action())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)
