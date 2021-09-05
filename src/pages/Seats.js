import Footer from "../components/Footer";
import { selectedSeats, order } from "../components/Data";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Seats() {
  const { idSession } = useParams();
  const history = useHistory();
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSession}/seats`
    );
    promisse.then((res) => {
      setSeats(res.data);
    });
  }, []);

  if (seats.length === 0) {
    return <img src="./Youtube_loading_symbol_1_(wobbly).gif" />;
  }

  function RenderSeats(props) {
    const [back, setBack] = useState("#C3CFD9");

    function selectSeat() {
      selectedSeats.push(props.info.id);
      setBack("#8dd7cf");
    }
    function deselect() {
      selectedSeats.splice(selectedSeats.indexOf(props.info.id), 1);
      setBack("#C3CFD9");
    }
    function select() {
      back === "#C3CFD9" ? selectSeat() : deselect();
    }

    return (
      <div
        className="seatsIds"
        style={{
          backgroundColor: props.info.isAvailable ? back : "#FBE192",
        }}
        onClick={select}
      >
        {props.info.name}
      </div>
    );
  }
  order.session = seats.day.date + " - " + seats.name;
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
        {seats.seats.map((info) => (
          <RenderSeats info={info} />
        ))}
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
      <div className="buyers">
        <div className="buyersInfo">
          <p>Nome do comprador do assento:</p>
          <input placeholder="Digite seu nome..."></input>
          <p>CPF do comprador do assento:</p>
          <input placeholder="Digite seu CPF..."></input>
        </div>
      </div>
      <Link to="/success">
        <div>Reservar assento(s)</div>
      </Link>
      <Footer
        title={seats.movie.title}
        img={seats.movie.posterURL}
        session={seats.day.weekday + " - " + seats.name}
      />
    </div>
  );
}
