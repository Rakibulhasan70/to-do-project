import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Registration';
import Add from './Pages/Add';
import RequireAuth from './Pages/RequirreAuth';
// import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add' element={<RequireAuth>
          <Add></Add>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
