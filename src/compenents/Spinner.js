import React from 'react'

export default function Spinner() {

    const circles = document.querySelectorAll(".one")
    circles.forEach((one, idx) => {
        one.style.borderWidth = (idx + 1) * 9 + "px"
        one.style.zIndex = -idx
        one.style.animationName = `rotate-${idx}`;
        const style = document.createElement("style")

        const deg = (idx + 1) * 360;
        style.innerHTML = `
        @keyframes rotate-${idx} {
        to {
            transform: translate(-50%, -50%) rotate(${deg}deg);
           }
        }
        `;
        document.body.appendChild(style)
    })
    return (
        <div id="con">
            <div className="one"></div>
            <div className="one"></div>
        </div>
    )
}
