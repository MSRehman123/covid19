import React, { Component } from "react";
import axios from "axios";
import { Table } from "antd";
import "antd/dist/antd.css";
import Spinner from '../../UI/spinner';

const columnsDistrict = [
  {
    title: "State",
    dataIndex: "State",
    width: 150,
    fixed: 'left'
  },
  {
    title: "District",
    dataIndex: "District",
    width: 150,
    fixed: 'left'
  },
  {
    title: "Active",
    dataIndex: "Active",
    width: 150
  },
  {
    title: "Confirmed",
    dataIndex: "Confirmed",
    width: 150
  },
  {
    title: "Deceased",
    dataIndex: "Deceased",
    width: 150
  },
  {
    title: "Recovered",
    dataIndex: "Recovered",
    width: 150
  }
];

class Districtwise extends Component {
  state = {
    district: [],
    indState: [],
    StDist: [],
    data: [],
    show: false,
    Loading: true
  };

  getDistData = () => {
    //https://api.covid19india.org/v3/timeseries.json
      axios.get('https://api.covid19india.org/state_district_wise.json')
      .then((res) => {
        this.setState({ district: res.data });
        const data = this.state.district;
        this.setState({ indState: Object.keys(data) });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getDistData()
    setTimeout(() => {
      this.setState({Loading: false})
    }, 3000);
  }

  getState = (state) => {
    const myState = state;
    this.setState({ myState: myState });
    const STdata = this.state.district[myState].districtData;
    this.setState({ StDist: Object.keys(STdata) });
  };

  getDistrict = (district) => {
    const myDistrict = district;
    this.setState({ myDistrict: myDistrict });
  };

  onSearch = () => {
    const stateCode = this.state.district[this.state.myState].statecode;
    const STdata = this.state.district[this.state.myState].districtData;
    const Distdata = STdata[this.state.myDistrict];
    if (this.state.myDistrict) {
    this.setState({
      data: [{
        State: stateCode,
        District: this.state.myDistrict,
        Active: Distdata.active,
        Confirmed: Distdata.confirmed,
        Deceased: Distdata.deceased,
        Recovered: Distdata.recovered,
      }]
    });
  }
    this.setState({show: true});
  };

  render() {
    const data = this.state.data ? this.state.data : '';
    return (
      this.state.Loading ? <Spinner loading={this.state.Loading} /> :
      <div>
        <form class="flex flex-wrap text-center mt-10">
          <section class="p-4 md:w-1/2 sm:w-1/2 w-full">
        <select 
        onChange={(e) => this.getState(e.target.value)} 
        class="bg-grey-200 w-full text-align:left tracking-widest font-semibold text-gray-500 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500">
          {!this.state.myState ? <option key='Select state' >Select state...</option> : ''}
          {this.state.indState &&
            this.state.indState.map((state) => {
              return (
                <option key={state}>
                  {state}
                </option>
              );
            })}
        </select>
        </section>
        <section class="p-4 md:w-1/2 sm:w-1/2 w-full">
        <select
          onChange={(e) => this.getDistrict(e.target.value)}
          class="bg-grey-200 w-full text-align:left tracking-widest font-semibold text-gray-500 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500">
          {!this.state.myDistrict ? <option key='Select District' >Select District...</option> : ''}
          { this.state.StDist &&
            this.state.StDist.map((district) => {
              return (
                <option key={district}>
                  {district}
                </option>
              );
            })}
        </select>
        </section>
        </form>
        <section class="text-center relative mb-10 mt-5">
        <button
          onClick={() => {
            this.onSearch();
          }}
          disabled={this.state.myState ? false : true}
          class="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0"
        >
          <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          Search
        </button>
        </section>
        {this.state.show ?
        <section class="bg-green-300 mb-10 pt-3 pb-3">
          <Table
            dataSource={data}
            tableLayout="auto"
            rowKey="State"
            columns={columnsDistrict}
            size="small"
            pagination={false}
            scroll={{ x: 200 }}
          />
        </section> : ''}
      </div>
    );
  }
}

export default Districtwise;
