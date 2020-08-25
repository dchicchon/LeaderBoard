import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import noImg from "../../../media/no_img.png";

export default function Pill({ leader }) {
  return (
    <div className="pill">
      {leader.image ? (
        <img className="leader-image" src={leader.image} />
      ) : (
        <img className="leader-image" src={noImg} />
      )}
        <a
          className="leader-link"
          noopenner="false"
          noreferrer="false"
          target="__blank"
          href={leader.website}
        >
          {leader.name}
        </a>
    </div>
  );
}
