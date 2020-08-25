import React, { useEffect, useState } from "react";
import API from "../../utils/api";

export default function Leader(props) {
  useEffect(() => {
    console.log("Setting up leader page");
  }, []);
  return (
    <div>
      <h2>{}</h2>
    </div>
  );
}
