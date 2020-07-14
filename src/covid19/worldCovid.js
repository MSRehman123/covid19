import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVirus,
  faShieldVirus,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./covid.css";
import { Table } from "antd";
import "antd/dist/antd.css";
import Search from "./search/search";
import Moment from "react-moment";
import Spinner from '../UI/spinner';

// object to store data.
const columns = [
  {
    title: "Country",
    dataIndex: "country",
    width: 120,
    fixed: 'left'
  },
  {
    title: "NewConfirmed",
    dataIndex: "NewConfirmed",
    sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
    width: 120
  },
  {
    title: "NewDeaths",
    dataIndex: "NewDeaths",
    sorter: (a, b) => a.NewRecovered - b.NewRecovered,
    width: 120
  },
  {
    title: "New Recovered",
    dataIndex: "NewRecovered",
    sorter: (a, b) => a.NewRecovered - b.NewRecovered,
    width: 120
  },
  {
    title: "Total Confirmed",
    dataIndex: "TotalConfirmed",
    sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
    width: 120
  },
  {
    title: "Total Deaths",
    dataIndex: "TotalDeaths",
    sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
    width: 120
  },
  {
    title: "Total Recovered",
    dataIndex: "TotalRecovered",
    sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
    width: 120
  },
];

class worldCovid extends Component {
  // state to manipulate and store data.
  state = {
    covid: {},
    covidCountries: [],
    covidGlobal: [],
    searchText: "",
    worldUpdated: "",
    Loading: true
  };

  componentDidMount() {
    // fetching data from api for all the countries.
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        const updated = res.data.Date;
        const summary = res.data;
        const global = res.data.Global;
        this.setState({ covid: summary, worldUpdated: updated });
        this.setState({
          covidCountries: res.data.Countries.map((row) => ({
            country: row.Country,
            NewConfirmed: row.NewConfirmed,
            NewDeaths: row.NewDeaths,
            NewRecovered: row.NewRecovered,
            TotalConfirmed: row.TotalConfirmed,
            TotalDeaths: row.TotalDeaths,
            TotalRecovered: row.TotalRecovered,
            id: row.CountryCode,
          })),
        });
        this.setState({ covidGlobal: global });
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
    // to get desired country data when searched
    const filteredCountries = this.state.covidCountries.filter((name) => {
      return name.country
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase());
    });
    return (
      this.state.Loading ? <Spinner loading={this.state.Loading} /> :
      <div>
        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <b>Last updated</b>
              <Moment fromNow class="tracking-widest text-center">{this.state.updated}</Moment>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                'Whole world is fighting this Pandemic'
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                The statistics collect here are from reliable sources such as
                W.H.O and other organizations.
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
                    {this.state.covidGlobal.TotalConfirmed}
                  </h2>
                  <p class="leading-relaxed text-xl">Global Cases</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FontAwesomeIcon
                    icon={faSkullCrossbones}
                    class="text-red-500 w-12 h-12 mb-3 inline-block"
                  ></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.covidGlobal.TotalDeaths}
                  </h2>
                  <p class="leading-relaxed text-xl">Global Deaths</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <FontAwesomeIcon
                    icon={faShieldVirus}
                    class="text-yellow-500 w-12 h-12 mb-3 inline-block"
                  ></FontAwesomeIcon>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    {this.state.covidGlobal.TotalRecovered}
                  </h2>
                  <p class="leading-relaxed text-xl">Global Recovered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="style-seven" />
        <div>
          <h1 class="flex text-left text-white p-2 md:w-1/6 sm:w-1/2 w-full bg-green-500">
            World Summary
          </h1>
        </div>
        <Search placeholder="search country here" onChange={this.onChange} />
        <section class="bg-green-500 mx-auto">
          <div className="tabledata">
            <Table
              dataSource={filteredCountries}
              tableLayout="auto"
              rowKey="id"
              columns={columns}
              indentSize={10}
              size="small"
              scroll={{ x: 200 }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default worldCovid;
