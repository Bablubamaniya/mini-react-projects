import { useState } from "react";

// Action : Tea-Preparation

function Tea() {
    const [tea, setTea] = useState(0);
    const [suger, setSuger] = useState(0);
    const [milk, setMilk] = useState(0);
    const [boiling, setBoiling] = useState(false);
    const [ovenOn, setOvenOn] = useState(false);
    const [teaPrepared, setTeaPrepared] = useState(false);

    // Action 1 : "teaPreparation/start"
    // Action 2 : "teaPreparation/stop"

    function StartTeaPreparation() {
        // Mix Ingredients
        setTea(5);
        setSuger(8);
        setMilk(200);

        // Oven On
        setOvenOn(true);
        setBoiling(true);
    }

    function stopTeaPreparation() {
        setOvenOn(false);
        setBoiling(false);
        setTeaPrepared(true);
    }

    return (
        <div>
            <button onClick={StartTeaPreparation}>Start</button>
            <button onClick={stopTeaPreparation}>Stop</button>
        </div>
    );
}

export default Tea;