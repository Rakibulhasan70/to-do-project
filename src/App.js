import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Registration';
import Add from './Pages/Add';
import RequireAuth from './Pages/RequirreAuth';
import ToDoData from './Pages/Home/ToDoData';
import { ToastContainer } from 'react-toastify';
// import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/add' element={<RequireAuth>
          <Add></Add>
        </RequireAuth>}></Route>

        <Route path='/tododata' element={<RequireAuth>
          <ToDoData></ToDoData>
        </RequireAuth>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
