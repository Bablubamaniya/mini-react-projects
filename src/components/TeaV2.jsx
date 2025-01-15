import { useReducer } from "react";

// 1. Initial States
const initialState = {
    tea: 0,
    suger: 0,
    milk: 0,
    ovenOn: false,
    boiling: false,
    teaPrepared: false,
};

// 2. Reducer Function ( Logics )
const reducer = function (currentState, action) {
    if (action.type === "teaPreparation/startV1") {
        return {
            ...currentState,
            tea: action.payload.tea,
            suger: action.payload.suger,
            milk: action.payload.milk,
            ovenOn: true,
            boiling: true,
        };
    }

    if (action.type === "teaPreparation/startV2") {
        currentState.tea = action.payload.tea;
        currentState.suger = action.payload.suger;
        currentState.milk = action.payload.milk;
        currentState.ovenOn = true;
        currentState.boiling = true;
        return { ...currentState };
    }

    if (action.type === "teaPreparation/stop") {
        const updatedState = {
            ...currentState,
            ovenOn: false,
            boiling: false,
            teaPrepared: true,
        };
        return updatedState;
    }
};

function TeaV2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function StartTeaPreparation() {
        dispatch({
            type: "teaPreparation/startV1",
            payload: {
                tea: 5,
                suger: 10,
                milk: 200,
            },
        });
    }

    function stopTeaPreparation() {
        dispatch({ type: "teaPreparation/stop" });
    }

    return (
        <div>
            <button onClick={StartTeaPreparation}>Start</button>
            <button onClick={stopTeaPreparation}>Stop</button>
        </div>
    );
}

export default TeaV2;