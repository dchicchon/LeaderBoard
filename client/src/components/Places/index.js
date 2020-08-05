import React, { useEffect, useState } from "react";

// Common Component
import Container from "../Common/Container";

// Maps
import { SanFrancisco, NewYork } from "./Maps";
import "./style.css";

// Stretch Goal: Include at least 6 cities in final version of website
// Lots of data! Should definitely work on a database soon
const cityData = [
  {
    name: "san-francisco",
    formatName: "San Francisco",
    electionSite: "https://sfelections.sfgov.org/candidates",
    districts: [
      {
        name: "district-1",
        formatName: "District 1",
        supervisor: {
          name: "Sanda Lee Fewer",
          website: "https://en.wikipedia.org/wiki/Sandra_Lee_Fewer",
        },
        image: "",
        neighborhoods:
          "Inner Richmond, Central Richmond, Outer Richmond, Vista del Mar, Lone Mountain, Golden Gate Park, Lincoln Park, and University of San Francisco",
        electionYear: true,
        candidates: [
          {
            name: "Connie Chan",
            website: "http://conniechansf.com",
          },
          {
            name: "Sherman R. D'Silva",
            website: "www.dsilva2020.com",
          },
          {
            name: "Veronica Shinzato",
            website: "https://veronicashinzato.com/",
          },
          {
            name: "Amanda Inocencio",
            website: "",
          },
          {
            name: "Marjan Philhour",
            website: "www.votemarjan.com",
          },
          {
            name: "David Lee",
            website: "",
          },
          {
            name: "Andrew Majalya",
            website: "",
          },
        ],
      },
      {
        name: "district-2",
        formatName: "District 2",
        supervisor: "",
        supervisor: {
          name: "Catherine Stefani",
          website: "https://en.wikipedia.org/wiki/Catherine_Stefani",
        },
        image: "",
        neighborhoods:
          "Marina, Cow Hollow, Pacific Heights, Seacliff, Lake District, Presidio Heights, Jordan Park, Laurel Heights, Presidio, and part of Russian Hill",
        electionYear: false,

        candidates: [
          {
            name: "",
            website: "",
          },
        ],
      },
      {
        name: "district-3",
        formatName: "District 3",
        supervisor: {
          name: "Aaron Peskin",
          website: "https://en.wikipedia.org/wiki/Aaron_Peskin",
        },
        image: "",
        neighborhoods:
          "North Beach, Chinatown, Telegraph Hill, North Waterfront, Financial District, Nob Hill, Union Square, Maiden Lane, and part of Russian Hill",
        electionYear: true,

        candidates: [
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
        ],
      },
      {
        name: "district-4",
        formatName: "District 4",
        supervisor: {
          name: "Gordon Mar",
          website: "https://en.wikipedia.org/wiki/Gordon_Mar",
        },
        image: "",
        neighborhoods:
          "Central Sunset, Outer Sunset, Parkside, Outer Parkside, Pine Lake Park, and the Farallon Islands",
        electionYear: false,

        candidates: [],
      },
      {
        name: "district-5",
        formatName: "District 5",
        supervisor: {
          name: "Dean Preston",
          website: "https://en.wikipedia.org/wiki/Dean_Preston",
        },
        image: "",
        neighborhoods:
          "Inner Sunset, Haight Ashbury, Lower Haight, Fillmore, Western Addition, part of Cathedral Hill, Parnassus Heights, North Panhandle, Anza Vista, Lower Pacific Heights, Japantown, Hayes Valley, part of Ashbury Heights, and part of UCSF Parnassus Heights",
        electionYear: true,

        candidates: [
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
        ],
      },
      {
        name: "district-6",
        formatName: "District 6",
        supervisor: {
          name: "Matt Haney",
          website: "https://en.wikipedia.org/wiki/Matt_Haney",
        },
        image: "",
        neighborhoods:
          "Union Square, Tenderloin, Civic Center, Mid-Market, Cathedral Hill, South of Market, South Beach, Mission Bay, Treasure Island, Yerba Buena Island, and Alcatraz",
        electionYear: false,

        candidates: [],
      },
      {
        name: "district-7",
        formatName: "District 7",
        supervisor: {
          name: "Norman Yee",
          website: "https://en.wikipedia.org/wiki/Norman_Yee",
        },
        image: "",
        neighborhoods:
          "Inner Parkside, Golden Gate Heights, Clarendon Heights, part of Twin Peaks, West Portal, Forest Knolls, Midtown Terrace, Forest Hill, Miraloma Park, Sunnyside, Sherwood Forest, Westwood Highlands, Westwood Park, St. Francis Wood, Monterey Heights, Mt. Davidson, Balboa Terrace, Ingleside Terrace, Stonestown, Lakeside, Lake Shore, Merced Manor, Parkmerced, Lake Merced, City College, San Francisco State, part of Ashbury Heights, and part of UCSF Parnassus Heights",
        electionYear: true,

        candidates: [
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
        ],
      },
      {
        name: "district-8",
        formatName: "District 8",
        supervisor: {
          name: "Rafael Mandelman",
          website: "https://en.wikipedia.org/wiki/Rafael_Mandelman",
        },
        image: "",
        neighborhoods:
          "The Castro, Noe Valley, Diamond Heights, Glen Park, Corona Heights, Eureka Valley, Dolores Heights, Mission Dolores, Duboce Triangle, Buena Vista Park, and part of Twin Peaks",
        electionYear: false,
        candidates: [],
      },
      {
        name: "district-9",
        formatName: "District 9",
        supervisor: {
          name: "Hillary Ronen",
          website: "https://en.wikipedia.org/wiki/Hillary_Ronen",
        },
        image: "",
        neighborhoods: "Mission District, Bernal Heights, and the Portola",
        electionYear: true,

        candidates: [
          {
            name: "",
            website: "",
          },
        ],
      },
      {
        name: "district-10",
        formatName: "District 10",
        supervisor: {
          name: "Shamman Walton",
          website: "https://en.wikipedia.org/wiki/Shamann_Walton",
        },
        image: "",
        neighborhoods:
          "Potrero Hill, Central Waterfront, Dogpatch, Bayview-Hunters Point, Bayview Heights, India Basin, Silver Terrace, Candlestick Point, Visitacion Valley, Little Hollywood, Sunnydale, and McLaren Park",
        electionYear: false,

        candidates: [],
      },
      {
        name: "district-11",
        formatName: "District 11",
        supervisor: {
          name: "Ahsha Safai",
          website: "https://en.wikipedia.org/wiki/Ahsha_Safa%C3%AD",
        },
        image: "",
        neighborhoods:
          "Excelsior, Ingleside, Oceanview, Merced Heights, Ingleside Heights, Mission Terrace, Outer Mission, Cayuga, and Crocker Amazon",
        electionYear: true,
        candidates: [
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
          {
            name: "",
            website: "",
          },
        ],
      },
    ],
  },
  {
    name: "new-york",
    formatName: "New York",
    districts: [
      {
        name: "staten-island",
        formatName: "Staten Island",
        supervisor: {
          name: "",
          website: "",
        },
      },
      {
        name: "brooklyn",
        formatName: "Brooklyn",
        supervisor: {
          name: "",
          website: "",
        },
      },
      {
        name: "manhattan",
        formatName: "Manhattan",
        supervisor: {
          name: "",
          website: "",
        },
      },
      {
        name: "bronx",
        formatName: "Bronx",
        supervisor: {
          name: "",
          website: "",
        },
      },
      {
        name: "queens",
        formatName: "Queens",
        supervisor: {
          name: "",
          website: "",
        },
      },
    ],
  },
];

