import React, { useState } from "react"
import './Popup.scss'
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import Multiselect from 'multiselect-react-dropdown';


const Popup = (props) => {
  // ( props,{ data, visible, x, y})
  // console.log(props)
  const Delete = () => {
    console.log("delete")
  }
  // console.log("props", data)
  const csvReports = {
    srno: 'Cosmin-trade.csv',
    data: props.data
  }

  const Downloadpdf = () => {
    var doc = new jsPDF({
      orientation: "landscape",
      size: "A4"
    });
    const headers = [['srno', 'userid', 'accountcode', 'symbol', 'expirydate', 'excode', 'scripcode', 'securitytype', 'strikeprice', 'opttype', 'openqty', 'openrate']];
    const data1 = props.data.map(elt => [elt.srno, elt.userid, elt.accountcode, elt.symbol, elt.expirydate, elt.excode, elt.scripcode, elt.securitytype, elt.strikeprice, elt.opttype, elt.openqty, elt.openrate]);
    let content = {
      theme: "grid",
      // styles: {fontSize:100 },
      head: headers,
      body: data1
    };
    doc.autoTable(content);
    doc.save("report.pdf");

  }

  return (
    <>
      {
        props.visible &&

        < ul className="popup" style={{ left: `${props.x}px`, top: `${props.y}px` }}>
          <li>Missing Trade</li>
          <li onClick={Delete}>
            <button>Delete Duplication</button></li>
          <li>Troubleshoot</li>
          <hr />
          <li>
            <CSVLink {...csvReports}>
              <button >
                CSV
              </button>
            </CSVLink>
          </li>
          <li >
            <button onClick={Downloadpdf}>
              PDF
            </button>
          </li>
          <hr />

          {(props.rowFilter) ?
            <li onClick={props.buttonClick}>Hide Filter
            </li> :
            <li onClick={props.buttonClick}>Show Filter</li>
          }

          {(props.paginationCont) ?
            <li onClick={props.paginationbtn}>Hide Pagination</li>
            :
            <li onClick={props.paginationbtn}>Show Pagination</li>
          }

        </ul >
      }

    </>
  )
}



export default Popup