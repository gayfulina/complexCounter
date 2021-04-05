import React from 'react';
import './App.css';

const SimpleCounterController = (props) => {

    return (
        <div className="simple-counter">
            {props.counters.map(el =>
                <div key={el.id}>
                    {el.numberOfButtons.map(elem =>
                        <button onClick={() => props.counterChangeValue(el.id, -elem)}>{-elem}</button>).reverse()}
                    <span>
                       {el.count}
                   </span>
                    {el.numberOfButtons.map(elem =>
                        <button onClick={() => props.counterChangeValue(el.id, elem)}>{elem}</button>)}
                </div>
            )}
        < /div>
    )
}

export default SimpleCounterController;