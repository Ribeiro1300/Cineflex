import Footer from "../components/Footer";
import { seats } from "../components/Data";
import React from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Seats() {
  const { IdSession } = useParams();
  const history = useHistory();

  function RenderSeats() {
    const [back, setBack] = React.useState("");
    function available(value) {
      if (value.isAvailable) setBack("#c3cfd9");
      else setBack("#FBE192");

      return { background: back };
    }
    function select() {
      console.log("oi");
    }
    return (
      <div className="allSeats">
        {seats.seats.map((info) => (
          <div className="seatsIds" style={available(info)} onClick={select}>
            {info.id}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="seats">
      <div className="title">
        <ion-icon
          name="chevron-back-outline"
          onClick={() => history.goBack()}
        ></ion-icon>
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      {RenderSeats()}

      <Footer
        title={seats.movie.title}
        img={seats.movie.posterURL}
        session={seats.day.weekday + " - " + seats.name}
      />
    </div>
  );
}
