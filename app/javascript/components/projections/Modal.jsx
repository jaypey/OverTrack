import React from 'react';

export default class Modal extends React.Component {


    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
            <br></br>
            <div className='modal-box'>
                <div className='text-space'>
        <p className='popup-text'>Here, you will be able to see where your expenses and your revenues are going based on certain calculations. It calculates the variation in between every month you selected and makes an average of it to see what to expect in the comming months. You can also decide how many months in the future you want to see. Please note that these calculations remain approximative and that you shouldn't fully rely on them to plan your budget.</p>
        </div>
        </div>
        </div>
          );
    }
  }