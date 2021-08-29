import './App.css';
import ConvertInput from "./components/convertInput";
import convertToRoman from "./utils/convertToRoman";
import convertToNumeral from "./utils/convertToNumeral";
import { useState} from 'react';

function App() {
  const [romanValue, setRomanValue] = useState();
  const [numeralValue, setNumeralValue] = useState();

  const handleUserKeyPress = (val) => {
    let resultRoman = convertToRoman(val);
    setRomanValue(resultRoman);
    console.log(romanValue);
  }

  const handleUserKeyPressRoman = (val) => {
    let resultNumeral = convertToNumeral(val);
    setNumeralValue(resultNumeral);
    console.log(numeralValue);
  }

  return (
    <div className="main">
      <h1>Roman Numeral Converter</h1>
      <ConvertInput
        name="numeral"
        onChange={e => { setNumeralValue(e.target.value); handleUserKeyPress(e.target.value) }}
        value={numeralValue}
        placeholder="Enter Numeric value" />
      <ConvertInput
        name="roman"
        onChange={e => { setRomanValue((e.target.value).toUpperCase()); handleUserKeyPressRoman(e.target.value) }}
        value={romanValue}
        placeholder="Enter Roman value" />
    </div>

  );
}

export default App;
