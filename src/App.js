// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";  

import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Category from './pages/Category.js';
import CategoryDetail from './pages/CategoryDetail.js';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/category" element={<Category />}/>
            <Route path="/category/detail/:categoryName" element={<CategoryDetail />}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
