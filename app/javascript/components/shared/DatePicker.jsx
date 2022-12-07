import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      startDate: this.props.value 
    };
  }

  handleChange = (val) => {
    this.setState({ startDate: val });
    this.props.onChange(val);
  }

  render() {
    let tdatePicker = this.props.canCreate ? 
    <DatePicker onChange={this.handleChange} selected={this.state.startDate} className={this.props.className} /> : 
    <DatePicker onChange={this.handleChange} selected={this.state.startDate} className={this.props.className} disabled />;
    return (tdatePicker);
  }
}

Picker.defaultProps = {
  value: new Date(),
  className: '',
  canCreate: false
};

Picker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object,
  className: PropTypes.string,
  canCreate: PropTypes.bool
};

export default Picker;
