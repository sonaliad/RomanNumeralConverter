import logo from './logo.svg';
import './App.css';
import ConvertInput from "./components/convertInput";
import ConvertOutput from "./components/convertOutput";
import convertToRoman from "./utils/converToRoman";
import convertToNumeral from "./utils/convertToNumeral";
import { useState } from 'react';

function App() {
  const [romanValue, setRomanValue] = useState();

  const handleInput= (e)=> {
    let result = convertToRoman(e.target.value);
    setRomanValue({romanValue : result});
  }
  
  return (
    <div className="App">
       <div className="App container">
          <h1 className="container__label">Roman Numeral Converter</h1>
          <ConvertInput onChange={handleInput} />
          <ConvertOutput value={romanValue} />
        </div>
    </div>
  );
}

export default App;
