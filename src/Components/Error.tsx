import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Error = (props: Props) => {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      Error
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="button"> Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
