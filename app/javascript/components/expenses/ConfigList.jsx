import React from 'react';
import { CsvConfig } from '../../api/main';
import ConfigItem from './ConfigItem';

class ConfigList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            configs: [],
        };

        CsvConfig.list("").then((response) => {

            console.log(response);
            this.setState({ configs: response });
        });
    }


    render() {
        return (

            <div id="config-index">
                <div id='config-list-title-container'>
                    <h1 id='config-list-title'>Csv Configs</h1>
                </div>
                <div id='config-list'>
                    <span
                        id="create-config-button"
                        className="fa fa-plus options-button"
                        onClick={() => { window.location.href ="/expense_uploads/create_config?";}}
                    />
                    {
                        this.state.configs.map((config) => (
                            <ConfigItem
                                key={config.id}
                                config={config}
                            />
                        ))
                    }
                </div>
            </div>

        );
    }
}

export default ConfigList;
