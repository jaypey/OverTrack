import React from 'react'
import AddBudgetModal from '../budget/AddBudgetModal';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBudgetCreate: false,
        };
    }
    
    openBudgetCreate = () => { this.setState({ showBudgetCreate: true }); }
    closeBudgetCreate = () => { this.setState({ showBudgetCreate: false }); }

    Budget(props) {
        return <li style={{cursor: 'pointer', textAlign: 'left'}} className='input-group'>{ props.name }</li>;
    }

    renderBudgetCreateModal() {
    if (!this.state.showBudgetCreate) { return ''; }
    return <AddBudgetModal onClose={this.closeExpenseCreate} onSave={this.onExpenseSave} />;
    }
    
    renderBudgets() {
        const budgets = [
            {id: 1, name: 'Perso'},
            {id: 2, name: 'Famille'},
            {id: 3, name: 'Entreprise Planto'}
          ];
        return (
            <div className='content-with-sidebar mt-30'>
                <div className='sidebar'>
                    <h3 className=''>Your budgets</h3>
                    <ul>
                        {budgets.map((budget) => (<this.Budget key={budget.id} name={budget.name}/>))}
                    </ul>
                    <br/>
                    <div>
                        <button className='btn btn-round btn-dark pos-abs mt-neg-20 z-5' onClick={this.openBudgetCreate}>+ Add Budget</button>
                    </div>
                </div>
                <div className='content'>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div className='container wide'>
                {this.renderBudgets()}
            </div>
        )
    }
}

export default Main;