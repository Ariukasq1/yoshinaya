import React from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { getData } from "../utils";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
const LocationItem = ({ key, address, schedule, image, name, phone, item }) => {
  return (
    <div className="locations__item" key={key}>
      <img src={image} alt="" />
      <div className="locations__item__content">
        <h3>{name}</h3>
        <ul>
          <li>
            <span className="-rotate">
              <PushPinOutlinedIcon />
            </span>
            <div>{address}</div>
          </li>
          <li>
            <span>
              <AccessTimeOutlinedIcon />
            </span>
            <div>{schedule}</div>
          </li>
          <li>
            <span>
              <CallOutlinedIcon />
            </span>
            <div>{phone}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationItem;
