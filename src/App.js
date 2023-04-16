
import './App.css';
import { First } from './components/first/First';
import { Second } from './components/second/second';
import Third from './components/third/Third';

const App = () => {
       const user = {name: "Anna", age: 19} 
  
    return (
      <>
      <First text = {user}/>
      <Second text= {user}/>
      <Third/>
      </>
    )
}

export default App;
