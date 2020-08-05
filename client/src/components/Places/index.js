import React, { useState } from "react";

// Common Component
import Container from "../Common/Container";

// Maps
import { SanFrancisco, NewYork } from "./Maps";
import "./style.css";

const districtData = [
  {
    name: "district-1",
    supervisor: "Sanda Lee Fewer",
    image: "",
  },
  {
    name: "district-2",
    supervisor: "Catherine Stefani",
    image: "",
  },
  {
    name: "district-3",
    supervisor: "Aaron Peskin",
    image: "",
  },
  {
    name: "district-4",
    supervisor: "Gordon Mar",
    image: "",
  },
  {
    name: "district-5",
    supervisor: "Dean Preston",
    image: "",
  },
  {
    name: "district-6",
    supervisor: "Matt Haney",
    image: "",
  },
  {
    name: "district-7",
    supervisor: "Norman Yee",
    image: "",
  },
  {
    name: "district-8",
    supervisor: "Rafael Mandelman",
    image: "",
  },
  {
    name: "district-9",
    supervisor: "Hillary Ronen",
    image: "",
  },
  {
    name: "district-10",
    supervisor: "Shamann Walton",
    image: "",
  },
  {
    name: "district-11",
    supervisor: "Ahsha Safai",
    image: "",
  },
];

const candidateData = [
  {
    name: "district-1",
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
    candidates: [
      {
        name: "",
        website: "",
      },
    ],
  },
  {
    name: "district-3",
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
    candidates: [],
  },
  {
    name: "district-5",
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
    candidates: [],
  },
  {
    name: "district-7",
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
    candidates: [],
  },
  {
    name: "district-9",
    candidates: [
      {
        name: "",
        website: "",
      },
    ],
  },
  {
    name: "district-10",
    candidates: [],
  },
  {
    name: "district-11",
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
];

const locations = [
  { name: "san-francisco", formatName: "San Francisco" },
  { name: "new-york", formatName: "New York" },
];

export default function Places() {
  const [location, setLocation] = useState("san-francisco");
  const [locationList, setLocationList] = useState(locations);
  const [districtInfo, setDistrictInfo] = useState({});

  function hoverin(e) {
    e.currentTarget.style.fill = "dodgerblue";
  }

  function hoverout(e) {
    e.currentTarget.style.fill = "#c7c7c7";
  }

  function select(e) {
    console.log("District Selected");
  }

  function setMap(location) {
    // Make this function work later on
    // for (let i =0; i < locationList.length; i++) {
    //   if (location === locationList[0].name) {
    //     return
    //   }
    // }
    switch (location) {
      case "san-francisco":
        return (
          <SanFrancisco
            select={select}
            hoverin={hoverin}
            hoverout={hoverout}
          />
        );
      case "new-york":
        return (
          <NewYork
            select={select}
            hoverin={hoverin}
            hoverout={hoverout}
          />
        );
    }
  }

  return (
    <Container>
      {/* Location Selection */}
      <div style={{ display: "flex", alignContent: "center" }}>
        <h2>Select a city</h2>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="selection"
        >
          {locationList.map((location, index) => (
            <option key={index} value={location.name}>
              {location.formatName}
            </option>
          ))}
        </select>
      </div>

      <div>{setMap(location)}</div>
    </Container>
  );
}
