import React from 'react'
import FormBudgetModal from '../budget/AddBudgetModal';
import { Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            budgets: [
                // {
                //     id: 1, name: 'Perso', users: [
                //         { id: 1, firstname: 'Laurent', lastname: 'Brochu' },
                //     ]
                // },
                // {
                //     id: 2, name: 'Famille', users: [
                //         { id: 2, firstname: 'Laurent', lastname: 'Brochu' },
                //         { id: 3, firstname: 'Maxime', lastname: 'Lefebvre' },
                //         { id: 4, firstname: 'Karl', lastname: 'Mainville' },
                //         { id: 5, firstname: 'Louis', lastname: 'Garceau' }
                //     ]
                // },
                // {
                //     id: 3, name: 'Entreprise Planto', users: [
                //         { id: 6, firstname: 'Laurent', lastname: 'Brochu' },
                //         { id: 7, firstname: 'Maxime', lastname: 'Aubin' },
                //         { id: 8, firstname: 'Jean-Philippe', lastname: 'Belval' }
                //     ]
                // }
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

    onBudgetDelete = () => {
        this.setState({ idSelectedBudget: 0});
        this.reloadData();
    }
    openBudgetCreate = () => { this.setState({ showBudgetCreate: true }); }
    closeBudgetCreate = () => { this.setState({ showBudgetCreate: false }); }
    openBudgetUpdate = () => { this.setState({ showBudgetUpdate: true }); }
    closeBudgetUpdate = () => { this.setState({ showBudgetUpdate: false }); }
    changeSelectedBudget = async (id) => { this.setState({ idSelectedBudget: id }) }

    deleteBudget = async (id) => {
        Alerts.genericDelete('budget').then((result) => {
            if (!result.value) { return; }
            Budgets.delete(id).then(
              () => { this.onBudgetDelete(); },
              () => { Alerts.genericError(); },
            );
          });
    }

    updateBudget = async (id) => {
        console.log("update")
    }

    reloadData = () => {
        this.loadBudgets();
    }

    loadBudgets = () => {
        Budgets.list().then(
          (cResp) => { this.setState({ budgets: cResp }); },
          () => { Alerts.error("Budget didn't load correctly"); }
        );
    }

    renderBudgetCreateModal() {
        if (!this.state.showBudgetCreate) { return ''; }
        return <FormBudgetModal onClose={this.closeBudgetCreate} onSave={this.onBudgetCreateSave} />;
    }

    renderBudgetEditModal() {
        if (!this.state.showBudgetUpdate) { return ''; }
        return <FormBudgetModal 
        onClose={this.closeBudgetCreate}
        onSave={this.onBudgetUpdateSave} 
        budget={(this.state.budgets.find((budget) => budget.id == this.state.idSelectedBudget))}
        />;
    }


    renderBudgetUsers(user) {
        return (
            <tr key={user.id}>
                <td className="input-group">
                    <label className="bg-gray-slight-contrast">{user.firstname + " " + user.lastname}</label>
                </td>

                <td className="input-group mw-150">

                    {/*À revoir lors de l'implémentation des rôles */}

                    {/* <select defaultValue={user.category_id} onChange={(e) => this.updateExpense(expense.id, { category_id: e.target.value })} className="bg-gray-slight-contrast">
                        {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select> */}
                    <select></select>
                </td>

                <td>
                    <a onClick={() => this.handleUserRemove(user.id, this.state.budgetId)} className="dim-til-hover"><i className="fa fa-times" /></a>
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
                            {budget.users.map((user) => this.renderBudgetUsers(user))}
                        </tbody>
                    </table>
                </div>
                <br/>
                <div>
                    <button className='btn btn-round btn-accept pos-abs mt-neg-20 z-5'>Select</button>
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
                {this.renderBudgets()}
            </div>
        )
    }
}

export default Main;