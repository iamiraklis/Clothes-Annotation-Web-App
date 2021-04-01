import React, { Component } from 'react';
import UploadFile from './UploadFile'
import AdminSideNav from './AdminSideNav';
import UserTable from './UserTable'

class AdminDashboard extends Component { 
    
    state ={
        currentMode : 'uploadComponent'
    };
    getComponents(currentMode) {
        const components ={
            uploadComponent: <UploadFile/>,
            usersComponent: null,
            settingsComponent: null
        };
        return components[currentMode];
    }
    toggleComponent = (currentMode) => {
        this.setState({currentMode: currentMode});
    }
    render(){
        return (
            <div>
                <h1>
                Admin Dashboard Page
                </h1>
                <br/>
                <AdminSideNav toggleComponent={this.toggleComponent}/>
                <div>
                    {this.getComponents(this.state.currentMode)}
                </div>

                <UserTable history={this.props.history}/>

            </div>
        )
    }
}

export default AdminDashboard
