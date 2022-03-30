import { useState } from 'react';
import { TextArea } from './TextArea';
import logo from './logo.svg';
import './App.css';

function App() {
  const [firstText, setFirstText] = useState("Default Text 1");
  const [lastText, setLastText] = useState("Default Text 1");

  return (
    <div className="App">
        <TextArea text={firstText} showTextLength={true} setText={setFirstText} />
        <TextArea text={lastText} showTextLength={true} setText={setLastText} />
        {firstText === lastText ? "Texts are Equal" : "Text are not Equal"}
    </div>
  );
}

export default App;
