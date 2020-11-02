import React from 'react';
import {connect} from 'react-redux'
import {buyIcecream_action} from '../redux/index'

function IcecreamContainer(props) {
    return (
        <div>
            <h2>The Number of icecream is {props.numOfIcecreams} </h2>
            <button onClick = {props.buyIcecream_action} >Buy icecream</button>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream_action: () => dispatch(buyIcecream_action())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IcecreamContainer)
