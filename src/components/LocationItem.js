import React from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
const LocationItem = () => {
  const xasleasing = "/images/xasleasing.jpg";
  return (
    <div className="locations__item">
      <img src={xasleasing} alt="" />
      <div className="locations__item__content">
        <h3>Tөв салбар</h3>
        <ul>
          <li>
            <span className="-rotate">
              <PushPinOutlinedIcon />
            </span>
            <div>
              Монгол улс, Улаанбаатар, Сүхбаатар дүүрэг - 14240, 1-р хороо, 5-р
              хороолол, Чингисийн өргөн чөлөө, Бизнес Тауэр, 16 давхар
            </div>
          </li>
          <li>
            <span>
              <AccessTimeOutlinedIcon />
            </span>
            <div>Даваа - Баасан 09:00-18:00, Бямба, Ням амарна</div>
          </li>
          <li>
            <span>
              <CallOutlinedIcon />
            </span>
            <div>98989455</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationItem;
