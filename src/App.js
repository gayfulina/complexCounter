import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ComplexCounterController from "./ComplexCounterController";
import SimpleCounterController from "./SimpleCounterController";

const initCounters = [
    {id: Math.random(), count: 0, numberOfButtons: [1, 2, 3]},
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

    const buttonUp = (index) => {
        const buttonUpCopy = [...counters];
        const newButtonUpCopy = buttonUpCopy[index];
        buttonUpCopy[index] = buttonUpCopy[index - 1];
        buttonUpCopy[index - 1] = newButtonUpCopy;
        setCounters(buttonUpCopy);
    }

    const buttonDown = (index) => {
        const buttonDownCopy = [...counters];
        const newButtonDownCopy = buttonDownCopy[index];
        buttonDownCopy[index] = buttonDownCopy[index + 1];
        buttonDownCopy[index + 1] = newButtonDownCopy;
        setCounters(buttonDownCopy);
    }

    const resetButton = () => {
        setCounters(initCounters)
    }


    return (
        <div>
            <div className="simple-counter container py-5 m-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <h1> COUNTER </h1>
                        <SimpleCounterController counters={counters}
                                                 counterChangeValue={counterChangeValue}
                                                 deleteCounter={deleteCounter}
                                                 buttonUp={buttonUp}
                                                 buttonDown={buttonDown}
                        />
                    </div>
                </div>
            </div>

            <div className="container m-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
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
