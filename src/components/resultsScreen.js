import { useState, useRef } from "react";
import DisplayBoard from "./displayBoard";
import '../css/resultsScreen.css';
import Word from "./word";

const ResultsScreen = props => {
    const [path, setPath] = useState([]);
    const [atTop, setAtTop] = useState(true);
    const wordsDiv = useRef(null);

    const scrollToTop = () => {
        wordsDiv.current.scrollTop = 0;
        wordsDiv.current.scrollLeft = 0;
    }

    const handleScroll = (e) => {
        setAtTop(!e.target.scrollTop && !e.target.scrollLeft)
    }

    // TODO: delete test logs
    console.log("~~ props.results")
    console.log(props.results)

    return (
        <div className="resultsScreen">
            <button className="backButton" onClick={props.goHome}></button>
            <div className="boardDiv">
                <p className="wordCount">{props.results.length} SOLUTION{props.results.length !== 1 ? "S" : ""}</p>
                <DisplayBoard letters={props.board} path={path}/>
            </div>
            {props.results.length > 0 && <div className="wordsDivOuter">
                <button className="toTopButton" disabled={atTop} onClick={scrollToTop}></button>
                <div className="wordsDiv" ref={wordsDiv} onScroll={handleScroll}>
                    {props.results.map((result,index) =>
                        // TODO: fix index, maybe by concatenating?
                        <Word key={index} word={result} path={result.path} setPath={setPath}/>
                    )}
                </div>
            </div>}
        </div>
    );
}

export default ResultsScreen;