import React from "react";
import { sessions } from "../components/Data";
import axios from "axios";
import Footer from "../components/Footer";
export default function Sessions() {
  console.log(sessions.days[1].weekday);
  return (
    <div className="sessions">
      <h2>Selecione o horário</h2>
      {sessions.days.map((info) => (
        <div className="dates">
          <h3>{info.weekday + " - " + info.date}</h3>
          <div className="sessionsTimes">
            {info.showtimes.map((time) => (
              <div className="time">{time.name}</div>
            ))}
          </div>
        </div>
      ))}
      <Footer title={sessions.title} img={sessions.posterURL} />
    </div>
  );
}
