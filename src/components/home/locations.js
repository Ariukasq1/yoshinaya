import React from "react";
import MyGoogleMap from "../map/MyGoogleMap";
import { Container, Grid } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const Locations = ({ handleBlockScrollUp, handleBlockScrollDown }) => {
  const xasleasing = "/images/xasleasing.jpg";
  const handleOnMouseOver = () => {
    handleBlockScrollDown(true);
    handleBlockScrollUp(true);
  };
  const handleOnMouseOut = () => {
    if (typeof window !== undefined && window.innerWidth > 768) {
      handleBlockScrollDown(false);
      handleBlockScrollUp(false);
    }
  };
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <div
            className="scroll-container scroll-chrome locations__scroll"
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
          >
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
                      Монгол улс, Улаанбаатар, Сүхбаатар дүүрэг - 14240, 1-р
                      хороо, 5-р хороолол, Чингисийн өргөн чөлөө, Бизнес Тауэр,
                      16 давхар
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
                      Монгол улс, Улаанбаатар, Сүхбаатар дүүрэг - 14240, 1-р
                      хороо, 5-р хороолол, Чингисийн өргөн чөлөө, Бизнес Тауэр,
                      16 давхар
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
                      Монгол улс, Улаанбаатар, Сүхбаатар дүүрэг - 14240, 1-р
                      хороо, 5-р хороолол, Чингисийн өргөн чөлөө, Бизнес Тауэр,
                      16 давхар
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
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="locations__map"
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <MyGoogleMap />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Locations;
