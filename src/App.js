import React from 'react';
import Split from './compositions/Split'
import './App.css'

function App() {
  return (
    // below are many instances of the component 'split', with the props.children in the text in between tags
    <main className="App">
       <Split className="left" flexBasis={4} backColor="pink">
        I am the props.children > This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <Split className="right" backColor="lightBlue">
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
