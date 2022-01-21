import "./index.css";

const Progressbar = (props) => {
  return (
    <div className="performance-bar">
      <div className="card">
        <h2>{props.name}</h2>
        {/* <i class="fab fa-html5"></i> */}
        <div className="bar">
          <div className="inner-bar" style={{width:`${props.width}`}}></div>
        </div>
      </div>
    </div>
  );
};
export default Progressbar;