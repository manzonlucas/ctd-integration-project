import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductView from './pages/ProductView';
import { UserContext } from './contexts/UserContext';
import { useState, useEffect } from 'react';
import SuccessfulReservation from './pages/SuccessfulReservation';
import SuccessfulProductCreation from './pages/SuccessfulProductCreation';
import { baseUrl } from './services/api';
import Booking from './components/Product/Booking';
import NewProduct from './pages/NewProduct';
import jwt_decode from 'jwt-decode';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [actualCategory, setActualCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    city: '',
    role: '',
    isLogged: false
  });
  const [decodedToken, setDecodedToken] = useState('');

  useEffect(() => {
    fetchProducts();
    // fetchCities();
    fetchCategories();
  }, []);

  useEffect(() => {
    decodeToken();
  }, [user])


  async function decodeToken() {
    if (localStorage.getItem('jwt')) {
      const jwt = await localStorage.getItem("jwt");
      const decoded = await jwt_decode(jwt);
      setDecodedToken(decoded);
    }
  }

  async function fetchProducts() {
    // const response = await axios.get(baseUrl + 'producto/findall');
    const response = await axios.get('https://run.mocky.io/v3/065741a4-097d-4006-ae18-98c1e63df2a3');
    setProducts(response.data);
    setIsLoading(false);
    setActualCategory('');
    console.log(products);
  }

  async function fetchCategories() {
    // const response = await axios.get(baseUrl + 'categoria');
    const response = await axios.get('https://run.mocky.io/v3/8ecd6ee1-8bcd-4858-8db7-9ab6cad7cf7e');
    setCategories(response.data);
    setIsLoading(false);
  }

  async function fetchCities() {
    const response = await axios.get(baseUrl + 'ciudad');
    setCities(response.data);
    setIsLoading(false);
  }

  async function fetchProductsByQuery(destinationId, destinationName, startDate, endDate) {
    if (destinationId === undefined) {
      destinationId = '';
      destinationName = '';
    }
    const response = await axios.get(baseUrl + `producto?ciudad=${destinationId}&from=${startDate}&to=${endDate}`);
    setProducts(response.data.resultados);
    setActualCategory(`Busqueda realizada: ${destinationName} | Check-in: ${startDate} | Check-out: ${endDate}`);
  }

  async function fetchProductsByCategory(name) {
    const response = await axios.get(baseUrl + 'producto?categoria=' + name);
    setProducts(response.data.resultados);
    setActualCategory(name);
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser, products, decodeToken, fetchProducts, isLoading, setIsLoading, fetchProductsByQuery, fetchProductsByCategory, cities, categories, actualCategory, decodedToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path='producto/:id' element={<ProductView />}></Route>
            <Route path="/successful" element={<SuccessfulReservation />}></Route>
            <Route path="/successfulProduct" element={<SuccessfulProductCreation />}></Route>
            <Route path="producto/:id/booking" element={<Booking />}></Route>
            <Route path="/newproduct" element={<NewProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
export default App;