import React from 'react'
import ReactTable from 'react-table'

const SpreadBook = (props) => {
    const [data, setData] = React.useState([])
    const [prev, setPrev] = React.useState([])
    // console.log(props.data);

    const columns = [

        { Header: "srno", accessor: "srno", Footer: "srno" },
        { Header: "userid", accessor: "userid", Footer: "userid" },
        { Header: "symbol1", accessor: "symbol1", Footer: "symbol1" },
        { Header: "symbol2", accessor: "symbol2", Footer: "symbol2" },
        { Header: "symbol3", accessor: "symbol3", Footer: "symbol3" },
        { Header: "symbol4", accessor: "symbol4", Footer: "symbol4" },
        { Header: "spreadside", accessor: "spreadside", Footer: "spreadside" },
        { Header: "spinname", accessor: "spinname", Footer: "spinname" },
        { Header: "referenceno", accessor: "referenceno", Footer: "referenceno" },
        { Header: "qty1", accessor: "qty1", Footer: "qty1" },
        { Header: "qty2", accessor: "qty2", Footer: "qty2" },
        { Header: "qty3", accessor: "qty3", Footer: "qty3" },
        { Header: "qty4", accessor: "qty4", Footer: "qty4" },
        { Header: "price1", accessor: "price1", Footer: "price1" },
        { Header: "price2", accessor: "price2", Footer: "price2" },
        { Header: "price3", accessor: "price3", Footer: "price3" },
        { Header: "price4", accessor: "price4", Footer: "price4" },
        { Header: "paritylive", accessor: "paritylive", Footer: "paritylive" },
        { Header: "parity", accessor: "parity", Footer: "parity" },
        { Header: "expirydate1", accessor: "expirydate1", Footer: "expirydate1" },
        { Header: "expirydate2", accessor: "expirydate2", Footer: "expirydate2" },
        { Header: "expirydate3", accessor: "expirydate3", Footer: "expirydate3" },
        { Header: "expirydate4", accessor: "expirydate4", Footer: "expirydate4" },
        { Header: "date", accessor: "date", Footer: "date" },
        { Header: "disparity", accessor: "disparity", Footer: "disparity" },
        { Header: "entrytime", accessor: "entrytime", Footer: "entrytime" }
    ]
    React.useEffect(() => {
        if (props.data != [] || props.data != undefined || props.data.length > 0) {
            // console.log(props.data);
            setData(props.data)
            // console.log("hello");
            setPrev(props.data)
        }
        else {
            console.log(data);
            setData(prev)
        }
    }, [props.data])

    // console.log(data);
    return (
        <>
            <div>SpreadBook</div>
            <ReactTable
                data={data}
                className="-striped -highlight"
                // resolveData={data => data.map(row => row)} 
                columns={columns}
                filterable
                minRows={0}
                // pivotBy={this.state.grpName}
                // pivotBy={['groupname']}
                // freezeWhenExpanded="true"
                // pivotBy={['userid','symbol1','symbol2','symbol3']}
                noDataText={"Wait some time we are working on..."}
            // defaultPageSize={10}
            />
        </>
    )
}

export default SpreadBook