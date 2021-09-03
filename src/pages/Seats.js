import Footer from "../components/Footer";
import { seats } from "../components/Data";
import React from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Seats(props) {
  const { IdSession } = useParams();
  const history = useHistory();
  let selectedSeats = [];

  function RenderSeats(info) {
    const [back, setBack] = React.useState("#C3CFD9");
    function selectSeat() {
      selectedSeats.push(info.id);
      console.log(selectedSeats);
      setBack("#8dd7cf");
    }
    function deselect() {
      selectedSeats.pop(info.id);
      setBack("#C3CFD9");
      console.log(selectedSeats);
    }
    function select(value) {
      if (value) {
        back === "#C3CFD9" ? selectSeat() : deselect();
      } else return;
    }

    return (
      <div
        className="seatsIds"
        style={{
          backgroundColor: info.isAvailable ? back : "#FBE192",
        }}
        onClick={() => select(info.isAvailable)}
      >
        {info.id}
      </div>
    );
  }
  console.log(selectedSeats);
  props.setOrder((value) => {
    value.session = seats.day.date + " - " + seats.name;
    return value;
  });

  return (
    <div className="seats">
      <div className="title">
        <ion-icon
          name="chevron-back-outline"
          onClick={() => history.goBack()}
        ></ion-icon>
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="allSeats">
        {seats.seats.map((info) => RenderSeats(info))}
      </div>
      <div className="example">
        <div>
          <div className="seatsIds selected"></div>
          <p>Selecionado</p>
        </div>
        <div>
          <div className="seatsIds available"></div>
          <p>Disponível</p>
        </div>
        <div>
          <div className="seatsIds unavailable"></div>
          <p>Indisponível</p>
        </div>
      </div>
      <Link to="/success">
        <div>TESTE</div>
      </Link>
      <Footer
        title={seats.movie.title}
        img={seats.movie.posterURL}
        session={seats.day.weekday + " - " + seats.name}
      />
    </div>
  );
}
