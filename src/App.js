import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import './App.css';

function App(props) {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <Main state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
