import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVirus,
  faShieldVirus,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./covid.css";
import { Row, Col, Table } from "antd";
import "antd/dist/antd.css";
import Search from "./search/search";
import Spinner from '../UI/spinner';
import Moment from 'react-moment';

const columnsIndia = [
  {
    title: "State",
    dataIndex: "state",
    width: 150,
    fixed: 'left'
  },
  {
    title: "Total Confirmed",
    dataIndex: "totalConfirmed",
    sorter: (a, b) => a.totalConfirmed - b.totalConfirmed,
    width: 150
  },
  {
    title: "Total Deaths",
    dataIndex: "deaths",
    sorter: (a, b) => a.deaths - b.deaths,
    width: 150
  },
  {
    title: "Total Recovered",
    dataIndex: "discharged",
    sorter: (a, b) => a.discharged - b.discharged,
    width: 150
  },
];

class indiaCovid extends Component {
  // state to manipulate and store data.
  state = {
    indiaCovid: [],
    stateIndia: [],
    searchText: '',
    indiaUpdated: '',
    Loading: true
  };

  componentDidMount() {
    // fetching data from api for india.
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        const summary = res.data.data.summary;
        const updated = res.data.lastRefreshed;
        this.setState({ indiaCovid: summary, indiaUpdated: updated });
        this.setState({
          stateIndia: res.data.data.regional.map((row) => ({
            state: row.loc,
            totalConfirmed: row.totalConfirmed,
            deaths: row.deaths,
            discharged: row.discharged,
            id: row.loc,
          })),
        });
      })
      .catch((err) => <h1>Oops Reload again</h1>);
      setTimeout(() => {
        this.setState({Loading: false})
      }, 3000)
  }

  onChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    // to get desired state data when searched
    const filteredStates = this.state.stateIndia.filter((name) => {
      return name.state
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase());
    });
    return (
      this.state.Loading? <Spinner loading={this.state.Loading} /> :
      <div>
        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <b>Last updated</b>
              <Moment fromNow class="tracking-widest text-center">{this.state.indiaUpdated}</Moment>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                'India doing its best aganist Pandemic'
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                The statistics here are only related to india.
                <br /> To see data related to your <b>District</b> <a href="/india/districts" class="text-indigo-500">Click Here</a>
              </p>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FontAwesomeIcon
                    icon={faVirus}
                    class="text-Black-500 w-12 h-12 mb-3 inline-block"
                  ></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.indiaCovid.total}
                  </h2>
                  <p class="leading-relaxed text-xl">Total Cases</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FontAwesomeIcon
                    icon={faSkullCrossbones}
                    class="text-red-500 w-12 h-12 mb-3 inline-block"
                  ></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.indiaCovid.deaths}
                  </h2>
                  <p class="leading-relaxed text-xl">Total Deaths</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FontAwesomeIcon
                    icon={faShieldVirus}
                    class="text-yellow-500 w-12 h-12 mb-3 inline-block"
                  ></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.indiaCovid.discharged}
                  </h2>
                  <p class="leading-relaxed text-xl">Total Recovered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="style-seven" />
        <Row gutter={[8, 8]} className="indiaHeader">
          <Col span={8} className="bg-orange-500 rounded-lg"></Col>
          <Col span={8}>Covid In India</Col>
          <Col span={8} className="bg-green-600 rounded-lg"></Col>
        </Row>
        <Search placeholder="search state here" onChange={this.onChange} />
        <section class="bg-green-500">
          <Table
            dataSource={filteredStates}
            tableLayout="auto"
            rowKey="id"
            columns={columnsIndia}
            indentSize={10}
            size="small"
            scroll={{ x: 200 }}
          />
        </section>
      </div>
    );
  }
}

export default indiaCovid;
