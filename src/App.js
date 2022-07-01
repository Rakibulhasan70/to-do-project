import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Registration';
import Add from './Pages/Add';
import { ToastContainer } from 'react-toastify';
import Update from './Pages/Home/Update';
import SingleData from './Pages/Home/SingleData';
import TodoRoute from './Pages/TodoRoute';
import Calendar from './Pages/Calendar';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/todo' element={<TodoRoute></TodoRoute>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='/singledata/:id' element={<SingleData></SingleData>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
