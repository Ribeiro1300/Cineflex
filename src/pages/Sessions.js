import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useParams, Link, useHistory } from "react-router-dom";
import { order } from "../components/Data";

export default function Sessions() {
  const { idMovie } = useParams();
  const history = useHistory();
  const [sessions, setSessions] = useState([]);
  order.movie = sessions.title;
  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idMovie}/showtimes`
    );
    promisse.then((res) => {
      setSessions(res.data);
    });
  }, []);

  if (sessions.length === 0) {
    return <img src="./Youtube_loading_symbol_1_(wobbly).gif" />;
  }
  return (
    <div className="sessions">
      <div className="title">
        <ion-icon
          name="chevron-back-outline"
          onClick={() => history.goBack()}
        ></ion-icon>
        <h2>Selecione o horário</h2>
      </div>

      {sessions.days.map((info) => (
        <div className="dates">
          <h3>{info.weekday + " - " + info.date}</h3>
          <div className="sessionsTimes">
            {info.showtimes.map((time) => (
              <Link to={"/seats/" + time.id}>
                <div className="time">{time.name}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <Footer title={sessions.title} img={sessions.posterURL} />
    </div>
  );
}
