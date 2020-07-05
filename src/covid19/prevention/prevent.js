import React, {useState, useEffect} from "react";
import Quote from "../../quotes/quote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../UI/spinner';
import { faHandsWash, faHandshakeSlash, faHeartbeat, faHeadSideCough, faLungsVirus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Prevent() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    Loading ? <Spinner loading={Loading} /> :
    <div>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                'Follow These Measures'
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                As covid19 has become a part of our life Follow this <b>Measures</b>..
              </p>
            </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faHandsWash} class="text-Black-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Wash Your Hands And Use Sanitizers
                </h2>
                <p class="leading-relaxed">
                  Wash your hands often for minimum of 20 seconds thoroughly.
                  <br />
                  Use alcohol based sanitizers.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faHandshakeSlash} class="text-Black-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Social Distancing
                </h2>
                <p class="leading-relaxed">
                  Avoid social gathering, crowded places as much as possible.
                  <br />
                  Maintain atleast a distance of 1 metre and even avoid touching
                  your face,mouth and eyes often.
                  <br />
                  Wear mask when you go out.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faHeartbeat} class="text-Black-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Maintain Good Immunity
                </h2>
                <p class="leading-relaxed">
                  Eat healthy foods and build up the immunity. <br />
                  If incase one is infected by virus it will help in fighting.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faHeadSideCough} class="text-Black-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Have Minor Symptons?
                </h2>
                <p class="leading-relaxed">
                  If you have minor cough, cold or fever <b>Stay Home</b> and{" "}
                  <b>Isolate</b> yourself.
                  <br />
                  Wear mask to avoid infecting others.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              5
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faLungsVirus} class="text-Black-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Difficulty In Breathing?
                </h2>
                <p class="leading-relaxed">
                  If you have cough or cold or fever and finding difficulty in
                  breathing seek <b>Medical Attention</b>.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              6
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <FontAwesomeIcon icon={faInfoCircle} class="text-Black-500 w-12 h-12 mb-3 inline-block"></FontAwesomeIcon>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Stay Away From Myths
                </h2>
                <p class="leading-relaxed">
                  Get right information from right resources Because not every
                  information is right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Quote />
    </div>
  );
}
