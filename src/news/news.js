import React, { useState, useEffect } from "react";
import axios from "axios";
import xmlToJson from "../logic/xmlToJson";
import Moment from "moment";
import Spinner from "../UI/spinner";

function News() {
  const [mainNews, setmainNews] = useState([]);
  const [disasterNews, setdisasterNews] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [desc, setdesc] = useState("");
  const [Loading, setLoading] = useState(true);
  const [tabtoggle, settabtoggle] = useState(true);
  const [data, setdata] = useState([]);

  const getMainNews = () => {
    let xmlDoc, jsonData, parser;
    axios
      .get(`https://www.who.int/rss-feeds/news-english.xml`)
      .then((res) => {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(res.data, "text/xml");
        jsonData = xmlToJson(xmlDoc);
        setmainNews(jsonData.rss.channel.item);
        setdata(jsonData.rss.channel.item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDiseaseOutbreakNews = () => {
    let xmlDoc, jsonData, parser;
    axios
      .get(`https://www.who.int/feeds/entity/csr/don/en/rss.xml`)
      .then((res) => {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(res.data, "text/xml");
        jsonData = xmlToJson(xmlDoc);
        setdisasterNews(jsonData.rss.channel.item);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMainNews();
    getDiseaseOutbreakNews();
  }, []);

  const showFeed = (news) => {
    setdesc(news.description);
    setToggle(false);
  };

  const goBack = (e) => {
    setToggle(true);
  };

  const setTab2 = () => {
    setdata(disasterNews);
    settabtoggle(false);
  };

  const setTab1 = () => {
    setdata(mainNews);
    settabtoggle(true);
  };

  return Loading ? (
    <Spinner loading={Loading} />
  ) : (
    <div>
      <div class="text-center">
        <section class="h-full  px-12 lg:px-4 pt-10 rounded-lg text-center relative">
        <a
          title="Font: Adrian Frutiger  Logotype: The World Health Organization / Public domain"
          href="https://commons.wikimedia.org/wiki/File:World_Health_Organization_Logo.svg"
          disabled
        >
          <img
            width="250"
            alt="World Health Organization Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/512px-World_Health_Organization_Logo.svg.png"
          />
        </a>
        </section>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base mt-5 font-semibold text-gray-700 body-font">
          The News Feeds here are from the reliable resources of WHO.
        </p>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <ul class="flex flex-wrap border-b mr-auto">
          <li
            class={
              tabtoggle === false
                ? "-mb-px mr-1 bg-white cursor-pointer inline-block border-b rounded-t py-2 px-4 text-blue-700 font-semibold"
                : "-mb-px mr-1 bg-white cursor-pointer inline-block border-l border-t border-r rounded-t py-2 px-4 text-red-500 font-semibold cursor-not-allowed"
            }
            onClick={() => setTab1()}
          >
            News Feed
          </li>
          <li
            class={
              tabtoggle === true
                ? "-mb-px mr-1 bg-white cursor-pointer inline-block border-b rounded-t py-2 px-4 text-blue-700 font-semibold"
                : "-mb-px mr-1 bg-white cursor-pointer inline-block border-l border-t border-r rounded-t py-2 px-4 text-red-500 font-semibold cursor-not-allowed"
            }
            onClick={() => setTab2()}
          >
            Major Disease Outbreaks
          </li>
        </ul>
        <div class="flex flex-wrap -m-4">
          {data &&
            data.length > 0 &&
            toggle &&
            data.map((news, i) => {
              const date = Moment(news.pubDate).format("MMMM Do YYYY");
              const day = Moment(news.pubDate).format("dddd");
              return (
                <div
                  class=" text-gray-700 body-font p-4 lg:w-1/3 w-full"
                  key={i}
                >
                  <div class="h-full bg-gray-200 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      {day}
                    </h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {date}
                    </h1>
                    <p class="leading-relaxed mb-3">
                      <b>{news.title}</b>
                    </p>
                    <li
                      class="text-indigo-500 inline-flex items-center cursor-pointer"
                      onClick={() => showFeed(news)}
                    >
                      See full news
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </li>
                    {/* <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                          <svg
                            class="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                          <svg
                            class="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div> */}
                  </div>
                </div>
              );
            })}
        </div>
        {!toggle && mainNews && mainNews.length ? (
          <div class="h-full body-font p-4 overflow-y-scroll h-32 bg-gray-200 mt-8 px-8 pt-10 pb-24 rounded-lg relative w-full">
            <div class="flex flex-row-reverse">
              <button
                onClick={(e) => goBack(e.target.value)}
                class="text-center text-blue-600 hover:text-red-500 font-semibold"
              >
                Go Back
              </button>
            </div>
            <p dangerouslySetInnerHTML={{ __html: desc }} class="pt-6"></p>
            <div class="text-center">
              <button
                onClick={(e) => goBack(e.target.value)}
                class="text-center text-blue-600 hover:text-red-500 font-semibold"
              >
                Go Back
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default News;
