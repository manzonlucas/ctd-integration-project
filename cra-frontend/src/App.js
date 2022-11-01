import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductView from './pages/ProductView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path='view/:id' element={<ProductView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;