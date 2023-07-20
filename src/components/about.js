import React from "react";
import blogData from "../data/blog";

function About(props){
 return(
    <aside>
        <img src = {blogData.image} alt ='blog logo'/>
        <p>{blogData.about}</p>
    </aside>
 )
};

export default About;