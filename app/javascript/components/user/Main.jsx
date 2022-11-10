import React from 'react'
import { Users } from '../../api/main';
import { Alerts } from '../../helpers/main';
import imageUserInfo from '../../../assets/images/UserInfo.png'

class Main extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            edit: false
        };
    }

    componentDidMount() {
        this.loadUser();
    }

    openEdit = () => { this.setState({ edit: true }); }
    closeEdit = () => { this.setState({ edit: false }); }

    loadUser = () => {
        Users.list().then(
          (cResp) => { this.setState({ id: cResp.id,
                                        firstname: cResp.firstname,
                                        lastname: cResp.lastname,
                                        email: cResp.email,
                                        phone: cResp.phone }); },
          () => { Alerts.error("User didn't load correctly"); }
        );
    }

    renderUsersEdit() {
        if(this.state.edit === false) { return ''; }
        return(
            <div class="Details flex flex-space-between">
                <div>
                    <div class="flex ">
                        <h1>Edit user</h1> &nbsp; <a onClick={() => this.closeEdit()}><i className="fa fa-edit" /></a>
                    </div>
                    <div class="">
                        <p>Firstname: {this.state.firstname}</p>
                    </div>
                </div>
                <div>
                    <img src={imageUserInfo} alt="Image User Info"/>
                </div>
            </div>
        )
    }

    renderUsers() {
        if(this.state.edit === true) { return ''; }
        return (
            <div class="Details flex flex-space-between">
                <div>
                    <div class="flex ">
                        <h1>User info</h1> &nbsp; <a onClick={() => this.openEdit()}><i className="fa fa-edit" /></a>
                    </div>
                    <div class="">
                        <p>Firstname: {this.state.firstname}</p>
                    </div>
                    <div>
                        <p>Lastname: {this.state.lastname}</p>
                    </div>
                    <div>
                        <p>Email: {this.state.email}</p>
                    </div>
                    <div>
                        <p>Phone number: {this.state.phone/* == ""? "No phone number": this.state.phone*/}</p>
                    </div>
                </div>
                <div>
                    <img src={imageUserInfo} alt="Image User Info"/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='container wide'>
                {this.renderUsersEdit()}
                {this.renderUsers()}
            </div>
        )
    }
}

export default Main;