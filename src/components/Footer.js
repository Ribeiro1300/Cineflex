export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footerImg">
        <img src={props.img} alt=""></img>
      </div>
      <div className="footerInfo">
        <h3>{props.title}</h3>
        <h3>{props.session}</h3>
      </div>
    </div>
  );
}
