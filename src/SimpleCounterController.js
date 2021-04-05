import React from 'react';
import './App.css';

const SimpleCounterController = (props) => {

    return (
        <div>
            <div className="simple-counter container py-5 m-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-s-4">
                        <h1> COUNTER </h1>

                        {props.counters.map(el =>
                                <div key={el.id}>

                                    <div className="m-3">
                                    {el.numberOfButtons.map(elem =>
                                        <button className="button-count"
                                                onClick={() => props.counterChangeValue(el.id, -elem)}>{-elem}
                                        </button>).reverse()}

                                    <span className=" simple-counter-result p-2">{el.count}</span>

                                    {el.numberOfButtons.map(elem =>
                                        <button className="button-count"
                                                onClick={() => props.counterChangeValue(el.id, elem)}>{elem}
                                        </button>)}
                                    </div>

                                    <button className="btn btn-outline-danger mx-3"
                                            onClick={() => props.deleteCounter(el.id)}>Delete Counter
                                    </button>
                                    <button className="btn btn-outline-secondary mx-3"
                                            disabled={props.index === 0}
                                            onClick={() => props.swapButton(props.index, props.index - 1)}>⬆
                                    </button>
                                    <button className="btn btn-outline-secondary mx-3"
                                            disabled={props.isLast}
                                            onClick={() => props.swapButton(props.index, props.index + 1)}>⬇
                                    </button>
                                </div>
                        )}
                    < /div>
                </div>
            </div>
        </div>
    )
}

export default SimpleCounterController;