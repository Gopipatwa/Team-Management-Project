import React, { Component } from 'react'

export class DownloadPdf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grpby: []
        };
    }
    Downloadpdf = () => {
        var doc = new jsPDF({
            orientation: "landscape",
            size: "A4"
        });
        const headers = [['srno', 'userid', 'accountcode', 'symbol', 'expirydate', 'excode', 'scripcode', 'securitytype', 'strikeprice', 'opttype', 'openqty', 'openrate']];
        const data = this.props.data.map(elt => [elt.srno, elt.userid, elt.accountcode, elt.symbol, elt.expirydate, elt.excode, elt.scripcode, elt.securitytype, elt.strikeprice, elt.opttype, elt.openqty, elt.openrate]);
        let content = {
            theme: "grid",
            // styles: {fontSize:100 },
            head: headers,
            body: data
        };
        doc.autoTable(content);
        doc.save("report.pdf");

    }
    render() {
        const options = ["groupname", "symbol", "userid", "accountcode", "expirydate", "excode", "sripcode", "securitytype", "strikeprice", "qtyflag"];
        return (
            <div>
                <div style={{ width: "auto", scrollBehavior: "smooth" }}>
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
        )
    }
}

export default DownloadPdf