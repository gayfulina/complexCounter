import {useState} from "react";
import './App.css';

const ComplexCounterController = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputNumberOfButtons, setInputNumberOfButtons] = useState('')

    const inputValueHandler = (event) => {
        setInputValue(+event.target.value)
    }

    const inputNumberOFButtonsHandler = (event) => {
        setInputNumberOfButtons(+event.target.value)
    }

    const addButtonHandler = () => {
        props.addCounter(inputValue, inputNumberOfButtons);
        setInputValue('');
        setInputNumberOfButtons('');
    }

    return (
        <div>

            <label className="mr-3">Initial Value</label>
            <input type="number"
                   className="form-control"
                   value={inputValue}
                   onChange={inputValueHandler}
                   placeholder="Put the Value"
            />
            <br/>

            <label className="mr-3">Number of Buttons</label>
            <input type="number"
                   className="form-control"
                   value={inputNumberOfButtons}
                   onChange={inputNumberOFButtonsHandler}
                   placeholder="Number of Buttons"
            />
            <br/>

            <button className="button-add_new-counter" onClick={addButtonHandler}>Add New Counter</button>
            <button className="btn btn-outline-secondary mx-3" onClick={props.resetButton}>Reset</button>

        </div>
    )
}

export default ComplexCounterController;
