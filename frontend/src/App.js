
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <Router>
      <Navbar/>
      <UpdateBook/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/books" element={<Books/>}/>
        <Route exact path="/addBooks" element={<AddBooks/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
