import './App.css';
import { useContext, useEffect } from 'react';

import Cookies from 'js-cookie';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Register from './pages/RegisterPage';
import Dashboard from './pages/Dashboard'
import SelectedProject from './pages/SelectedProjectPage';

import AuthContext from './store/authContext';
import ProjectContext from './store/projectContext';

function App() {
  const authCtx = useContext(AuthContext)  
  const { selectedProject } = useContext(ProjectContext)

  useEffect(() => {
    if (Cookies.get("bth_uid")) {
      axios
        .get(`http://localhost:4000/get-user/${Cookies.get("bth_uid")}`)
        .then(({data}) => {
          authCtx.setIsLoggedIn(true);
          authCtx.setUserId(data.user_id);
          authCtx.setFirstName(data.first_name);
        });
    }
  }, [authCtx]);
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={!authCtx.isLoggedIn ? <LoginPage/> : <Dashboard/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='dash' element={authCtx.isLoggedIn ? <Dashboard/>: <LoginPage/>}/>
        <Route path='project' element={selectedProject ? <SelectedProject/> : <Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
