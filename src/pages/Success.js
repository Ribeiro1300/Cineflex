import { order } from "../components/Data";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

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
      <h2>Filme e sessão</h2>
      <p>{order.movie}</p>
      <p>{order.session}</p>
      <h2>Ingressos</h2>
      {order.seats.map((info) => (
        <p>Assento {info.id}</p>
      ))}
      <h2>Comprador</h2>
      {order.seats.map((info) => (
        <div>
          <p>Nome:{info.buyer}</p>
          <p>CPF:{info.cpf}</p>
        </div>
      ))}
      <Link to="/">
        <div className="toHome">
          <p>Voltar pra Home</p>
        </div>
      </Link>
    </div>
  );
}
