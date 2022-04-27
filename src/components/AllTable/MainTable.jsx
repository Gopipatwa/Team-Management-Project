import React from 'react'
import ReactTable from 'react-table'
// import 'react-table/react-table.css'
import './Darkthemetable.css'
import _ from "lodash";
import ProfitLoss from './ProfitLoss';
 


export default class MainTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: [],
            prevdata: [],
            SpreadBook:[],
            ProfitLoss:[],
            grpName:[]
        };
    }

    EditRow(id){
        console.log(id.original);
        alert(JSON.stringify(id.original))
      }

    render() {
        this.toggleSwitch = () => {
            var conn = document.getElementById("check");
            if (conn.value === "off") {
                conn.value = "on";
                // this.setState({grpName:[]})
            }
            else {
                conn.value = "off";
                // this.setState({grpName:["groupname"]})
            }
        }
        <ProfitLoss data={this.state.ProfitLoss}/>

        const columns = [
            {
                Header: 'srno', accessor: 'srno', Footer: (row) => {
                    const length = row.data.length;
                    // const ageSum = row.data
                    //   .map(({ age }) => age)
                    //   .reduce((a, b) => a + b, 0);
                    // const average = Math.round(ageSum / length);
                    return <div>Total: {row.data.length}</div>;
                }
            },
            { Header: 'userid', accessor: 'userid', Footer: "test", filterMethod: (filter, row) => row[filter.id].toLowerCase().startsWith(filter.value.toLowerCase()) },
            { Header: 'accountcode', accessor: 'accountcode', Footer: "test" },
            { Header: 'symbol', accessor: 'symbol', Footer: "test" },
            { Header: 'expirydate', accessor: 'expirydate', Footer: "test", },
            { Header: 'excode', accessor: 'excode', Footer: "test" },
            { Header: 'scripcode', accessor: 'scripcode', Footer: "test" },
            { Header: 'securitytype', accessor: 'securitytype', Footer: "test" },
            {
                Header: 'strikeprice', accessor: 'strikeprice', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'opttype', accessor: 'opttype', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return (<div>{ltpsum.toString()}</div>);
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'openqty', accessor: 'openqty', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values)),Cell: row => (
                    <div
                        style={{
                            color: (row.value >0) ? "green" : "red",
                        }}
                    >
                        {row.value}
                    </div>
                )
            },
            {
                Header: 'openrate', accessor: 'openrate', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'openamt', accessor: 'openamt', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values)),Cell: row => (
                    <div
                        style={{
                            color: (row.value >0) ? "green" : "red",
                        }}
                    >
                        {row.value}
                    </div>
                )
            },
            {
                Header: 'buyqty', accessor: 'buyqty', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'buyrate', accessor: 'buyrate', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'buyamt', accessor: 'buyamt', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'sellqty', accessor: 'sellqty', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'sellrate', accessor: 'sellrate', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'sellamt', accessor: 'sellamt', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'netqty', accessor: 'netqty', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                },Cell: row => (
                    <div
                        style={{
                            color: (row.value >0) ? "green" : "red",
                        }}
                    >
                        {row.value}
                    </div>
                ), aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'netrate', accessor: 'netrate', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'netamt', accessor: 'netamt', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'closeqty', accessor: 'closeqty', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values)),Cell: row => (
                    <div
                        style={{
                            color: (row.value >0) ? "green" : "red",
                        }}
                    >
                        {row.value}
                    </div>
                )
            },
            {
                Header: 'closerate', accessor: 'closerate', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'closeamt', accessor: 'closeamt', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'prebrk', accessor: 'prebrk', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'calval', accessor: 'calval', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'settalmentrate', accessor: 'settalmentrate', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'buybrokerage', accessor: 'buybrokerage', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'sellbrokerage', accessor: 'sellbrokerage', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            { Header: 'datetime', accessor: 'datetime', Footer: "test", aggregate: (values, rows) => _.round(_.sum(values)) },
            {
                Header: 'bfmtm', accessor: 'bfmtm', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'ratio', accessor: 'ratio', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'margin', accessor: 'margin', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'marginamt', accessor: 'marginamt', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'ltp', accessor: 'ltp', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }
            },
            {
                Header: 'livemtm', accessor: 'livemtm', aggregate: (values, rows) => _.round(_.sum(values)), Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }
            },
            {
                Header: 'todaysmtm', accessor: 'todaysmtm', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'todaybrk', accessor: 'todaybrk', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'premtm', accessor: 'premtm', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'pretmtm', accessor: 'pretmtm', Footer: (row) => {
                    const name = row.column.Header
                    const ltpsum = _.round(_.sum((row.data).map((dt) => { return dt[name] })), 2)
                    return <div>{ltpsum}</div>;
                }, aggregate: (values, rows) => _.round(_.sum(values))
            },
            {
                Header: 'netmtm', accessor: 'netmtm', Footer: (row) => {
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
                Header: 'qtyflag', accessor: 'qtyflag', Footer: "test", aggregate: (values, rows) => _.round(_.sum(values)), Cell: row => (
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
            { Header: 'groupname', accessor: 'groupname', Footer: "test" },
            {
                Header:"Actions",
                Cell: props =>{
                  return (
                  <button className='' style={{'background':'red',color:"#fff",border:"none",cursor:'pointer',padding:'3px 5px',borderRadius:3,boxShadow:"0 0 5px black"}}
                  onClick={()=>{
                    // console.log("Props",props)
                    this.EditRow(props);
                  }}
                  >View</button>
                    )   
                },
                style:{textAlign:'center'},
                filterable:false,
                sortable:false,
                
                width:100,
                maxWidth:100,
                minWidth:100
              }

        ]
        return (
            <div>
                feed Stop:<input type={'checkbox'} style={{}} onClick={this.toggleSwitch} id={'check'} />

                <ReactTable
                    data={this.props.data}
                    className="-striped -highlight"
                    style={{
                        height: "600px",
                        marign:0 // This will force the table body to overflow and scroll, since there is not enough room
                      }}
                    // resolveData={data => data.map(row => row)} 
                    columns={columns}
                    filterable
                    minRows={0}
                    // pivotBy={this.state.grpName}
                    // freezeWhenExpanded="true"
                    // pivotBy={['groupname','userid','accountcode','symbol','expirydate','excode','scripcode','securitytype']}

                    noDataText={"Wait some time we are working on..."}
                // defaultPageSize={10}
                />
            </div>
        )
    }
}
