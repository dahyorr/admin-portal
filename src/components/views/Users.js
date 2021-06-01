import React from 'react';
import {connect} from 'react-redux'
import { DataGrid } from '@material-ui/data-grid';
import {fetchUsers} from '../../actions'

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'Email', width: 220 },
];

class Users extends React.Component {
    componentDidMount(){
        this.props.fetchUsers()
    }
    render(){
        return(
            <div className="Users view">
                <h1>Manage Users</h1>
                <DataGrid rows={this.props.users} columns={columns} pageSize={10} checkboxSelection autoHeight/>
            </div>
        )
    }
}

const mapStateToProps = ({users}) => ({users})

export default connect(mapStateToProps, {fetchUsers})(Users)