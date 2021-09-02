import Footer from "../components/Footer";
import { seats } from "../components/Data";
export default function Seats() {
  return (
    <div className="seats">
      <h2>Selecione o(s) assento(s)</h2>
      <Footer
        title={seats.movie.title}
        img={seats.movie.posterURL}
        session={seats.day.weekday + " - " + seats.name}
      />
    </div>
  );
}
