import React from 'react'
import FormBudgetModal from '../budget/AddBudgetModal';
import FormAddUserModal from './AddUserModal';
import { Budgets, Roles } from '../../api/main';
import { Alerts } from '../../helpers/main';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            budgets: [],
            budget_role: [],
            idSelectedBudget: 0,
            showBudgetCreate: false,
            showBudgetUpdate: false,
            currentUserId: 0
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
        this.setState({ idSelectedBudget: 0 });
        this.reloadData();
    }

    onRemoveUser = () => {
        this.reloadData();
    }

    onLeaveBudget = () => {
        this.setState({ idSelectedBudget: 0});
        this.reloadData();
    }

    openBudgetCreate = () => { this.setState({ showBudgetCreate: true }); }
    closeBudgetCreate = () => { this.setState({ showBudgetCreate: false }); }
    openBudgetUpdate = () => { this.setState({ showBudgetUpdate: true }); }
    closeBudgetUpdate = () => { this.setState({ showBudgetUpdate: false }); }
    changeSelectedBudget = async (id) => { this.setState({ idSelectedBudget: id }) }
    openUserAdd = () => { this.setState({ showUserAdd: true }); }
    closeUserAdd = () => { this.setState({ showUserAdd: false }); }

    deleteBudget = async (id) => {
        Alerts.genericDelete('budget').then((result) => {
            if (!result.value) { return; }
            Budgets.delete(id).then(
                () => { this.onBudgetDelete(); },
                (error) => { error.status == 403 ? Alerts.genericConflict('Insufficient permissions') : error.status == 408 ? Alerts.genericConflict('Cannot delete base budget') : Alerts.genericError(); },
            );
        });
    }

    leaveBudget = async (budgetId) => {
        Alerts.genericLeave('budget').then((result) => {
            if (!result.value) { return; }
            Budgets.leavebudget({ id: budgetId}).then(
                () => { this.onLeaveBudget(); },
                (error) => { error.status == 403 ? Alerts.genericConflict('Insufficient permissions') : Alerts.genericError(); }
            );
        });
    }

    handleUserRemove = async (id, budgetId) => {
        Alerts.genericRemove('user').then((result) => {
            if (!result.value) { return; }
            Budgets.removeuser({ id: budgetId, userid: id }).then(
                () => { this.onRemoveUser(); },
                (error) => { error.status == 403 ? Alerts.genericConflict('Insufficient permissions') : error.status == 409 ? Alerts.genericConflict('Cannot remove yourself from budget') : Alerts.genericError(); }
            );
        });
    }

    updateSelectedBudget = () => {
        Budgets.updateSelectBudget({ id: this.state.idSelectedBudget }).then(
            (cResp) => { Alerts.success("Selected budget"); },
            () => { Alerts.error("Couldnt select budget"); }
        );
    }

    updateRole = (userId, budgetId, roleValue) => {
        Roles.update(roleValue, { user_id: userId, budget_id: budgetId }).then(
            (cResp) => { Alerts.success("Role changed"); this.reloadData(); },
            (error) => {
                error.status == 408 ? Alerts.genericConflict('Can\'t change your own permissions')
                    : error.status == 403 ? Alerts.genericConflict('Insufficient permissions')
                        : Alerts.genericError();
            },
        );
    }

    reloadData = () => {
        this.loadBudgets();
        this.loadCurrentUserId();
        this.loadRoles();
    }

    loadRoles = () => {
        Roles.list().then(
            (cResp) => { this.setState({ budget_role: cResp }); },
            () => { Alerts.error("Roles didn't load correctly"); }
        );
    }

    isCurrentUserOwner = (user) => {
        if (user.user_id == this.state.currentUserId)
            if (user.role_value <= 1)
                return true;
        return false;
    }

    isCurrentUserMember = (user) => {
        if (user.user_id == this.state.currentUserId)
            if (user.role_value <= 2)
                return true;
        return false;
    }

    loadBudgets = () => {
        Budgets.list().then(
            (cResp) => { this.setState({ budgets: cResp }); },
            () => { Alerts.error("Budget didn't load correctly"); }
        );
    }

    loadCurrentUserId = () => {
        Budgets.getcurrentuserid().then(
            (cResp) => { this.setState({ currentUserId: cResp }); },
            () => { Alerts.error("Current user didn't load correctly"); }
        );
    }

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
        if (!this.state.showUserAdd) { return ''; }
        return <FormAddUserModal onClose={this.closeUserAdd} onSave={this.onAddUser} budget={(this.state.budgets.find((budget) => budget.id == this.state.idSelectedBudget))} />
    }


    renderBudgetUsers(budget_user, isOwner) {
        let deleteButton
        if (isOwner)
            deleteButton = <a onClick={() => this.handleUserRemove(budget_user.user.id, this.state.idSelectedBudget)} className="dim-til-hover"><i className="fa fa-times" /></a>
        else
            deleteButton = <div></div>
        return (
            <tr id={budget_user.id} key={budget_user.id}>
                <td className="input-group mh-30 mw-150">
                    <label className="bg-gray-slight-contrast">{budget_user.user.firstname + " " + budget_user.user.lastname}</label>
                </td>

                <td className="input-group mw-150">
                    <select disabled={!isOwner} defaultValue={budget_user.role_value} onChange={(e) => this.updateRole(budget_user.user_id, budget_user.budget_id,
                        e.target.value)} className={isOwner ? "bg-gray-slight-contrast" : "bg-gray-slight-constrast select-disabled"}>
                        {this.state.budget_role.map((c) =>
                            <option key={c.role_value + budget_user.id} value={c.role_value}>
                                {c.role_name}
                            </option>
                        )}
                    </select>
                </td>

                <td>
                    {deleteButton}
                </td>
            </tr>
        );
    }

    renderBudgetInfo(budget) {
        let title
        let addButton
        let isOwner
        if (this.state.idSelectedBudget === 0) { return 'Select a budget'; }
        if (budget.budget_users.find(this.isCurrentUserOwner))
        {
            title = <h3>
                {budget.name}
                &nbsp; <a onClick={() => this.openBudgetUpdate()} className="dim-til-hover"><i className="fa fa-edit" /></a>
                &nbsp; <a onClick={() => this.deleteBudget(budget.id)} className="dim-til-hover text-right"><i className="fa fa-times" /></a>
            </h3>
            isOwner = true;
        }
        else
        {
            title = <h3>
                {budget.name}
            </h3>
            isOwner = false;
        }

        if (budget.budget_users.find(this.isCurrentUserMember))
            addButton = <button onClick={() => this.openUserAdd()} className='btn btn-round btn-accept'><i className='text-light fa fa-plus'></i></button>
        else
            addButton = <div></div>
        return (
            <div className="content">
                {title}
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
                            {budget.budget_users.map((budget_user) => this.renderBudgetUsers(budget_user, isOwner))}
                        </tbody>
                    </table>
                    {addButton}
                </div>
                <br />
            </div>
        )
    }


    renderBudgets() {

        return (
            <div className='content-with-sidebar mt-30'>
                <div className='sidebar'>
                    <h3 className=''>Your budgets</h3>
                    <ul>
                        {this.state.budgets.map((budget) => (budget.budget_users.find(this.isCurrentUserOwner) ?
                            <li key={budget.id}
                                onClick={() => this.changeSelectedBudget(budget.id)}
                                style={{ cursor: 'pointer' }}
                                className={budget.id == this.state.idSelectedBudget ? 'input-group text-bold' : 'input-group'}
                            >
                                &nbsp; {budget.name}
                            </li> :
                            <li key={budget.id}
                            onClick={() => this.changeSelectedBudget(budget.id)}
                            style={{ cursor: 'pointer' }}
                            className={budget.id == this.state.idSelectedBudget ? 'input-group text-bold' : 'input-group'}
                        >
                            <a onClick={() => this.leaveBudget(budget.id)} className="dim-til-hover text-right"><i className='fa fa-minus'></i></a>
                            &nbsp; {budget.name}
                        </li>
                        ))}
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