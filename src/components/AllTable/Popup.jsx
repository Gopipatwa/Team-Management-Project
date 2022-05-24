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
      size: "A4",
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
    doc.text('The text', doc.internal.pageSize.width, 50, null, null, 'center');

  }

  return (
    <>
      {
        props.visible &&

        < ul className="popup" style={{ left: `${props.x}px`, top: `${props.y}px` }}>
          <li className="list" onClick={Delete}>
            <button>Delete Duplication</button></li>
          <li className="list">Troubleshoot</li>
          <hr />

          <div className="dropdown">
            <li className="list dropbtn" >Export</li>
            <div className="dropdown-content">
              <li className="list">

                <CSVLink {...csvReports}>
                  <button >
                    CSV
                  </button>
                </CSVLink>
              </li>
              <li className="list">
                <button onClick={Downloadpdf}>
                  PDF
                </button>
              </li>
            </div>
          </div>
          <hr />


          <div className="dropdown">
            <li className="list dropbtn" >Property</li>
            <div className="dropdown-content">
              <li className="list">

                {(props.rowFilter) ?
                  <span onClick={props.buttonClick}>Hide Filter
                  </span> :
                  <span onClick={props.buttonClick}>Show Filter</span>
                }
              </li>
              <li className="list">
                {(props.paginationCont) ?
                  <span onClick={props.paginationbtn}>Hide Pagination</span>
                  :
                  <span onClick={props.paginationbtn}>Show Pagination</span>
                }
              </li>
            </div>
          </div>

          {/* {(props.rowFilter) ?
            <li onClick={props.buttonClick}>Hide Filter
            </li> :
            <li onClick={props.buttonClick}>Show Filter</li>
          } */}
          {/* 
          {(props.paginationCont) ?
            <li onClick={props.paginationbtn}>Hide Pagination</li>
            :
            <li className="list" onClick={props.paginationbtn}>Show Pagination</li>
          } */}

        </ul >
      }

    </>
  )
}



export default Popup