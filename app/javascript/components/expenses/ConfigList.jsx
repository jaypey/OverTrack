import React from 'react';
import { CsvConfig } from '../../api/main';
import ConfigItem from './ConfigItem';
import Alerts from '../../helpers/alerts';

class ConfigList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            configs: [],
        };

        CsvConfig.list("").then((response) => {

            this.setState({ configs: response });
        });
    }


    handleDelete = (id) => {
        Alerts.genericDelete("csv config").then((result) => {
            if (result.value) {
                CsvConfig.delete(id).then((response) => {
                    if (response != null) {
                        this.setState({ configs: this.state.configs.filter(x => x.id != response) });
                    }
                });
            }
        })
    }

    handleModify = (id) => {
        window.location.href = "/expense_uploads/create_config?id=" + id;
    }


    render() {
        return (

            <>
                <div id="config-index">
                    <div id='config-list-title-container'>
                        <h1 id='config-list-title'>Csv Configs</h1>
                    </div>
                    <div id='config-list'>
                        <span
                            id="create-config-button"
                            className="fa fa-plus options-button"
                            onClick={() => { window.location.href = "/expense_uploads/create_config?"; }}
                        />
                        {
                            this.state.configs.map((config) => (
                                <ConfigItem
                                    key={config.id}
                                    config={config}
                                    handleDelete={this.handleDelete}
                                    handleModify={this.handleModify}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <a id="config-list-back" className='btn' href='/expense_uploads/new'>Back</a>
                </div>
            </>
        );
    }
}

export default ConfigList;
