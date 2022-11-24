import React from "react";

const ConfigItem = ({ config, handleDelete, handleModify }) => {
    return (
        <div className="config-item-container">
            <div>
                <h3 className="config-item-title">#{config.id} - {config.name}</h3>
            </div>
            <div className="config-item-options">
                <span onClick={() => handleModify(config.id)} className='fa fa-tools config-item-modify options-button'></span>
                <span onClick={() => handleDelete(config.id)} className='fa fa-times config-item-delete options-button'></span>
            </div>
        </div>
    )

}

export default ConfigItem;