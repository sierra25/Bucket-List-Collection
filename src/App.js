import{ BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import NavBar from "./pages/NavBar";
import "./style.css";



/*adding router component*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={[<NavBar/>,<Books/>]} />
          <Route path= "/add" element={<Add/>} />
          <Route path= "/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
















    </div>
  );
}

export default App;
