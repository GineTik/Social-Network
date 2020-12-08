import './App.css';
import Header from "./components/Header/Header";
import Profil from "./components/Main/Profil/Profil";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main className="container">
          <Route path='/profil' component={Profil}/>
          <Route path='/messages' component={Dialogs}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;