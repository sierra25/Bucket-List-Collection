import{ HashRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import "./style.css";



/*adding router component*/
/*changed BrowserRouter to HashRouter*/
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path= "/" element={[<NavBar/>,<Books/>]} />
          <Route path= "/add" element={<Add/>} />
          <Route path= "/update/:id" element={<Update/>} />
        </Routes>
      </HashRouter>
















    </div>
  );
}

export default App;
