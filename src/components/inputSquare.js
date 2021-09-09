import { useEffect, useRef, useState } from 'react';
import '../css/inputSquare.css'

const InputSquare = props => {
    const [fontSize, setFontSize] = useState("0px");

    const square = useRef(null);

    const calcFontSize = () => {
        const rect = square.current.getBoundingClientRect();
        const width = rect.width;
        const size = (width * 0.6) + "px";
        setFontSize(size);
    }

    useEffect(() => {
        if (props.focused) square.current.focus();
        calcFontSize();
        window.addEventListener("resize", calcFontSize);
        return () => window.removeEventListener("resize", calcFontSize)
    });

    const handleKeyDown = e => {
        e.preventDefault();
        if (e.keyCode === 65) { // A
            props.setLetter(props.row, props.col, 1);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 74) { // J
            props.setLetter(props.row, props.col, 11);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 81) { // Q
            props.setLetter(props.row, props.col, 12);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 75) { // K
            props.setLetter(props.row, props.col, 13);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode == 48 || e.keyCode == 84) { // 0, t
            props.setLetter(props.row, props.col, 10);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode >= 49 && e.keyCode <= 57) { // 1-9
            props.setLetter(props.row, props.col, e.key);
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 8) { // backspace
            props.setLetter(props.row, props.col, "");
            props.setFocus(props.row, props.col - 1);
        }
        else if (e.keyCode === 46) { // delete
            props.setLetter(props.row, props.col, "");
            props.setFocus(props.row, props.col);
        }
        else if (e.keyCode === 37) { // left
            props.setFocus(props.row, props.col - 1);
        }
        else if (e.keyCode === 38) { // up
            props.setFocus(props.row - 1, props.col);
        }
        else if (e.keyCode === 39) { // right
            props.setFocus(props.row, props.col + 1);
        }
        else if (e.keyCode === 40) { // down
            props.setFocus(props.row + 1, props.col);
        }
        else if (e.keyCode === 13) { // enter
            props.submit();
        }
    }

    const disable = e => {
        e.preventDefault();
    }

    return (
        <input
            ref={square}
            className="inputSquare"
            defaultValue={props.letter}
            style={{fontSize: fontSize}}
            maxLength="1"
            onKeyDown={handleKeyDown}
            onPaste={disable}
            onDrop={disable}
        ></input>
    );
}

export default InputSquare