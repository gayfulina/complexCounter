import React from 'react';
import './App.css';

const SimpleCounterController = (props) => {

    return (
        <div>
            {props.counters.map(el =>
                <div key={el.id}>
                    {el.numberOfButtons.map(elem =>
                        <button className="button-count"
                                onClick={() => props.counterChangeValue(el.id, -elem)}>{-elem}</button>).reverse()}

                    <span className=" simple-counter-result p-2">
                       {el.count}
                    </span>

                    {el.numberOfButtons.map(elem =>
                        <button className="button-count"
                                onClick={() => props.counterChangeValue(el.id, elem)}>{elem}</button>)}

                    <button className="btn btn-outline-danger mx-3">
                        Delete Counter
                    </button>

                    <button className="btn btn-outline-secondary mx-3">
                        ↑
                    </button>

                    <button className="btn btn-outline-secondary mx-3">
                        ↓
                    </button>
                </div>
            )}
        < /div>
    )
}

export default SimpleCounterController;