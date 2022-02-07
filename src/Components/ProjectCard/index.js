
import "./index.css";

const Card = (props) => {
  return( 
    <a href={props.link}>
    <div className="card-container">
    <div className="image-container">
      <img src={props.imgsrc} alt=""/>
    </div>
    <div className="card-header">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  </div>
  </a>
)};
export default Card;