const locations = [
  { name: "san-francisco", formatName: "San Francisco" },
  { name: "new-york", formatName: "New York" },
];

export default function Places() {
  const [locationName, setLocationName] = useState("san-francisco");
  const [locationList, setLocationList] = useState(locations);
  const [region, setRegion] = useState({});
  const [district, setDistrict] = useState(false);

  useEffect(() => {
    // have a loading image while getting cityData
    if (locationName) {
      for (let i = 0; i < cityData.length; i++) {
        if (cityData[i].name === locationName) {
          setRegion(cityData[i]);
          setDistrict(false);
        }
      }
    }
  }, [locationName]);

  function hoverin(e) {
    e.currentTarget.style.fill = "dodgerblue";
    // console.log(e.currentTarget.id);
    // let district = e.currentTarget.id;
    // setRegion(district);
  }

  function hoverout(e) {
    e.currentTarget.style.fill = "#c7c7c7";
  }

  function select(e) {
    let { districts: districtList } = region;
    // console.log(e.currentTarget.id);
    // console.log(districtList);
    for (let j = 0; j < districtList.length; j++) {
      if (districtList[j].name === e.currentTarget.id) {
        setDistrict(districtList[j]);
      } else {
        console.log("Error, district not in database");
      }
    }
  }

  function setMap(locationName) {
    // Make this function work later on
    // for (let i =0; i < locationList.length; i++) {
    //   if (location === locationList[0].name) {
    //     return
    //   }
    // }
    switch (locationName) {
      case "san-francisco":
        // setRegion(cityData[0]);
        return (
          <SanFrancisco select={select} hoverin={hoverin} hoverout={hoverout} />
        );
      case "new-york":
        // setRegion(cityData[1]);
        return (
          <NewYork select={select} hoverin={hoverin} hoverout={hoverout} />
        );
    }
  }

  return (
    <Container>
      {/* Location Selection */}
      <div style={{ display: "flex", alignContent: "center" }}>
        <h2>Select a city</h2>
        <select
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          className="selection"
        >
          {locationList.map((location, index) => (
            <option key={index} value={location.name}>
              {location.formatName}
            </option>
          ))}
        </select>
      </div>
      <div className="places-container">
        <div className="map-svg">{setMap(locationName)}</div>
        <div className="map-info">
          <div>
            <h2 style={{ margin: 0 }}>Region</h2>
            <div className="district-details">
              {district ? (
                <>
                  <h3>{district.formatName}</h3>
                  <p>
                    Elected Officials:{" "}
                    <a
                      noopenner="false"
                      noreferrer="false"
                      target="__blank"
                      href={district.supervisor.website}
                    >
                      {district.supervisor.name}
                    </a>
                  </p>
                  <h3>Neighborhoods</h3>
                  <p>{district.neighborhoods}</p>
                  {district.electionYear ? (
                    <>
                      <h2>Candidates Running for Election</h2>
                      <a
                        target="__blank"
                        noopenner="false"
                        noreferrer="false"
                        href={region.electionSite}
                      >
                        Election Site
                      </a>
                      <ul
                        className="candidates-list"
                        style={{ overflow: "scroll" }}
                      >
                        {district.candidates.map((candidate, index) => (
                          <li key={index}>
                            {candidate.website ? (
                              <a
                                href={candidate.website}
                                noopenner="false"
                                noreferrer="false"
                                target="__blank"
                              >
                                {candidate.name}
                              </a>
                            ) : (
                              <p style={{ margin: 0 }}>{candidate.name}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <p>None Selected</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
