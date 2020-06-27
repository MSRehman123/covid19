import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus, faShieldVirus, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "./covid.css";
import { Row, Col, Table } from "antd";
import "antd/dist/antd.css";

const columnsIndia = [
  {
    title: "State",
    dataIndex: "state"
  },
  {
    title: "Total Confirmed",
    dataIndex: "totalConfirmed",
    sorter: (a, b) => a.totalConfirmed - b.totalConfirmed
  },
  {
    title: "Total Deaths",
    dataIndex: "deaths",
    sorter: (a, b) => a.deaths - b.deaths
  },
  {
    title: "Total Recovered",
    dataIndex: "discharged",
    sorter: (a, b) => a.discharged - b.discharged
  },
];

class indiaCovid extends Component {
  // state to manipulate and store data.
  state = {
    indiaCovid: [],
    stateIndia: [],
  };

  componentDidMount() {
    // fetching data from api for india.
    axios.get("https://api.rootnet.in/covid19-in/stats/latest").then((res) => {
      const summary = res.data.data.summary;
      this.setState({ indiaCovid: summary });
      this.setState({
        stateIndia: res.data.data.regional.map((row) => ({
          state: row.loc,
          totalConfirmed: row.totalConfirmed,
          deaths: row.deaths,
          discharged: row.discharged,
          id: row.loc,
        })),
      });
    });
  }

  render() {
    return (
      <div>
        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                'India doing its best aganist Pandemic'
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                The statistics here are only related to india.<br/> If you wanna see
                the statistics related to all over the world please visit the world section.
              </p>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <FontAwesomeIcon icon={faVirus} class="text-Black-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.indiaCovid.total}
                  </h2>
                  <p class="leading-relaxed text-xl">Total Cases</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <FontAwesomeIcon icon={faSkullCrossbones} class="text-red-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.indiaCovid.deaths}
                  </h2>
                  <p class="leading-relaxed text-xl">Total Deaths</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <FontAwesomeIcon icon={faShieldVirus} class="text-yellow-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.indiaCovid.discharged}
                  </h2>
                  <p class="leading-relaxed text-xl">Total Recovered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="style-seven"/>
        <Row gutter={[8, 8]} className="indiaHeader">
          <Col span={8} className="bg-orange-500 rounded-lg"></Col>
          <Col span={8}>Covid In India</Col>
          <Col span={8} className="bg-green-600 rounded-lg"></Col>
        </Row>
        <section class="bg-green-500">
          <Table
            dataSource={this.state.stateIndia}
            tableLayout="auto"
            rowKey="id"
            columns={columnsIndia}
            indentSize={10}
            size="small"
          />
          </section>
      </div>
    );
  }
}

export default indiaCovid;
