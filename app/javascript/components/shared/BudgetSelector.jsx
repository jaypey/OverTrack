import React from 'react';
import PropTypes from 'prop-types';
import { Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';


class BudgetSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budgets : [],
            idSelectedBudget: 0,
        };
    }

    componentDidMount() {
        this.loadBudgets();
    }

    loadBudgets = () => {
        Budgets.list().then(
          (cResp) => { this.setState({ budgets: cResp}); },
          () => { Alerts.error("Budget didn't load correctly"); }
        );
    }

    changeSelectedBudget = async(id) => {
        this.setState({idSelectedBudget: id});
        this.updateSelectedBudget();
        this.props.onChange;
    }

    updateSelectedBudget = () => {
        Budgets.updateSelectBudget({id: this.state.idSelectedBudget}).then(
            (cResp) => { Alerts.success("Selected budget");},
            () => {Alerts.error("Couldnt select budget");}
        );
    }

    render() {
        return (
            <div className='input-group'>
               <select id="budget-selector" onChange={e => this.changeSelectedBudget(e.target.value)}>  
               {this.state.budgets.map((budget) =>
                        (<option key={budget.id} value={budget.id}
                        > 
                        {budget.name}
                        </option>))}
               </select>
           </div>
        );
    }
}

BudgetSelector.propTypes = {
    onChange: PropTypes.func.isRequired,
  };

export default BudgetSelector