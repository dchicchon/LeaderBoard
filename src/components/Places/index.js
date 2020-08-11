import React, { useEffect, useState } from "react";
import API from "../../utils/api";

// Common Component
import Container from "../Common/Container";

// Maps
import { SanFrancisco, NewYork } from "./Maps";
import "./style.css";

const locations = [
  { name: "san-francisco", formatName: "San Francisco" },
  { name: "new-york", formatName: "New York" },
  { name: "stockton", formatName: "Stockton" },
  { name: "dallas", formatName: "Dallas" },
  { name: "seattle", formatName: "Seattle" },
];

export default function Places() {
  const [locationName, setLocationName] = useState("san-francisco");
  const [locationList, setLocationList] = useState([]);
  const [leaders, setLeaders] = useState([]);
  // const [region, setRegion] = useState({});
  const [loadingRegion, setloadingRegion] = useState(false);
  const [district, setDistrict] = useState(false);

  useEffect(() => {
    document.title = "Location";
    setLocationList(locations);
  }, []);

  useEffect(() => {
    // have a loading image while getting cityData
    if (locationName) {
      setloadingRegion(true);
      API.getLeaders(locationName)
        .then((res) => {
          setLeaders(res.data);
          setDistrict(false);
          setloadingRegion(false);
        })
        .catch((err) => {
          console.error(err);
          setloadingRegion(false);
        });
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
    for (let j = 0; j < leaders.length; j++) {
      if (leaders[j].district === e.currentTarget.id) {
        setDistrict(leaders[j]);
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
          <h2 style={{ margin: 0 }}>Region</h2>
          {district ? (
            <>
              <div className="district-details">
                <h3>{leaders.district}</h3>
                <p>
                  Elected Officials:{" "}
                  <a
                    className="candidate-link"
                    noopenner="false"
                    noreferrer="false"
                    target="__blank"
                    href={leaders.website}
                  >
                    {leaders.name}
                  </a>
                </p>
                <h3>Neighborhoods</h3>
                {/* <p>{district.neighborhoods}</p> */}
              </div>
              {district.electionYear ? (
                <div>
                  <h2>Candidates Running for Election</h2>
                  {/* <a
                    target="__blank"
                    noopenner="false"
                    noreferrer="false"
                    href={region.electionSite}
                  >
                    Election Site
                  </a> */}
                  <ul className="candidate-list">
                    {district.candidates.map((candidate, index) => (
                      <li className="candidate" key={index}>
                        {/* <image className="candidate-image" src="" /> */}
                        {candidate.website ? (
                          <a
                            className="candidate-link"
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
                </div>
              ) : (
                "Not an election year"
              )}
            </>
          ) : (
            <p>None Selected</p>
          )}
        </div>
      </div>
    </Container>
  );
}
