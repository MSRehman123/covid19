import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

export default function pageNotFound() {
  return (
    <div class="flex flex-wrap text-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-center">
        <img
          class="object-cover object-center rounded"
          alt="Page Not Found"
          src="https://source.unsplash.com/720x600/?404, error"
        />
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-center">
        <p class="title-font md:w-1/2 sm:text-3xl text-3xl mb-3 font-medium text-red-600">
          Page Not Found
        </p>
        <p>wait we found something its corona</p>
        <FontAwesomeIcon
          icon={faVirus}
          class="text-Black-500 w-12 h-12 mb-3 inline-block"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
