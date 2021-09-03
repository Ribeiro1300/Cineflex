import React from "react";
import { sessions } from "../components/Data";
import axios from "axios";
import Footer from "../components/Footer";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Sessions(props) {
  const { IdMovie } = useParams();
  const history = useHistory();
  props.setOrder((value) => {
    value.movie = sessions.title;
    return value;
  });
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
