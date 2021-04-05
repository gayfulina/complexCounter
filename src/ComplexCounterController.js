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

                <label>Initial Value</label>
                <input type="number"
                    value={inputValue}
                    onChange={inputValueHandler}
                    placeholder="Put the Value"
                    />
                <br/>

                <label>Number of Buttons</label>
                <input type="number"
                       value={inputNumberOfButtons}
                       onChange={inputNumberOFButtonsHandler}
                       placeholder="Number of Buttons"
                />
                <br/>
                <button onClick={addButtonHandler}>
                    Add New Counter
                </button>

        </div>
    )
}

export default ComplexCounterController;
