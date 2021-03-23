import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadSideMask } from "@fortawesome/free-solid-svg-icons";
import CovidVsWorldLogo from "../assets/covid19.png";
import { Link } from "react-router-dom";

export class header extends Component {
  state = {
    Loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Loading: false });
    }, 3000);
  }

  render() {
    return (
      <header
        class={
          this.state.Loading
            ? "text-gray-700 body-font opacity-25"
            : "text-gray-700 body-font"
        }
      >
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <img
              src={CovidVsWorldLogo}
              alt="Logo"
              class="w-10 h-10 text-white"
            />
            <span class="ml-3 text-xl">Covid World</span>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex items-center text-base justify-center">
            <Link
              class="mr-5 text-indigo-500 hover:text-gray-900 focus:text-green-500"
              to="/"
            >
              Home
            </Link>
            <Link
              class="mr-5 text-indigo-500 hover:text-gray-900 focus:text-green-500"
              to="/prevention"
            >
              Measures
            </Link>
            <Link
              class=" text-indigo-500 hover:text-gray-900 focus:text-green-500"
              to="/news"
            >
              News
            </Link>
            {/*<a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <button class="inline-flex items-center bg-indigo-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            <b>Stay Home, Stay Safe</b>
            <FontAwesomeIcon
              icon={faHeadSideMask}
              class="text-green-500 w-10 h-10 mb-2 inline-block"
            ></FontAwesomeIcon>
          </button>
        </div>
      </header>
    );
  }
}

export default header;
