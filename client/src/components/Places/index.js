import React, { useState } from "react";

// Common Component
import Container from "../Common/Container";

// Maps
import { SanFrancisco, NewYork } from "./Maps";
import "./style.css";

function setMap(location) {
  switch (location) {
    case "san-francisco":
      return <SanFrancisco />;
    case "new-york":
      return <NewYork />;
  }
}

export default function Places() {
  const [location, setLocation] = useState("san-francisco");
  return (
    <Container>
      <div style={{ display: "flex", alignContent: "center" }}>
        <h1>Select a city</h1>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="selection"
        >
          <option value="san-francisco">San Francisco</option>
          <option value="new-york">New York</option>
        </select>
      </div>

      <div>{setMap(location)}</div>
    </Container>
  );
}
