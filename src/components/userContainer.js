import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux'

function UserContainer({fetchUsers, users}) {

    useEffect(() => {
        fetchUsers()
    }, [])

    return users.loading ? (
        <h2>Still loading ... </h2>
         ) : users.error ? (
            <h2>{users.error} </h2> ) : (
                <div>
                    <h2>userList</h2>
                    <div>
                        {
                            users && users.data.map(user => <p>{user.name}</p>)
                        }
                    </div>
                </div>
        )
}


const mapStateToProps = state => {
    return {
        users : state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)

