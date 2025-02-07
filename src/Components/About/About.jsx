import React from "react"
import './About.css'
import {Link,NavLink} from 'react-router-dom'
import FeatureCards from "../FeatureCards/FeatureCards"

 function About() {
    return (
        <div>
            <div
            className="relative bg-cover bg-center h-[40vh] flex items-center  justify-center rounded-xl "
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/72/65/0b/72650bd4c3bb1aaa061053d5a3684531.jpg')" }}
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-white ">About Us</h1>  
                    <p className="text-white">Home &gt; <span className="underline">About Us</span> </p>
                </div>             
            </div>  
            <FeatureCards/>          
        </div>
    )
}
export default About