import './App.css';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Register from './pages/RegisterPage';
import UserPortal from './pages/UserPortal';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='user-portal' element={<UserPortal/>}/>
        </Routes>
    </div>
  );
}

export default App;
