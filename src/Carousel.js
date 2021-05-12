import './Carousel.css'
import { useEffect, useState, cloneElement } from "react";

function CustomCarousel(props) {

    const [liStyles, setLiStyles] = useState([
        { zIndex: 0, width: "20%", height: "50%", top: "15%", left: "5%", opacity: 0.6 },
        { zIndex: 3, width: "25%", height: "60%", top: "10%", left: "21%", opacity: 0.8 },
        { zIndex: 4, width: "30%", height: "75%", top: "5%", left: "35%", opacity: 1 },
        { zIndex: 3, width: "25%", height: "60%", top: "10%", left: "56%", opacity: 0.8 },
        { zIndex: 0, width: "20%", height: "50%", top: "15%", left: "77%", opacity: 0.6 },
    ]);
    const [settings, setSettings] = useState({ speed: 1, interval: 2000 });
    const [timer, setTimer] = useState(null);

    const next = () => {
        setLiStyles(prevState => [...prevState.slice(-1), ...prevState.slice(0, -1)]);
    };

    const onClickHiPrev = () => {
        setLiStyles(([first, ...rest]) => [...rest, first]);
    };

    const mouseEnter = () => {
        clearInterval(timer);
        setTimer(null);
    };

    const autoPlay = () => {
        setTimer(setInterval(next, settings.interval));
    };

    useEffect(() => {
        // autoPlay();
    });
    // only render 7 items

    return (
        <div className="slide hi-slide" onMouseEnter={() => mouseEnter()} onMouseLeave={() => autoPlay()}>
            <div className="hi-prev" onClick={() => onClickHiPrev()}></div>
            <div className="hi-next" onClick={() => next()}></div>
            <ul>
                {props.children.map((child, index) => {
                    return (
                        <li key={index} style={{...liStyles[index], transition: `all ${settings.speed}s ease-out`}}>
                            {cloneElement(child, {style: {opacity: liStyles[index].opacity, width: '100%', height: '100%'}})}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CustomCarousel;
