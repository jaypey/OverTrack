import React from 'react'
import FormBudgetModal from '../budget/AddBudgetModal';
import FormAddUserModal from './AddUserModal';
import { Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            budgets: [
                
            ],
            idSelectedBudget: 0,
            showBudgetCreate: false,
            showBudgetUpdate: false,
        };
    }

    componentDidMount() {
        this.reloadData();
    }

    onBudgetCreateSave = () => {
        this.closeBudgetCreate();
        this.reloadData();
    }

    onBudgetUpdateSave = () => {
        this.closeBudgetUpdate();
        this.reloadData();
    }

    onAddUser = () => {
        this.closeUserAdd();
        this.reloadData();
    }

    onBudgetDelete = () => {
        this.setState({ idSelectedBudget: 0});
        this.reloadData();
    }

    onRemoveUser = () => {
        this.reloadData();
    }

    openBudgetCreate = () => { this.setState({ showBudgetCreate: true }); }
    closeBudgetCreate = () => { this.setState({ showBudgetCreate: false }); }
    openBudgetUpdate = () => { this.setState({ showBudgetUpdate: true }); }
    closeBudgetUpdate = () => { this.setState({ showBudgetUpdate: false }); }
    changeSelectedBudget = async (id) => { this.setState({ idSelectedBudget: id }) }
    openUserAdd = () => { this.setState({ showUserAdd: true});}
    closeUserAdd = () => { this.setState({ showUserAdd: false});}

    deleteBudget = async (id) => {
        Alerts.genericDelete('budget').then((result) => {
            if (!result.value) { return; }
            Budgets.delete(id).then(
              () => { this.onBudgetDelete(); },
              () => { Alerts.genericError(); },
            );
          });
    }

    handleUserRemove = async (id, budgetId) => {
        Alerts.genericRemove('user').then((result) => {
            if(!result.value) {return;}
            Budgets.removeuser({id: budgetId, userid: id}).then(
                () => { this.onRemoveUser(); },
                () => { Alerts.genericError(); }
            );
        });
    }

    updateBudget = async (id) => {
        console.log("update")
    }

    updateSelectedBudget = () => {
        Budgets.updateSelectBudget({id: this.state.idSelectedBudget}).then(
            (cResp) => { Alerts.success("Selected budget");},
            () => {Alerts.error("Couldnt select budget");}
        );
    }

    reloadData = () => {
        this.loadBudgets();
        //this.getselectBudget();
    }

    loadBudgets = () => {
        Budgets.list().then(
          (cResp) => { this.setState({ budgets: cResp}); },
          () => { Alerts.error("Budget didn't load correctly"); }
        );
    }

    // getselectBudget = () => {
    //     Budgets.getSelectedBudgetId().then(
    //         (cResp) => { this.setState({ idSelectedBudget: cResp }); },
    //         () => { Alerts.error("Budget didn't load correctly"); }
    //     )
    //     console.log(this.state.idSelectedBudget)
    // }

    renderBudgetCreateModal() {
        if (!this.state.showBudgetCreate) { return ''; }
        return <FormBudgetModal onClose={this.closeBudgetCreate} onSave={this.onBudgetCreateSave} />;
    }

    renderBudgetEditModal() {
        if (!this.state.showBudgetUpdate) { return ''; }
        return <FormBudgetModal 
        onClose={this.closeBudgetUpdate}
        onSave={this.onBudgetUpdateSave} 
        budget={(this.state.budgets.find((budget) => budget.id == this.state.idSelectedBudget))}
        />;
    }

    renderUserAddModal() {
        if(!this.state.showUserAdd) {return '';}
        return <FormAddUserModal onClose={this.closeUserAdd} onSave={this.onAddUser} budget={(this.state.budgets.find((budget) => budget.id == this.state.idSelectedBudget))}/>
    }


    renderBudgetUsers(budget_user) {
        return (
            <tr id={budget_user.user.id} key={budget_user.user.id}>
                <td className="input-group">
                    <label className="bg-gray-slight-contrast">{budget_user.user.firstname + " " + budget_user.user.lastname}</label>
                </td>

                <td className="input-group mw-150">

                    {/*À revoir lors de l'implémentation des rôles */}

                    {/* <select defaultValue={user.category_id} onChange={(e) => this.updateExpense(expense.id, { category_id: e.target.value })} className="bg-gray-slight-contrast">
                        {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select> */}
                    <select></select>
                </td>

                <td>
                    <a onClick={() => this.handleUserRemove(budget_user.user.id, this.state.idSelectedBudget)} className="dim-til-hover"><i className="fa fa-times" /></a>
                </td>
            </tr>
        );
    }

    renderBudgetInfo(budget) {
        if (this.state.idSelectedBudget === 0) { return 'Select a budget'; }
        return (
            <div className="content">
                <h3>
                    {budget.name}
                    &nbsp; <a onClick={() => this.openBudgetUpdate()} className="dim-til-hover"><i className="fa fa-edit" /></a>
                </h3>
                <p className="table_title">
                    {budget.description}
                </p>
                <div className="overflow-x bg-gray p-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {budget.budget_users.map((budget_user) => this.renderBudgetUsers(budget_user))}
                        </tbody>
                    </table>
                    <button onClick={() => this.openUserAdd()} className='btn btn-round btn-accept'><i className='text-light fa fa-plus'></i></button>
                </div>
                <br/>
                <div>
                    <button onClick={() => this.updateSelectedBudget()} className='btn btn-round btn-accept pos-abs mt-neg-20 z-5'>Select</button>
                </div>
            </div>
        )
    }


    renderBudgets() {

        return (
            <div className='content-with-sidebar mt-30'>
                <div className='sidebar'>
                    <h3 className=''>Your budgets</h3>
                    <ul>
                        {this.state.budgets.map((budget) =>
                        (<li key={budget.id}
                            onClick={() => this.changeSelectedBudget(budget.id)}
                            style={{ cursor: 'pointer' }}
                            className={budget.id == this.state.idSelectedBudget ? 'input-group text-bold' : 'input-group'}
                        >
                            <a onClick={() => this.deleteBudget(budget.id)} className="dim-til-hover text-right"><i className="fa fa-times" /></a>
                            &nbsp; {budget.name} 
                        </li>))}
                    </ul>
                    <br />
                    <div>
                        <button className='btn btn-round btn-dark pos-abs mt-neg-20 z-5' onClick={this.openBudgetCreate}>+ Add Budget</button>
                    </div>
                </div>
                <div className='content'>
                    {this.renderBudgetInfo(this.state.budgets.find((budget) => budget.id == this.state.idSelectedBudget))}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='container wide'>
                {this.renderBudgetCreateModal()}
                {this.renderBudgetEditModal()}
                {this.renderUserAddModal()}
                {this.renderBudgets()}
            </div>
        )
    }
}

export default Main;