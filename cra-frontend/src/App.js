import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductView from './pages/ProductView';
import { UserContext } from './contexts/UserContext';
import { useState, useEffect } from 'react';
import userImport from './userDb.json';
import SuccessfulReservation from './pages/SuccessfulReservation';
import SuccessfulProductCreation from './pages/SuccessfulProductCreation';
import { baseUrl } from './services/api';
import Booking from './components/Product/Booking';
import NewProduct from './pages/NewProduct';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [actualCategory, setActualCategory] = useState('');
  const [userDb, setUserDb] = useState(userImport);
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    city: '',
    isLogged: false
  });

  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCities();
    fetchCategories();
  }, [])

  async function fetchProducts() {
    const response = await axios.get(baseUrl + 'producto/findall');
    setProducts(response.data.resultados);
    setIsLoading(false);
    setActualCategory('');
  }

  async function fetchCategories() {
    const response = await axios.get(baseUrl + 'categoria');
    setCategories(response.data);
    setIsLoading(false);
  }

  async function fetchCities() {
    const response = await axios.get(baseUrl + 'ciudad');
    setCities(response.data);
  }

  async function fetchProductsByCategoryName(name) {
    const response = await axios.get(baseUrl + 'producto?categoria=' + name);
    setProducts(response.data.resultados);
    setActualCategory(name);
  }

  // CHEQUEAR EL ENDPOINT PQ EL ACTUAL SOLO TRAE LA CIUDAD EN LUGAR DE LISTADO DE PRODUCTOS
  async function fetchProductsByCityId(id) {
    // const response = await axios.get(baseUrl + 'ciudad/' + id);
    // setProducts(response.data.resultados);
    console.log('fetching products by city id');
    console.log(`City id: ${id}`);
  }

  // PENDING BACKEND
  async function fetchProductsByDate(startDate, endDate) {
    // const response = await axios.get(baseUrl + ???)
    // setProducts(response.data.resultados);
    console.log('fetching products by input date');
    console.log(`Start date: ${startDate} - End date: ${endDate}`);
  }

  return (
    <>
      <UserContext.Provider value={{ userDb, user, setUser, products, fetchProducts, isLoading, setIsLoading, fetchProductsByCityId, fetchProductsByCategoryName, fetchProductsByDate, cities, categories, actualCategory }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path='producto/:id' element={<ProductView />}></Route>
            <Route path="/successful" element={<SuccessfulReservation />}></Route>
            <Route path="/successfulProduct" element={<SuccessfulProductCreation />}></Route>
            <Route path="producto/:id/booking" element={<Booking />}></Route>
            <Route path="/newproduct" element={<NewProduct/>}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
export default App;