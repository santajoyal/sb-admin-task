import logo from './logo.svg';
import './App.css';
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import Createuser from './Createuser';
import Viewuser from './Viewuser';
import Edituser from './Edituser';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/users' element={<User/>}></Route>
          <Route path='/create-user' element={<Createuser/>}></Route>
          <Route path='/profile/:id' element={<Viewuser/>}></Route>
          <Route path='/edit-user/:id' element={<Edituser/>}></Route>

        </Routes>
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
