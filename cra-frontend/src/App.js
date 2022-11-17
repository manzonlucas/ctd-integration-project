import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductView from './pages/ProductView';
import { UserContext } from './contexts/UserContext';
import { useState, useEffect } from 'react';
import userImport from './userDb.json';
import productsMock from './products.json';

function App() {

  const [userDb, setUserDb] = useState(userImport);
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    isLogged: false
  });

  // const baseUrl = 'http://localhost:8080/';
  const baseUrl = 'http://18.191.158.71:8080/';
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCities();
    fetchCategories();
  }, [])

  function fetchProducts() {
    // fetch(baseUrl + 'producto')
    // .then(response => response.json())
    // .then(data => setProducts(data));
    setProducts(productsMock);
  }

  function fetchCategories() {
    fetch(baseUrl + 'categoria')
      .then(response => response.json())
      .then(data => setCategories(data));
  }

  function fetchCities() {
    fetch(baseUrl + 'ciudad')
      .then(response => response.json())
      .then(data => setCities(data));
  }

  return (
    <>
      <UserContext.Provider value={{ userDb, user, setUser, products, cities, categories }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path='producto/:id' element={<ProductView />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;