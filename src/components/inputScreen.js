import { useState } from 'react';
import InputBoard from './inputBoard'
import '../css/inputScreen.css'

const InputScreen = props => {
    const [boardFilled, setBoardFilled] = useState(false);

    const submit = () => {
        if (boardFilled) props.findWords();
    }

    return (
        <div className="inputScreen">
            <InputBoard size={props.size} setBoard={props.setBoard} setBoardFilled={setBoardFilled} submit={submit}/>
            {
                boardFilled ? 
                <button className="findWords" onClick={props.findWords}>FIND SOLUTIONS</button>:
                <p className="promptText">FILL IN EACH SQUARE WITH A NUMBER</p>
            }
        </div>
    );
}

export default InputScreen;