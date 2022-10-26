import React from 'react';
import FieldErrors from '../shared/FieldErrors';
import GenericList from './GenericList';
import { useRef } from 'react';



class CreateConfig extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      configName: "",
      descriptionIdx: 0,
      categoryIdx: 0,
      amountIdx: 0,
      dateIdx: 0,
      ignoredSubstring: [],
      currentSubstring: "",
      hasHeader: false,
      spendIsNegative: false,
      skipNonSpend: false,
      defaultCategory: "Uncategorized",
    };

  }

  handleRemoveSubstring = (substringToDelete) => {

    var stringToDelete = substringToDelete.trim();

    if (stringToDelete != "")
      this.setState(({ ignoredSubstring: this.state.ignoredSubstring.filter(e => e !== stringToDelete) }));
  }

  handleAddSubstring = () => {

    var currentString = this.state.currentSubstring.trim();

    if (currentString != "") {
      this.setState(prevState =>
      ({
        ignoredSubstring: [...prevState.ignoredSubstring
          .filter(e => e !== currentString), ...currentString].sort()
      }));
      this.setState({ currentSubstring: "" });
    }

  }

  handleAddSubtringKeyPress = (e) => {
    if (e.keyCode === 13) {
      this.handleAddSubstring();
    }
  }

  handleDescriptionIdxChange = (e) => { this.setState({ descriptionIdx: e.target.value }); }
  handleCategoryIdxChange = (e) => { this.setState({ categoryIdx: e.target.value }); }
  handleAmountIdxChange = (e) => { this.setState({ amountIdx: e.target.value }); }
  handleDateIdxChange = (e) => { this.setState({ dateIdx: e.target.value }); }
  handleNameChange = (e) => { this.setState({ configName: e.target.value }); }
  handleHasHeaderChange = (e) => { this.setState({ hasHeader: e.target.checked }); }
  handleDefaultCategoryChange = (e) => { this.setState({ defaultCategory: e.target.value }); }
  handleSpendIsNegativeChange = (e) => { this.setState({ spendIsNegative: e.target.checked }); }
  handleSkipNonSpendChange = (e) => { this.setState({ skipNonSpend: e.target.checked }); }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting: ");
    console.log(this.state);
  }

  render() {
    return (

      <form id="config-form"
        onKeyDown={(e) => {e.key ==='Enter' && e.preventDefault(); }}
        onSubmit={this.handleSubmit}>
        <h1>CSV Configuration Creator</h1>
        <div className='config-group'>
          <h2>Basic information</h2>
          <div className='input-group'>
            <label className='required'>Config name</label>
            <input
              value={this.state.configName}
              onChange={this.handleNameChange} type="text" />
          </div>
          <div className='config-checkbox-group'>
            <label data-toggle="tooltip" data-placement="top" title="Skip the first row of the CSV file (check this box if your file has a header)">Skip first row?</label>
            <input
              value={this.state.hasHeader}
              onChange={this.handleHasHeaderChange} type="checkbox" />
          </div>
        </div>

        <div className="config-description-container config-group">
          <h3>Description</h3>
          <div className="input-group config-idx">
            <label className="required">Index</label>
            <input className="config-input config-idx-input" type="number" min="0"
              value={this.state.descriptionIdx}
              onChange={this.handleDescriptionIdxChange} />
          </div>
          <label>Ignored text</label>
          <div className='config-list-input-container'>
            <div className='config-list-input'>
              <div className='input-and-button'>
                <input className='config-input config-list-textbox'
                  onChange={(e) => this.setState({ currentSubstring: e.target.value })}
                  onKeyDown={this.handleAddSubtringKeyPress}
                  value={this.state.currentSubstring}
                  type="text" />
                <span
                  onClick={this.handleAddSubstring}
                  className="config-add-substring fa fa-plus"></span>
              </div>
            </div>
            <div className='config-list'>
              {this.state.ignoredSubstring.length > 0 && <GenericList handleDelete={this.handleRemoveSubstring} list={this.state.ignoredSubstring} />}
            </div>
          </div>
        </div>

        <div className="config-category-container config-group">
          <h3>Category</h3>
          <div className="input-group config-idx">
            <label className="required">Index</label>
            <input className="config-input config-idx-input" type="number" min="0"
              value={this.state.categoryIdx}
              onChange={this.handleCategoryIdxChange} />
          </div>
          <div className="input-group">
            <label data-toggle="tooltip" data-placement="top" title="Default category to use if the category of the row isn't registered in OverTrack" className="required">Default category</label>
            <input className="config-input" type="text"
              value={this.state.defaultCategory}
              onChange={this.handleDefaultCategoryChange} />
          </div>
        </div>

        <div className='config-amount-container config-group'>
          <h3>Amount</h3>
          <div className="input-group config-idx">
            <label className="required">Index</label>
            <input className="config-input config-idx-input" type="number" min="0"
              value={this.state.amountIdx}
              onChange={this.handleAmountIdxChange} />
          </div>

          <div className='config-checkbox-group'>
            <label data-toggle="tooltip" data-placement="top" title="Amounts that starts with a minus (-) is considered a spending">Spend is negative?</label>
            <input
              value={this.state.spendIsNegative}
              onChange={this.handleSpendIsNegativeChange} type="checkbox" />
          </div>

          <div className='config-checkbox-group'>
            <label data-toggle="tooltip" data-placement="top" title="Skip all amounts that aren't considered a spending">Skip non spend?</label>
            <input
              value={this.state.skipNonSpend}
              onChange={this.handleSkipNonSpendChange} type="checkbox" />
          </div>
        </div>


        <div className='config-date-container config-group'>
          <h3>Date</h3>
          <div className="input-group config-idx">
            <label className="required">Index</label>
            <input className="config-input config-idx-input" type="number" min="0"
              value={this.state.dateIdx}
              onChange={this.handleDateIdxChange} />
          </div>
        </div>

        <button type="submit" className='btn btn-primary'>Create</button>

      </form>
    );
  }
}

export default CreateConfig;
