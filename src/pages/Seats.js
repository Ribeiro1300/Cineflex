import Footer from "../components/Footer";
import { seats } from "../components/Data";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Seats() {
  const { IdSession } = useParams();
  const history = useHistory();

  return (
    <div className="seats">
      <div className="title">
        <ion-icon
          name="chevron-back-outline"
          onClick={() => history.goBack()}
        ></ion-icon>
        <h2>Selecione o(s) assento(s)</h2>
      </div>

      <Footer
        title={seats.movie.title}
        img={seats.movie.posterURL}
        session={seats.day.weekday + " - " + seats.name}
      />
    </div>
  );
}
