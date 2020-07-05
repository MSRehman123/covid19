import React, { useEffect, useState } from "react";
import Quote from '../quotes/quote';
import Spinner from '../UI/spinner';

export default function CovidHomePage() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    Loading ? <Spinner loading={Loading} /> :
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Covid19
          </h1>
          <p class="mb-8 leading-relaxed">
            As we all know the covid19 is accelarating this days. 
            we have gathered the data here related to the covid19 from W.H.O 
            and others organization. Visit the below links for the details.<br/>
            keep Social Distancing, wash your hands hands frequently,
            and avoid large gatherings as much as possible.
            <b> Stay in Home and Stay Safe..</b>
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <a class="text-white hover:text-gray-900" href="/worldcovid">World</a>
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
            <a class="text-gray-700 hover:text-gray-900" href="/indiacovid">India</a>
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="cornavirus"
            src="https://source.unsplash.com/720x600/?covid19,coronavirus"
          />
        </div>
      </div>
      <Quote/>
    </section>
  );
}
