import "./index.css";

const Progressbar = (props) => {
  return (
    <div className="main1">
     <div className="round"><img src={props.item.imgsrc} height="50" width="50" alt=""/>
      <div className="bar-wrap"><h1>{props.item.name}</h1>
        <div className="outer-bar"><div className="inner-bar" style={{width:`${props.item.width}`}}></div></div>
      </div>
     </div>

   </div>
    // <div className="performance-bar">
    //   <div className="card">
    //     <h2>{props.name}</h2>
    //     {/* <i class="fab fa-html5"></i> */}
    //     <div className="bar">
    //       <div className="inner-bar" style={{width:`${props.width}`}}></div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Progressbar;