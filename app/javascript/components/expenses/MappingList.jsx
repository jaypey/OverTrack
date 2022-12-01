import React from 'react';
import MappingListItem from './MappingListItem';


const MappingList = ({handleDelete, list}) => {
    return (
        <>
            {list.map((item, index) => {
               
                return (
                    <MappingListItem key={index} handleDelete={handleDelete} text={item.text} category={item.category}/>
                )
            })}
        </>
    );
}

export default MappingList;