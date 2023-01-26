import EventListener from './EventListeners';
import WithoutStates from './States/Without States'
import WithStates from './States/With States';
import Counter from './States/Counter/Counter'
import Counter1 from './States/Counter/Counter1'
import Card from "./States/Card/Card"
import Boxes from "./States/Boxes/BoxesApp"
import JokeApp from './Conditional Rendering/JokeApp';
import Messages from './Conditional Rendering/Messages';

function App() {

  
  return (
    
    <>
    
    <input type="text" value="abcd" onChange={(event)=>console.log(event)}/>
    <EventListener/>
    {/* <WithoutStates/> */}
    <WithStates/>
    <Counter/>
    <Counter1/>
    <Card/>
    <Boxes/>
    <JokeApp/>
    <Messages/>
    </>
    
  
  );
}

export default App;
