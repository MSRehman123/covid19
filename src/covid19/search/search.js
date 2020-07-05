import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation
} from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <section class="bg-white shadow p-4 flex">
      <span class="w-50 flex justify-end items-left text-gray-500 p-2">
        <FontAwesomeIcon icon={faSearchLocation} size="2x">search</FontAwesomeIcon>
      </span>
      <input
        class="bg-grey-200 w-10 text-align:left appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </section>
  );
};

export default Search;
