import './App.css';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Register from './pages/RegisterPage';
import Dashboard from './pages/Dashboard'
import SelectedProject from './pages/SelectedProjectPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='dash' element={<Dashboard/>}/>
        <Route path='project' element={<SelectedProject/>}/>
        </Routes>
    </div>
  );
}

export default App;
