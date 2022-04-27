import React from 'react'
import ReactTable from 'react-table'

const ProfitLoss = (props) => {
    const [data,setData] = React.useState([])
    // console.log(props.data);

    const columns = [
        
        {Header:"userid" ,accessor:"userid",Footer:"userid"},
        {Header:"bfcme" ,accessor:"bfcme",Footer:"bfcme"},
        {Header:"bfcme_dgcx_inr" ,accessor:"bfcme_dgcx_inr",Footer:"bfcme_dgcx_inr"},
        {Header:"bfcme_dgcx_mcx_inr" ,accessor:"bfcme_dgcx_mcx_inr",Footer:"bfcme_dgcx_mcx_inr"},
        {Header:"bfcme_dgcx_usd" ,accessor:"bfcme_dgcx_usd",Footer:"bfcme_dgcx_usd"},
        {Header:"bfdgcx" ,accessor:"bfdgcx",Footer:"bfdgcx"},
        {Header:"bfmcxf" ,accessor:"bfmcxf",Footer:"bfmcxf"},
        {Header:"currencyrate" ,accessor:"currencyrate",Footer:"currencyrate"},
        {Header:"groupname" ,accessor:"groupname",Footer:"groupname"},
        {Header:"live_cme_dgcx_inr" ,accessor:"live_cme_dgcx_inr",Footer:"live_cme_dgcx_inr"},
        {Header:"live_cme_dgcx_mcx_inr" ,accessor:"live_cme_dgcx_mcx_inr",Footer:"live_cme_dgcx_mcx_inr"},
        {Header:"livecme" ,accessor:"livecme",Footer:"livecme"},
        {Header:"livecme_dgcx_usd" ,accessor:"livecme_dgcx_usd",Footer:"livecme_dgcx_usd"},
        {Header:"livedgcx" ,accessor:"livedgcx",Footer:"livedgcx"},
        {Header:"livemcx" ,accessor:"livemcx",Footer:"livemcx"},
        {Header:"srno" ,accessor:"srno",Footer:"srno"},
        {Header:"total_cme_dgcx_inr" ,accessor:"total_cme_dgcx_inr",Footer:"total_cme_dgcx_inr"},
        {Header:"total_cme_dgcx_mcx_inr" ,accessor:"total_cme_dgcx_mcx_inr",Footer:"total_cme_dgcx_mcx_inr"},
        {Header:"totalcme" ,accessor:"totalcme",Footer:"totalcme"},
        {Header:"totalcme_dgcx_usd" ,accessor:"totalcme_dgcx_usd",Footer:"totalcme_dgcx_usd"},
        {Header:"totaldgcx" ,accessor:"totaldgcx",Footer:"totaldgcx"},
        {Header:"totalmcx" ,accessor:"totalmcx",Footer:"totalmcx"},
    ]
    React.useEffect(()=>{
if ((props.data)){
            // console.log(props.data);
            setData(props.data)
        }
    },[props.data])
   
    // console.log(data);
  return (
      <>
    <div>ProfitLoss</div>
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
                    // pivotBy={['userid']}
                    noDataText={"Wait some time we are working on..."}
                // defaultPageSize={10}
                />
</>
  )
}

export default ProfitLoss