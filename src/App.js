import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header/>

        <Routes>
            <Route path={"/"}  element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
