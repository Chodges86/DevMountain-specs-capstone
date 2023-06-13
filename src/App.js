import './App.css';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
