import React from 'react';
import GenericList from './GenericList';
import { CsvConfig } from '../../api/main';
import { Alerts } from '../../helpers/main';

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
      isValid: false,
    };

  }

  onSave = (response) => {
    if (response.id != null) {
      console.log(`Saved config ${response.name}(${response.id}) successfully`);
      Alerts.success(`Config ${response.name}(${response.id}) saved successfully!`)
    }
    else {
      Alerts.genericError();
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();

    var name = this.state.configName.trim();

    if (name.length < 1) {
      return;
    }

    var config_json = {
      has_header: this.state.hasHeader,
      descriptions: {
        index: this.state.descriptionIdx,
        ignore_substrings: this.state.ignoredSubstring
      },
      categories: {
        index: this.state.categoryIdx,
        mappings: {}
      },
      amounts: {
        index: this.state.amountIdx,
        spend_is_negative: this.state.spendIsNegative,
        skip_non_spend: this.state.skipNonSpend
      },
      timestamps: {
        index: this.state.dateIdx
      },
      auto_detect: {
        filename_substring: "N/A",
        default_category: this.state.defaultCategory
      }
    }

    config_json = JSON.stringify(config_json);

    let apiCall = null;

    apiCall = CsvConfig.create({
      name: name,
      config_json: config_json
    });


    apiCall.then(
      (resp) => { this.onSave(resp); },
      () => { Alerts.genericError(); },
    );
  }

  handleRemoveSubstring = (substringToDelete) => {

    var stringToDelete = substringToDelete;

    if (stringToDelete != "")
      this.setState(({ ignoredSubstring: this.state.ignoredSubstring.filter(e => e !== stringToDelete) }));
  }

  handleAddSubstring = () => {

    var currentString = this.state.currentSubstring;

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

  handleNameChange = (e) => {
    this.setState({ isValid: e.target.value.trim().length > 0 });
    this.setState({ configName: e.target.value });
  }

  handleDescriptionIdxChange = (e) => { this.setState({ descriptionIdx: e.target.value }); }
  handleCategoryIdxChange = (e) => { this.setState({ categoryIdx: e.target.value }); }
  handleAmountIdxChange = (e) => { this.setState({ amountIdx: e.target.value }); }
  handleDateIdxChange = (e) => { this.setState({ dateIdx: e.target.value }); }
  handleHasHeaderChange = (e) => { this.setState({ hasHeader: e.target.checked }); }
  handleDefaultCategoryChange = (e) => { this.setState({ defaultCategory: e.target.value }); }
  handleSpendIsNegativeChange = (e) => { this.setState({ spendIsNegative: e.target.checked }); }
  handleSkipNonSpendChange = (e) => { this.setState({ skipNonSpend: e.target.checked }); }

  render() {
    return (

      <form id="config-form"
        onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        onSubmit={this.handleSubmit}>
        <h1>CSV Configuration Manager</h1>
        <div className='config-group'>
          <h2>Basic information</h2>
          <div className='input-group'>
            <label className='required'>Config name</label>
            <input
              id='config-name-input'
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
          <label>Ignore rows with descriptions containing: </label>
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
          <div className="input-group" hidden>
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

        <div className='config-button-container'>
          <button id="config-submit" disabled={!this.state.isValid} type="submit" className='btn btn-primary'>Create</button>
          <a id="config-back" className='btn' href='/expense_uploads/new'>Back</a>
        </div>
      </form>

    );
  }
}

export default CreateConfig;
