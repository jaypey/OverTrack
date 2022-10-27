import React from 'react';

const GenericListItem = ({handleDelete, text}) =>{
    return (
        <div className='generic-item-container'>
            <span className='generic-item-text'>{text}</span>
            <span onClick={() => handleDelete(text)} className='fa fa-times generic-item-delete'></span>
        </div>
    );
}

export default GenericListItem;