import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import {useState} from "react";

function App() {

  const [text,  setText] = useState('');
  return (
    <>
    
      <Header setText={setText}/>
    
      <Characters text={text}/>
    

    </>
  );
}

export default App;
