import React from 'react';
import PropTypes from 'prop-types';
import { Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

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
        this.setState({ idSelectedBudget: id });
        this.updateSelectedBudget(id);
        await delay(20);
        this.props.onChange();

    }

    updateSelectedBudget = (id) => {
        Budgets.updateSelectBudget({ id: id }).then(
            (cResp) => { },
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