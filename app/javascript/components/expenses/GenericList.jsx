import React from 'react';
import GenericListItem from './GenericListItem';


const GenericList = ({handleDelete, list}) => {
    return (
        <>
            {list.map((item, index) => {
               
                return (
                    <GenericListItem key={index} handleDelete={handleDelete} text={item} />
                )
            })}
        </>
    );
}

export default GenericList;