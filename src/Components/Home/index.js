import "./index.css";
import ProgressBar from "../Progressbar";
import html from "../../Images/html.png";
import css from "../../Images/css.jpg";
import js from "../../Images/js.jpg";
import mongo from "../../Images/mongo.jpg";
import sql from "../../Images/sql.jpg";
import reactjs from "../../Images/reactjs.jpg";
import jquery from "../../Images/jquery.jpg";
import nodejs from "../../Images/nodejs.jpg";
import express from "../../Images/express.png";



const Home = () => {
  const courses = [
    {name:"HTML",width:"70%",imgsrc:html},{name:"CSS",width:"70%",imgsrc:css},{name:"Javascript",width:"60%",imgsrc:js},{name:"JQuery",width:"60%",imgsrc:jquery},{name:"ReactJS",width:"80%",imgsrc:reactjs},
    {name:"NodeJS",width:"50%",imgsrc:nodejs},{name:"ExpressJS",width:"50%",imgsrc:express},{name:"MongoDB",width:"50%",imgsrc:mongo},{name:"MySql",width:"70%",imgsrc:sql}
  ];
  return (
    <div className="home">
      <h1 className="web-dev">Web-Developer in making...</h1>
      <div className="progress-wrap">
        {courses.map((item, index) => (
          <ProgressBar key={index} item={item}/>
        ))}
      </div>
    </div>
  );
};
export default Home;