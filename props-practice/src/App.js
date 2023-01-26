// import logo from './logo.svg';
// import './App.css';
// import Joke from "./Jokes"

// function App() {
//   return (
//       <div>
//           <Joke 
//               punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
//               isPun={true}      //everything except hardcore string should be enclosed in {}
//               upvotes={1}
//               downvotes={2}
//               comments={[{author: "", body: "", title: ""}]}
//           />
//           <Joke 
//               setup="I got my daughter a fridge for her birthday." 
//               punchline="I can't wait to see her face light up when she opens it." 
//               isPun={false}
//           />
//           <Joke 
//               setup="How did the hacker escape the police?" 
//               punchline="He just ransomware!"
//               isPun={true}
//           />
//           <Joke 
//               setup="Why don't pirates travel on mountain roads?" 
//               punchline="Scurvy." 
//               isPun={true}
//           />
//           <Joke 
//               setup="Why do bees stay in the hive in the winter?" 
//               punchline="Swarm." 
//               isPun={true}
//           />
//           <Joke 
//               setup="What's the best thing about Switzerland?" 
//               punchline="I don't know, but the flag is a big plus!" 
//               isPun={false}
//           />
//       </div>
//   )
// }

// export default App;




//Using Map

import React from "react"
import Joke from "./Jokes"
import Data from "./Data"

export default function App() {
    const jokeElements = Data.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })


    const colors=[<h1>Red</h1>,<h1>Orange</h1>,<h1>Yellow</h1>,<h1>green</h1>,<h1>blue</h1>,<h1>Indigo</h1>];


    return (
        <div>
            {colors}
            {jokeElements}
        </div>
    )
}

