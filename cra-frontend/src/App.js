import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductView from './pages/ProductView';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';
import userImport from './userDb.json';

function App() {

  const [userDb, setUserDb] = useState(userImport);
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    lastName: '',
    isLogged: false
  });

  return (
    <>
      <UserContext.Provider value={{ userDb, user, setUser }}>
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