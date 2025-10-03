import React, { useReducer } from 'react'
import { INITIAL, reducer } from "./reducer/reducer";

const FetchData = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL);
    const { loading, post, error } = state;

    const handleClick = () => {
        dispatch({ type: "START" });
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                dispatch({type: "SUCCESS", payload: json});
            }).catch((err) => {
                dispatch({ type: "ERROR", payload: err });
            });
    };

    return (
        <div>
            <button onClick={handleClick}>
                {loading ? "Loading..." : "Click!"}
            </button>
            <p>{post?.title}</p>
            <p>{error && "ERROR: " + post}</p>
        </div>
    )
}

export default FetchData