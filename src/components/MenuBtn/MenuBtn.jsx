import React from "react";
import { Link } from "react-router-dom";

function MenuBtn() {
  return (
    <Link to="/menu">
      <button
        type="button"
        className="btn  btn-lg rounded-0 text-capitalize mx-2 mb-3 mb-sm-0"  style={{ backgroundColor: "#b64a41ff", color: "white" }}
      >
        Our full menu
      </button>
    </Link>
  );
}

export default MenuBtn;
