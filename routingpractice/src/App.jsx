import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { useParams } from 'react-router-dom';

const Word = (props) =>{
  const {variable} = useParams();
  const {colorOne} = useParams();
  const {colorTwo} = useParams();
  if(isNaN(variable) === true){
    return(
      <h1 style={{color : colorOne, backgroundColor : colorTwo}}>The word is {variable}</h1>
    );
  }
  return(
    <h1>The number is {variable}</h1>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <h1>Welcome!</h1>
          </Route>
          <Route exact path="/:variable">
            <Word />
          </Route>
          <Route path="/:variable/:colorOne/:colorTwo">
            <Word />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
