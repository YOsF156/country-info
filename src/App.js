import './App.css';
import Main from './components/Main';
import { createContext, useState } from 'react';
import Popup from './components/Popup';

export const popupContext = createContext()

function App() {
  const [popup, setPopup] = useState("");
  return (
    <div className="App">
      <popupContext.Provider value={{ popup, setPopup }}>

        <Main />
        {popup ? <Popup /> : null}
      </popupContext.Provider>
    </div>
  );
}

export default App;
