import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ComplexCounterController from "./ComplexCounterController";
import SimpleCounterController from "./SimpleCounterController";

const initCounters = [
    {id: Math.random(), count: 0, numberOfButtons: [1,2,3,4,5,6,7,8,9]},
]

function App() {
    const [counters, setCounters] = useState(initCounters);

    const addCounter = (inputValue, inputNumberOfButtons) => {
        const newButtons = [];
        for (let i = 1; i <= inputNumberOfButtons; i++) {
            newButtons.push(i);
        }
        const newList = {
            id: Math.random(),
            count: inputValue,
            numberOfButtons: newButtons,
        }
        const newCounter = [...counters, newList]
        setCounters(newCounter)
    }

    const deleteCounter = (id) => {
        const filterCounters = counters.filter(el => el.id !== id);
        setCounters(filterCounters)
    }

    const counterChangeValue = (id, val) => {
        setCounters(counters.map(el => el.id === id ? {...el, count: el.count + val} : el));
    }

    const swapButton = (currentIndex, nextIndex) => {
        const newList = [...counters];
        const currentEl = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentEl;
        setCounters(newList)
    }

    const resetButton = () => {
        setCounters(initCounters)
    }


    return (
        <div>
                        {counters.map((el, index) => <SimpleCounterController
                                counter={el}
                                index={index}
                                isLast={index === counters.length - 1}
                                counterChangeValue={counterChangeValue}
                                deleteCounter={deleteCounter}
                                swapButton={swapButton}
                            />)}

            <div className="container m-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-s-6">
                        <ComplexCounterController addCounter={addCounter}
                                                  resetButton={resetButton}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
