import React from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import HistoryItem from "../HistoryItem";

class Revolution extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      padding: "1rem",
    };

    return (
      <Grid container spacing={2} alignItems="flex-end" justifyContent="center">
        <Grid item xs={5}>
          <div className="title mb-2">
            <div className="tag">Үүсэл хөгжил</div>
            <h1>Yoshinoya-н үүсэл, хөгжил</h1>
          </div>
        </Grid>
        <Grid item xs={7}>
          {/* <div className="section-shape">
            <img src="/images/Vector2.svg" alt="vector2" />
          </div> */}
          <img className="img" src="/images/revolution.jpg" alt="" />
        </Grid>
        <Grid item xs={12}>
          <div>
            <p>
              Yoshinoya-н үүсэл хөгжил нь тэртээх 1899 (A&W – 1919, White Castle
              – 1921, MacDonald – 1940, KFC – 1952, Burger King – 1953) онд буюу
              одоогоос 122 жилийн өмнө Япон улс, Токио хотын хөл хөдөлгөөн ихтэй
              Нихонбаши загасны захаас эхэлсэн.
            </p>
            <p>
              Тухайн үед тэнд маш олон завгүй загасчид ажилладаг байсан бөгөөд
              тэдэнд хурдан хугацаанд амттай, халуун хоол идэх хэрэгцээ
              шаардлага тулгарч байсан. Үүнийг Yoshinoya-н үүсгэн байгуулагч
              Эйкичи Мацуда олж харан тусалж чадна гэдгээ мэдэж байжээ.
            </p>
            <p>
              Тэрээр тухайн үедээ цоо шинэ төрлийн зоогийн газар нээсэн нь:
              Түргэн бөгөөд хямд үнэтэй, амттай Gyudon-г бүтээсэн. Тэрээр
              ресторанаа Ёшинояа гэж нэрлэн одоог хүртэл 122 жилийн турш
              “Амттай, Хямд, Түргэн” гэсэн уриан дор үйл ажиллагаа өргөжүүлэн
              ажиллаж байна.
            </p>
          </div>
          <div
            className="icon-scroll-down"
            onClick={() => this.props.handleChange(3)}
          >
            <span>Scroll down</span>
            <img src="/images/arrow-down.svg" alt="arrow down" />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Revolution;
