import React from 'react';
import { CsvConfig } from '../../api/main';

class ConfigList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        CsvConfig.list("").then((response)=>{

            console.log(response);
        });
    }
    render() {
        return (

            <div>
                config list
            </div>

        );
    }
}

export default ConfigList;
