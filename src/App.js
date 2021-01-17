import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Navbar />
        <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
