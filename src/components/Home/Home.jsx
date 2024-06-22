import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="Home">
      <div className="HomeContent">
        <div className="Homedetails">
          <h1 className="HomecontentHeading">Find Professional Courses</h1>
          <span className="HomecontentData">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed quasi ratione aliquid molestiae repellendus architecto distinctio aspernatur, odio eius beatae optio quis, tempora et non saepe rem voluptates velit!
          </span>
          
          <Link to="/course" className="Homedetailslink">
            <button className="HomeDetailsbtn">Learn more →</button>
          </Link>
        </div>
        
        <img src="/assests/women.jpg" alt="" className="HeadingImg"/>
      </div>
    </div>
  )
}
