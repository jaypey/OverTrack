import React from "react";

const ConfigItem = ({ config, handleDelete, handleModify }) => {
    return (
        <div className="config-item-container">
            <div>
                <h3 className="config-item-title">#{config.id} - {config.name}</h3>
            </div>
            <div className="config-item-options">
                <span className='fa fa-tools config-item-modify options-button'></span>
                <span className='fa fa-times config-item-delete options-button'></span>
            </div>
        </div>
    )

}

export default ConfigItem;