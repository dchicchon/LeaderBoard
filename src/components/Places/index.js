import React, { useEffect, useState } from "react";
import API from "../../utils/api";

// Common Component
import Container from "../Common/Container";
import Pill from "../Common/Pill";

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
  const [districtLeaders, setDistrictLeaders] = useState([]);
  const [districtCandidates, setDistrictCandidates] = useState([]);
  const [loadingRegion, setloadingRegion] = useState(false);
  const [district, setDistrict] = useState(false);
  // const [region, setRegion] = useState({});

  useEffect(() => {
    document.title = "Places";
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
    if (e.currentTarget.id !== district) {
      setDistrict(e.currentTarget.id);
      setDistrictCandidates([]);
      setDistrictLeaders([]);

      for (let j = 0; j < leaders.length; j++) {
        // Set Leaders
        if (
          leaders[j].district === e.currentTarget.id &&
          leaders[j].elected === true
        ) {
          // Later on we want to append for each leader of that district
          setDistrictLeaders([leaders[j]]);
        }
        // Set Candidates
        if (
          leaders[j].district === e.currentTarget.id &&
          leaders[j].elected === false
        ) {
          // Later on we want to append for each leader of that district
          let currentList = districtCandidates;
          currentList.push(leaders[j]);
          setDistrictCandidates(currentList);
        }
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
        {/* Map */}
        <div className="map-svg">{setMap(locationName)}</div>

        {/* Details */}
        <div className="map-info">
          <h2 style={{ margin: 0 }}>Region</h2>
          {district ? (
            <>
              <div className="district-details">
                <h2>{district}</h2>
                <>
                  <h2>Elected Officials</h2>
                  {districtLeaders.length > 0 ? (
                    <div className="leader-list">
                      {districtLeaders.map((elected, index) => (
                        <Pill key={index} leader={elected} />
                      ))}
                    </div>
                  ) : (
                    "No Elected"
                  )}
                </>
                {districtCandidates.length > 0 ? (
                  <>
                    <h2>Candidates</h2>
                    <div className="leader-list">
                      {districtCandidates.map((candidate, index) => (
                        <Pill key={index} leader={candidate} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div>
                    <p>No Candidates</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <p>None Selected</p>
          )}
        </div>
      </div>
    </Container>
  );
}
