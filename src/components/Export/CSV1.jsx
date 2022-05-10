import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
export class CSV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const csvReports = {
            srno: 'Cosmin-trade.csv',
            data: this.props.data,
        }
        return (
                <CSVLink {...csvReports}>
                    CSV
                </CSVLink>
        )
    }
}

export default CSV1
