import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ComplexCounterController from "./ComplexCounterController";
import SimpleCounterController from "./SimpleCounterController";


const initCounters = [
    {id: Math.random(), count: 0, numberOfButtons: [1,2,3] },
]

function App() {
    const [counters, setCounters] = useState(initCounters);

    const addCounter = (inputValue, inputNumberOfButtons) => {
        const newButtons = [];
        for (let i = 1; i <= inputNumberOfButtons; i++) {
            newButtons.push(i);
        }
        const newList =   {
            id: Math.random(),
            count: inputValue,
            numberOfButtons: newButtons,
        }
        const newCounter = [...counters, newList]
        setCounters(newCounter)
    }

    const counterChangeValue = (id, val) => {
        setCounters(counters.map(el => el.id === id ? {...el, count: el.count + val} : el));
    }

    return (
        <div>
            <h1> COUNTER</h1>
            <SimpleCounterController counters={counters}
                                     counterChangeValue={counterChangeValue}
            />
            <hr/>

            <ComplexCounterController addCounter={addCounter}/>
        </div>
    );
}

export default App;
