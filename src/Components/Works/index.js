import Card from "../ProjectCard"
import ShopLane from "../../Images/Shoplane.png"
import nuuk from "../../Images/nuuk.jpg"
import "./index.css"

const Works=()=>{
    const projects = [
        {name:"ShopLane",imgsrc:ShopLane,description:"ShopLane is a beautiful shopping UI made with HTML,CSS and javascript.This website includes Clothings and Accessories section along with header and footer",link:"https://fabulous-quill-patch.glitch.me/"},{name:"NUUK",imgsrc:nuuk,description:"NUUK is a simple UI design of a proffesional standard website with excellent stylings and effects made with CSS",link:"https://codepen.io/prajwal1997amin/pen/dyvpZrv"} ];
    return(
        <div class="main">
            {projects.map((item,index)=><Card key={index} name={item.name} imgsrc={item.imgsrc} description={item.description} link={item.link} />)}
        </div>
    )
}
export default Works