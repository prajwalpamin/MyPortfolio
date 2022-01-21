import "./index.css";
import ProgressBar from "../Progressbar";

const Home = () => {
  const courses = [
    {name:"HTML",width:"70%"},{name:"CSS",width:"70%"},{name:"Javascript",width:"60%"},{name:"JQuery",width:"60%"},{name:"ReactJS",width:"80%"},
    {name:"NodeJS",width:"50%"},{name:"ExpressJS",width:"50%"},{name:"MongoDB",width:"50%"},{name:"MySql",width:"70%"}
  ];
  return (
    <div className="home">
      <h1>Web-Developer in making...</h1>
      <div className="progress-wrap">
        {courses.map((item, index) => (
          <ProgressBar key={index} name={item.name} width={item.width} />
        ))}
      </div>
    </div>
  );
};
export default Home;