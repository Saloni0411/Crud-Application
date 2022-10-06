import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element= {<Home/>}> </Route>
      <Route path='/all' element={<AllUsers/>}> </Route>
      <Route path='/add' element={<AddUser/>}> </Route> 
      <Route path='/edit/:id' element={<EditUser/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
