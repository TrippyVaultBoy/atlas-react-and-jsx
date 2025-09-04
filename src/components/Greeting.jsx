import React from "react";
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

function Greeting() {
    let hour = new Date().getHours();
    let greeting
    let image

    if (hour >= 6 && hour < 12) {
        greeting = "Good Morning!";
        image = day;
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon!";
        image = day;
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening!";
        image = evening;
    } else {
        greeting = "Good Night!"
        image = night;
    }

    return (
        <h1 className="greeting">
            <img src={image}></img>
            {greeting}
        </h1>
    );
}

export default Greeting;