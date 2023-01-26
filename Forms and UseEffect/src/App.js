import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Forms from './Forms';
import WithoutUseEffect from './WithoutUseEffect';
import WithUseEffects from './WithUseEffect';
import WindowApp from './WindowApp';
function App() {
  return(
    <>
    {/* <Forms/> */}
    {/* <WithoutUseEffect/> */}
    <WithUseEffects/>
    <WindowApp/>
    </>
  )
   
}

export default App;
