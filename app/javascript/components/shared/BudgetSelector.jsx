import React from 'react';
import PropTypes from 'prop-types';
import { Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';


class BudgetSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budgets: [],
            idSelectedBudget: 0,
        };
    }

    componentDidMount() {
        this.loadBudgets();
        this.getselectBudget();
    }

    loadBudgets = () => {
        Budgets.list().then(
            (cResp) => { this.setState({ budgets: cResp }); },
            () => { Alerts.error("Budget didn't load correctly"); }
        );
    }


    getselectBudget = () => {
        Budgets.getSelectedBudgetId().then(
            (cResp) => { this.setState({ idSelectedBudget: cResp }); },
            () => { Alerts.error("Budget didn't load correctly"); }
        )
    }

    changeSelectedBudget = async (id) => {
        console.log(id)
        this.setState({ idSelectedBudget: id });
        this.updateSelectedBudget(id);
        this.props.onChange();
    }

    updateSelectedBudget = (id) => {
        console.log(id + " selected budget")
        Budgets.updateSelectBudget({ id: id }).then(
            (cResp) => { Alerts.success("Selected budget"); },
            () => { Alerts.error("Couldnt select budget"); }
        );
    }

    render() {
        return (
            <div className='input-group'>
                <select id="budget-selector" value={this.state.idSelectedBudget} onChange={e => this.changeSelectedBudget(e.target.value)}>
                    {this.state.budgets.map((budget) => (this.state.idSelectedBudget == budget.id ?
                        <option selected key={budget.id} value={budget.id}
                        >
                            {budget.name}
                        </option>
                        : <option key={budget.id} value={budget.id}
                        >
                            {budget.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

BudgetSelector.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default BudgetSelector