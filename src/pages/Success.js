import Footer from "../components/Footer";
import { seats } from "../components/Data";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Success() {
  const history = useHistory();

  return (
    <div className="sucess">
      <div className="title">
        <ion-icon
          name="chevron-back-outline"
          onClick={() => history.goBack()}
        ></ion-icon>
        <h2>Pedido feito com sucesso!</h2>
      </div>
    </div>
  );
}
