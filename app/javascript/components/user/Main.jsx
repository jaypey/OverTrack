import React from 'react'
import { Users } from '../../api/main';
import { Alerts } from '../../helpers/main';
import FieldErrors from '../shared/FieldErrors';
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
            edit: false,
            errors: {},
            submitted: false
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

    handleErrors = (key, errs) => { this.setState({ errors: Object.assign(this.state.errors, { [key]: errs }) }); }

    handleEmailChange = (e) => { this.setState({ email: e.target.value }); }
    handleFirstnameChange = (e) => { this.setState({ firstname: e.target.value }); }
    handleLastnameChange = (e) => { this.setState({ lastname: e.target.value }); }
    handlePhoneChange = (e) => { this.setState({ phone: e.target.value }); }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        if (Object.values(this.state.errors).flat().length) { return; }
    
        let apiCall = null;
        apiCall = Users.update(this.state.id,
                                {email: this.state.email, 
                                firstname: this.state.firstname, 
                                lastname: this.state.lastname,
                                phone: this.state.phone});
    
        apiCall.then(
          (resp) => { this.loadUser(); this.setState({ edit: false }); },
          (error) => { error.status == 408 ? Alerts.genericConflict('User informations invalid!') : Alerts.genericError(); },
        );
        this.setState({ edit: false });
      }

    renderUsersEdit() {
        if(this.state.edit === false) { return ''; }
        return(
            <div class="Details flex flex-space-between">
                <div>
                    <div class="flex ">
                        <h1>Edit user</h1> &nbsp; <a onClick={() => this.closeEdit()}><i className="fa fa-edit" /></a>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <label className="required">Firstname</label>
                            <input style={{width: "200%"}} type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} />
                            <FieldErrors
                                label="Fisrtname"
                                val={this.state.firstname}
                                validations={{ required: true }}
                                show={this.state.submitted} handleErrors={this.handleErrors}
                            />
                        </div>
                        <div className="input-group">
                            <label className="required">Lastname</label>
                            <input style={{width: "200%"}} type="text" value={this.state.lastname} onChange={this.handleLastnameChange} />
                            <FieldErrors
                                label="Lastname"
                                val={this.state.lastname}
                                validations={{ required: true }}
                                show={this.state.submitted} handleErrors={this.handleErrors}
                            />
                        </div>
                        <div className="input-group">
                            <label className="required">Email</label>
                            <input style={{width: "200%"}} type="text" value={this.state.email} onChange={this.handleEmailChange} />
                            <FieldErrors
                                label="Email"
                                val={this.state.email}
                                validations={{ required: true }}
                                show={this.state.submitted} handleErrors={this.handleErrors}
                            />
                        </div>
                        <div className="input-group">
                            <label className="">Phone</label>
                            <input style={{width: "200%"}} type="text" value={this.state.phone} onChange={this.handlePhoneChange} />
                            <FieldErrors
                                label="Phone"
                                val={this.state.phone}
                                validations={{ required: false }}
                                show={this.state.submitted} handleErrors={this.handleErrors}
                            />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn btn-dark">Update</button>
                        </div>
                    </form>
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