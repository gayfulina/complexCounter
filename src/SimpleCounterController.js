import React from 'react';
import './App.css';

const SimpleCounterController = (props) => {

    const {counter, index} = props;

    return (
        <div>
            <div className="simple-counter container py-5 m-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-s-4">
                        <h1> COUNTER {index}</h1>

                        <div className="m-3">
                            {counter.numberOfButtons.map(el =>
                                <button className="button-count"
                                        onClick={() => props.counterChangeValue(counter.id, -el)}>{-el}
                                </button>).reverse()}

                            <span className=" simple-counter-result p-2">{counter.count}</span>

                            {counter.numberOfButtons.map(el =>
                                <button className="button-count"
                                        onClick={() => props.counterChangeValue(counter.id, el)}>{el}
                                </button>)}
                        </div>

                        <button className="btn btn-outline-danger mx-3"
                                onClick={() => props.deleteCounter(counter.id)}>Delete Counter
                        </button>
                        <button className="btn btn-outline-secondary mx-3"
                                disabled={index === 0}
                                onClick={() => props.swapButton(index, index - 1)}>⬆
                        </button>
                        <button className="btn btn-outline-secondary mx-3"
                                disabled={props.isLast}
                                onClick={() => props.swapButton(index, index + 1)}>⬇
                        </button>
                    </div>
                < /div>
            </div>
        </div>
    )
}

export default SimpleCounterController;