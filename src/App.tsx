import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './features/login/Login';
import Register from './features/register/Register';
import Home from './features/home/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home/*" element={<Home />} />
        <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>} />
      </Routes>

    </div>
  );
}

export default App;
