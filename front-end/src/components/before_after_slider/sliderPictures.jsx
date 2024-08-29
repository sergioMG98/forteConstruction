//https://www.youtube.com/watch?v=dzqDU9efnnk
import { useEffect } from "react";
import "./sliderPictures.scss";

export default function SliderPictures({before, after}){
    
    useEffect(() => {
        const container = document.querySelector('.sliderPictures');
        document.querySelector('.slider').addEventListener('input', (e) => {
            container.style.setProperty('--position', e.target.value >= 3  ?  e.target.value <= 97 ? `${e.target.value}%` : '97%' : `3%`);

        });

       
    })

    return (
        <div className="sliderPictures">
            <div className="image-container">
                <img className="image-before slider-image" src={before} alt="before images" />
                <img className="image-after slider-image" src={after} alt="after image" />
            </div>
            <input className="slider" type="range" min={0} max={100} value={50} aria-label="percentage of before photo show" />
            <div className="slider-line"></div>
            <div className="slider-button" aria-hidden="true">v</div>
        </div>
    )
}