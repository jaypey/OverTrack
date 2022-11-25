import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Numerics } from '../../helpers/main';
import Progress from '../shared/Progress';
import GoalFormModal from '../goals/FormModal';
import { Budgets } from '../../api/main';
import BudgetSelector from '../shared/BudgetSelector'

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showGoalModal: false, selectedBudgetName: ""};

  }

  componentDidMount(){
    this.getSelectedBudgetId();
  }

  openGoal = () => { this.setState({ showGoalModal: true }); }
  closeGoal = () => { this.setState({ showGoalModal: false }); }
  onGoalSave = () => {
    this.closeGoal();
    this.props.onChange();
  }

  goalDiff() {
    return this.props.totaltotalRevenue*100 - this.totalSpend();
  }

  totalSpend() {
    return this.props.totalExpense*100;
  }

  totalRevenue() {
    return this.props.totalRevenue*100;
  }

  percentages() {
    const outOf = Math.max(this.props.totaltotalRevenue*100, this.totalSpend());
    return this.props.categoriesWithExpensesAndSpend.map((category) => ({ percentage: (category.spend / outOf) * 100, color: category.color }));
  }

  goalComparisonDisplay() {
    const diff = this.goalDiff();
    return (diff >= 0) ? `${Numerics.centsToDollars(diff)} remaining` : `${Numerics.centsToDollars(Math.abs(diff))} over`;
  }

  renderGoalModal() {
    if (!this.state.showGoalModal) { return ''; }
    return <GoalFormModal onClose={this.closeGoal} onSave={this.onGoalSave} goals={{ monthly: this.props.monthlyGoal }} />;
  }

  getSelectedBudgetId = async() =>{
    const selectedBudget = await Budgets.getSelectedBudgetId()
    .then(
      (resp) => {return resp;},
      () => {return '';}
      );

    this.setState({selectedBudgetName: selectedBudget});
  }

  displayRevenueLeft() {

    if (this.totalRevenue() < 0) {
      const displayedRevenue = Numerics.centsToDollars(this.totalRevenue());
      const displayedRevenue2 = displayedRevenue.substring(0, 1) + '+' + displayedRevenue.substring(2, displayedRevenue.length);
      return <h4 style={{color: "#ee9793"}}><i style={{color: "#ee9793"}} className="fas fa-exclamation-circle mr-4" />{displayedRevenue2} over</h4>;
    }
    return <h4 style={{color: "grey"}}>{Numerics.centsToDollars(this.totalRevenue())} remaining</h4>;
  }


  render() {
    const today = moment();
    const daysLeftInMonth = moment().endOf('month').diff(today, 'days');

    return (
      <div>
        
        <div className="mb-10">{today.format('MMMM')} ({daysLeftInMonth} days left)</div>
        <div className="flex row-flex flex-space-between flex-baseline mb-10">
          <div>
            <h2>{Numerics.centsToDollars(this.totalSpend())}</h2>
            { this.displayRevenueLeft()}
          </div>
        </div>

        <Progress data={this.percentages()} />
      </div>
    );
  }
}

Overview.defaultProps = {
  categoriesWithExpensesAndSpend: [],
  totalExpense: 0,
  totaltotalRevenue: 0,
  monthlyGoal: 0,
};

Overview.propTypes = {
  categoriesWithExpensesAndSpend: PropTypes.array,
  monthlyGoal: PropTypes.number,
  totalExpense: PropTypes.number,
  totaltotalRevenue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Overview;
