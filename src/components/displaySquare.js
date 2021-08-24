import { useEffect, useRef } from "react";
import '../css/displaySquare.css';

const DisplaySquare = props => {

    const square = useRef(null);

    const setPos = () => {
        const rect = square.current.getBoundingClientRect();
        const x = (rect.left + window.scrollX + rect.right + window.scrollX) / 2;
        const y = (rect.top + window.scrollY + rect.bottom + window.scrollY) / 2;
        props.setPos({x: x, y: y});
    }
    
    useEffect(() => {
        setPos();
        window.addEventListener("resize", setPos);
        return () => window.removeEventListener("resize", setPos)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div ref={square} className="displaySquare">
            <p className="displayLetter">{props.letter}</p>
        </div>
    );
}

export default DisplaySquare;