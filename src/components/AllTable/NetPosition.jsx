import React from 'react'
import ReactTable from 'react-table'
// import 'react-table/react-table.css'
import './Darkthemetable.scss'
import _ from "lodash";
import "jspdf-autotable";
import Multiselect from 'multiselect-react-dropdown';
import Popup from './Popup';

import withFixedColumns from "react-table-hoc-fixed-columns";
// import "react-table-hoc-fixed-columns/lib/styles.css";
import './Fixedcolumn.scss';



const ReactTableFixedColumns = withFixedColumns(ReactTable);

export default class NetPosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentData: [],
            // prevdata: [],
            // SpreadBook: [],
            // ProfitLoss: [],
            grpName: [],
            grpby: [],
            popup: {
                visible: false,
                x: 0, y: 0
            },
            filter: false,
            pagination: false,
            columns : [
                {
                    Header: 'srno', fixed: "left", show:true, accessor: 'srno', Footer: (row) => {
                        const length = row.data.length;
                        // const ageSum = row.data
                        //   .map(({ age }) => age)
                        //   .reduce((a, b) => a + b, 0);
                        // const average = Math.round(ageSum / length);
                        return <div>Total: {row.data.length}</div>;
                    }
                },
                { Header: 'userid', fixed: "left", show:true, accessor: 'userid', Footer: '' },
                { Header: 'accountcode', fixed: "left", show:true, accessor: 'accountcode', Footer: "" },
                { Header: 'symbol', fixed: "left", show:true, accessor: 'symbol', Footer: "" },
                { Header: 'expirydate', fixed: "left", show:true, accessor: 'expirydate', Footer: "", },
                { Header: 'excode', fixed: "left", show:true, accessor: 'excode', Footer: "" },
                { Header: 'scripcode', fixed: "left", show:true, accessor: 'scripcode', Footer: "" },
                { Header: 'securitytype', fixed: "left", show:true, accessor: 'securitytype', Footer: "" },
                {
                    Header: 'strikeprice', fixed: "left", show:true, accessor: 'strikeprice', Footer: (row) => {
    
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'opttype', fixed: "left", show:true, accessor: 'opttype',
                    //  Footer: (row) => {
                    //     const name = row.column.Header
                    //     const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    //     return (<div>{ltpsum.toString()}</div>);
                    // }, 
                    aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'openqty', show:true, accessor: 'openqty', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values)), Cell: row => (
                        <div
                            style={{
                                color: (row.value > 0) ? "green" : "red",
                            }}
                        >
                            {row.value}
                        </div>
                    )
                },
                {
                    Header: 'openrate', show:true, accessor: 'openrate', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'openamt', show:true, accessor: 'openamt', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values)), Cell: row => (
                        <div
                            style={{
                                color: (row.value > 0) ? "green" : "red",
                            }}
                        >
                            {row.value}
                        </div>
                    )
                },
                {
                    Header: 'buyqty', show:true, accessor: 'buyqty', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'buyrate', show:true, accessor: 'buyrate', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'buyamt', show:true, accessor: 'buyamt', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'sellqty', show:true, accessor: 'sellqty', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'sellrate', show:true, accessor: 'sellrate', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'sellamt', show:true, accessor: 'sellamt', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'netqty', show:true, accessor: 'netqty', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, Cell: row => (
                        <div
                            style={{
                                color: (row.value > 0) ? "green" : "red",
                            }}
                        >
                            {row.value}
                        </div>
                    ), aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'netrate', show:true, accessor: 'netrate', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'netamt', show:true, accessor: 'netamt', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'closeqty', show:true, accessor: 'closeqty', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values)), Cell: row => (
                        <div
                            style={{
                                color: (row.value > 0) ? "green" : "red",
                            }}
                        >
                            {row.value}
                        </div>
                    )
                },
                {
                    Header: 'closerate', show:true, accessor: 'closerate', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'closeamt', show:true, accessor: 'closeamt', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'prebrk', show:true, accessor: 'prebrk', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'calval', show:true, accessor: 'calval', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'settalmentrate', show:true, accessor: 'settalmentrate', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'buybrokerage', show:true, accessor: 'buybrokerage', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'sellbrokerage', show:true, accessor: 'sellbrokerage', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                { Header: 'datetime', show:true, accessor: 'datetime', Footer: "", aggregate: (values, rows) => _.round(_.sum(values)) },
                {
                    Header: 'bfmtm', show:true, accessor: 'bfmtm', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'ratio', show:true, accessor: 'ratio', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'margin', show:true, accessor: 'margin', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'marginamt', show:true, accessor: 'marginamt', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'ltp', show:true, accessor: 'ltp', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }
                },
                {
                    Header: 'livemtm', show:true, accessor: 'livemtm', aggregate: (values, rows) => _.round(_.sum(values)), Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }
                },
                {
                    Header: 'todaysmtm', show:true, accessor: 'todaysmtm', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'todaybrk', show:true, accessor: 'todaybrk', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'premtm', show:true, accessor: 'premtm', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'pretmtm', show:true, accessor: 'pretmtm', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values))
                },
                {
                    Header: 'netmtm', show:true, accessor: 'netmtm', Footer: (row) => {
                        const name = row.column.Header
                        const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                        return <div>{ltpsum}</div>;
                    }, aggregate: (values, rows) => _.round(_.sum(values)), Cell: row => {
                        var prev = 0;
                        var colorvalue = !prev || prev === row.value ? "red" : row.value > prev ? "green" : "red";
                        // console.log(prev,row.value);
                        prev = row.value;
                        return <div style={{
                            color: { colorvalue }
                        }}>{row.value}</div>
                    }
                },
                {
                    Header: 'qtyflag', show:true, accessor: 'qtyflag', Footer: "", aggregate: (values, rows) => _.round(_.sum(values)), Cell: row => (
                        <div
                            style={{
                                color: (row.value === "OPEN") ? "green" : "red",
                                fontWeight: 'bold'
                            }}
                        >
                            {row.value}
                        </div>
                    )
                },
                { Header: 'groupname', show:true, accessor: 'groupname', Footer: "" },
                {
                    Header: "Actions",
                    Cell: props => {
                        return (
                            <button className='' style={{ 'background': 'red', color: "#fff", border: "none", cursor: 'pointer', padding: '2px 4px', borderRadius: 3, boxShadow: "0 0 5px black" }}
                                onClick={() => {
                                    console.log("Props", props)
                                    this.EditRow(props);
                                }}
                            >View</button>
                        )
                    },
                    style: { textAlign: 'center' },
                    // filterable: false,
                    sortable: false,
                    width: 100,
                    maxWidth: 100,
                    minWidth: 100
                }
    
            ]
        };
        // this.buildContextMenuJSX = this.buildContextMenuJSX.bind(this);
    }
    FilterBtn = () => {
        // console.log("button ");
        this.setState((prevState) => ({ filter: !prevState.filter }))
    }

    PagHideShow = () => {
        console.log("pagination");
        // this.setState({pagination: !this.state.pagination})
        this.setState((prevState) => ({ pagination: !prevState.pagination }))
    }
    onRow = (record) => ({
        onContextMenu: event => {
            event.preventDefault()
            if (!this.state.visible) {
                const that = this
                document.addEventListener(`click`, function onClickOutside() {
                    that.setState({ popup: { visible: false } })
                    document.removeEventListener(`click`, onClickOutside)
                })
            }
            this.setState({
                popup: {
                    record,
                    visible: true,
                    x: event.clientX,
                    y: event.clientY
                }
            })
        }
    })

    EditRow(id) {
        console.log('id', id.original);
        alert(JSON.stringify(id.original))
    }

    componentDidMount() {
        if (localStorage.getItem("toggleColumns")) {
            var toggle = JSON.parse(localStorage.getItem("toggleColumns"))
            this.setState({ columns: [...toggle] })

        }

    }

    toggleColumn = props => {
        const newState = [...this.state.columns];
        const { name } = props.target;
        // console.log(e.target);
        newState.map(column => {
            if (column.Header === name) {
                column.show = !column.show
            }
        });
        // this.setState({columns:newState});
        localStorage.setItem("toggleColumns", JSON.stringify(newState));
    };


    render() {
        // this.toggleSwitch = () => {
        //     var conn = document.getElementById("check");
        //     if (conn.value === "off") {
        //         conn.value = "on";
        //         // this.setState({grpName:[]})
        //     }
        //     else {
        //         conn.value = "off";
        //         // this.setState({grpName:["groupname"]})
        //     }
        // }
        // <ProfitLoss data={this.state.ProfitLoss} />

       

        const options = ["groupname", "symbol", "userid", "accountcode", "expirydate", "excode", "sripcode", "securitytype", "strikeprice"];



        return (
            <div>

                <div className='filter'>
                    {/* <button onClick={this.Downloadpdf} className="export-btn"><i className="fas fa-file-pdf"></i></button>
                    <CSVLink {...csvReports} className="export-btn">
                        <button><i className="fas fa-file-csv"></i></button>
                    </CSVLink> */}
                    <div className='hide-show-column'>
                        {this.state.columns.map((column) => (
                            <Checkbox
                                key={column.Header}
                                label={column.Header}
                                isSelected={column.show}
                                onCheckboxChange={this.toggleColumn}
                            />
                        ))
                        }
                    </div>
                    <div className='grouping'>
                        <Multiselect
                            options={options}
                            isObject={false}
                            onSelect={(e) => { this.setState({ grpby: e }) }}
                            showCheckbox={true}
                            hidePlaceholder={true}
                            showArrow={true}
                        />
                    </div>
                </div>
                <div>
                    {/* {this.buildContextMenuJSX()}
                    <ContextMenuTrigger id="sample-menu"> */}

                    <ReactTableFixedColumns
                        data={this.props.data}
                        className="-highlight"
                        style={{
                            // height: "600px",
                            marign: 0
                            // This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        // resolveData={data => data.map(row => row)} 
                        columns={this.state.columns}
                        filterable={this.state.filter}
                        minRows={0}
                        // showPagination={false}
                        showPagination={this.state.pagination}
                        // pivotBy={this.state.grpName}
                        freezeWhenExpanded={true}
                        pivotBy={this.state.grpby == "" ? [] : this.state.grpby}
                        getTrProps={this.onRow}
                        noDataText={"Wait some time we are working on..."}
                    // defaultPageSize={10}
                    />
                    <Popup
                        data={this.props.data}
                        {...this.state.popup}
                        rowFilter={this.state.filter}
                        buttonClick={this.FilterBtn}
                        paginationbtn={this.PagHideShow}
                        paginationCont={this.state.pagination}
                    />


                    {/* <CSV1 data={this.props.data}/> */}
                    {/* </ContextMenuTrigger> */}
                </div>
            </div>
        )
    }
}
const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <div>
        <label>
            <input
                type="checkbox"
                name={label}

                checked={isSelected}
                onChange={onCheckboxChange}
                className="form-check-input"
            />
            {label}
        </label>
    </div>
);