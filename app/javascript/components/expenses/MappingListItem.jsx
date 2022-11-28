import React from 'react';

const MappingListItem = ({handleDelete, text, category}) =>{
    return (
        <div className='generic-item-container'>
            <span className='generic-item-text'>{text} ={'>'} {category}</span>
            <span onClick={() => handleDelete(text)} className='fa fa-times generic-item-delete'></span>
        </div>
    );
}

export default MappingListItem;