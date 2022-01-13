import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './features/login/Login';
import Register from './features/register/Register';
import Home from './features/home/Home';
import RequireAuth from "./features/auth/RequireAuth"

function App() {
  //TODO: Build a protected Route component to the path="home/*" if they are logged in

  return (
    <div className="App">
      {/* 
      //TODO: Build a component that wraps our application. This component will allow us to view the Home component if they are logged in, or the Login and Register component if they are not.

      //https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
      */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home/*"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />
        <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>} />
      </Routes>

    </div>
  );
}

export default App;
