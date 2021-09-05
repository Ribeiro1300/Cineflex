import axios from "axios";
import { order } from "../components/Data";
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
      <div>
        <p>Nome:{order.seats.buyer}</p>
        <p>CPF:{order.seats.cpf}</p>
      </div>
      <Link to="/">
        <div className="toHome">
          <p>Voltar pra Home</p>
        </div>
      </Link>
    </div>
  );
}
