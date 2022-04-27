import React from 'react'
// import React, { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import SpreadBook from '../AllTable/SpreadBook';
import ProfitLoss from '../AllTable/ProfitLoss';
import MainTable from '../AllTable/MainTable';
// import Table from '../Table'
// import ProfitLoss from '../ProfitLoss'
// import SpreadBook from '../SpreadBook'
// import Test from './Test'
 import './Tabs.scss'


// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default class TabsNab extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        currentData: [],
        prevdata: [],
        SpreadBook:[],
        ProfitLoss:[],
        openTab:1,
      };
      this.ws = new WebSocket("ws://94.200.161.170:6060/MCX/api");
    }
  render() {
    this.ws.onopen = () => {
        console.log('Opened Connection!')


        this.msg = { "method": "auth", "params": { "UserId": "7", "Username": "vishal", "AccessUser": "C001,C0010,C0011,C0012,C0013,C0014,C0015,C002,C003,C004,C005,C006,C007,C008,C009,MCD1,RISE2,RISE3,RISE4,RISE5", "QtyFlag": "Open", "AutoExpiry": "OFF" } }
        this.msg2 = { "method": "ServerONOFF", "params": { "value": true } }
        this.msg3 = { "method": "getAllData" }

        this.ws.send(JSON.stringify(this.msg))
        this.ws.send(JSON.stringify(this.msg2))
        this.ws.send(JSON.stringify(this.msg3))

    };

    this.ws.onmessage = (event) => {
        // ProfitLoss SpreadBook ProfitLoss TradeSender-"Onine/Offline"
        // console.log(JSON.parse(event.data));
        this.data = JSON.parse(event.data).TradeSummary;
        var conn = document.getElementById("check");
        if (conn.value === "on") {
            if (this.data === undefined || this.data.length === 0) {
                this.setState({ currentData: this.state.prevdata });
            }
            else {
                //   console.log(this.data);
                this.setState({ currentData: this.data });
                this.setState({ ProfitLoss: JSON.parse(event.data).ProfitLoss });
                this.setState({ SpreadBook: JSON.parse(event.data).SpreadBook });
                
                this.setState({ prevdata: this.data });
            }
        }
    };

    this.ws.onclose = () => {
        console.log('Closed Connection!')
    };
    return (
        <div>



        <Disclosure as="nav" className="bg-gray-800 shadow-lg pt-4 rounded text-white-500 align-center sm:m-0 tabsnab">
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap px-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2  last:mr-0 flex-auto mb-2 text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal  " +
                                    (this.state.openTab === 1
                                        ? "text-white-400 bg-gray-900"
                                        : "text-white-500 bg-gray-800")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({openTab:1});
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Net Position
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 mb-2 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                                    (this.state.openTab === 2
                                        ? "text-white-400 bg-gray-900"
                                        : "text-white-500 bg-gray-800")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({openTab:2});
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Profit & Loss All
                            </a>
                        </li>


                        <li className="-mb-px mr-2 last:mr-0 mb-2 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                                    (this.state.openTab === 3
                                        ? "text-white-400 bg-gray-900"
                                        : "text-white-500 bg-gray-800")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({openTab:3});
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Profit & Loss (USD)
                            </a>
                        </li>



                        <li className="-mb-px mr-2 last:mr-0 mb-2 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                                    (this.state.openTab === 4
                                        ? "text-white-400 bg-gray-900"
                                        : "text-white-500 bg-gray-800")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({openTab:4});
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                TradeBook
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 mb-2 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                                    (this.state.openTab === 5
                                        ? "text-white-400 bg-gray-900"
                                        : "text-white-500 bg-gray-800")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({openTab:5});
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Trade Book Algo
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                                    (this.state.openTab === 6
                                        ? "text-white-400 bg-gray-900"
                                        : "text-white-500 bg-gray-800")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({openTab:6});
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Trade Book Manual
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal " +
                                    (this.state.openTab === 7
                                        ? "text-white-400 bg-gray-900"
                                        : "text-white-500 bg-gray-800")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({openTab:7});
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Spread Book
                            </a>
                        </li>

                    </ul>
                    <div className="">
                        <div className="px-4 py-4 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={this.state.openTab === 1 ? "block" : "hidden"} id="link1">
                                {(this.state.openTab===1)?<MainTable data = {this.state.currentData}/>:null}
                                </div>
                                <div className={this.state.openTab === 2 ? "block" : "hidden"} id="link2">
                                {(this.state.openTab===2)?<ProfitLoss data = {this.state.ProfitLoss}/>:null}
                                </div>
                                <div className={this.state.openTab === 7 ? "block" : "hidden"} id="link3">
                                {(this.state.openTab===7)? <SpreadBook data = {this.state.SpreadBook}/>:null}
                                </div>
                                <div className={this.state.openTab === 4 ? "block" : "hidden"} id="link1">
                                    <a href="https://codepen.io/maydie/pen/WvpzPG" target="_blank">Stack linear layerd chart react</a><br />
                                    <a href="https://react-chartjs-2.js.org/examples/multitype-chart" target="_blank">Multitype Chart or divergent-bars</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>


    </div>
    )
  }
}