 import React,{useState, useEffect, useRef} from 'react'
 import "./Calculator.css";  
const Calculator = () => {
  const[result, setResult] = useState("0");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus())
   
  function handleClick(e) {
  setResult(result.concat(e.target.name));
  }
  function clear(){ 
      setResult("");
  }
     
  function calculate(){ 
    try { 
        setResult(eval(result).toString());
    } catch (error) {
        setResult("error")
    }
    
} 
    return (
        <div className="calc-app">
        <form>
        <input type="text" value={result} ref={inputRef}/>
        </form>

<div className="keypad">
    <button name="1"onClick={handleClick}>1</button>
    <button name="2"onClick={handleClick}>2</button>
    <button name="3"onClick={handleClick}>3</button>
    <button name="+"onClick={handleClick}>ADD(+)</button>
    <button name="4"onClick={handleClick}>4</button>
    <button name="5"onClick={handleClick}>5</button>
    <button name="6"onClick={handleClick}>6</button>
    <button name="-"onClick={handleClick}>Substract(-)</button>
    <button name="7"onClick={handleClick}>7</button>
    <button name="8"onClick={handleClick}>8</button>
    <button name="9"onClick={handleClick}>9</button>
    <button name="*"onClick={handleClick}>Multiply(*)</button>
    <button id="clear" onClick={clear}>clear</button>
    <button name="0" onClick={handleClick}>0</button>
    <button id="result" onClick={calculate}>=</button>
    <button name="/" onClick={handleClick}>Divide(/)</button>
        </div>
        </div>
    ) 
        
    
}

export default Calculator