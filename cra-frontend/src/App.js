import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductView from './pages/ProductView';
import { UserContext } from './contexts/UserContext';
import { useState, useEffect } from 'react';
import userImport from './userDb.json';
import productsMock from './products.json';
import SuccessfulReservation from './pages/SuccessfulReservation';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userDb, setUserDb] = useState(userImport);
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    isLogged: false
  });

  // const baseUrl = 'http://localhost:8080/';
  const baseUrl = 'http://ec2-18-191-158-71.us-east-2.compute.amazonaws.com:8080/api/';
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

    const fakeProductsFetch = async () => {
      try {
        // const res = await .....;
        // return res;
        return new Promise((res, rej) => {
          setTimeout(() => res(productsMock), 3000)
        })
      } catch (err) {
        throw new Error("error.unknown");
      }
    };

    fakeProductsFetch()
      .then(response => {
        setProducts(response);
        setIsLoading(false);
        console.log(isLoading);
      })
  }

  async function fetchCategories() {
    const response = await axios.get(baseUrl + 'categoria');
    await setCategories(response.data);

    // IDEM SIN AXIOS
    // fetch(baseUrl + 'categoria')
    // .then(response => response.json())
    // .then(data => setCategories(data));
  }

  function fetchCities() {
    fetch(baseUrl + 'ciudad')
      .then(response => response.json())
      .then(data => setCities(data));
  }

  // A CARGO DE BACK. HACER GET ENVIANDO ID Y ACTUALIZANDO CONTENIDO DE STATE PRODUCTS CON SETPRODUCTS
  //  IMPLEMENTAR EN PRODUCTS.JSX
  function fetchProductsByCityId(id) {
    // fetch(baseUrl + 'ciudad')
    // .then(response => response.json())
    // .then(data => setProducts(data));
  }

  return (
    <>
      <UserContext.Provider value={{ userDb, user, setUser, products, fetchProducts, isLoading, fetchProductsByCityId, cities, categories }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path='producto/:id' element={<ProductView />}></Route>
            <Route path="/successful" element={<SuccessfulReservation/>}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
export default App;