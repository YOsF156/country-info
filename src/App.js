import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { createContext, useState } from 'react';
import Popup from './components/Popup';


export const PopupContext = createContext()

function App() {

  const popupState = useState('')
  return (
    <div className="App">
      <PopupContext.Provider value={popupState}>

        <Main />
        <Popup />
      </PopupContext.Provider>
    </div>
  );
}

export default App;
