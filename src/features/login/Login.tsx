import {useState} from 'react';
import { useLogin } from './hooks/useLogin';
import { Link } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {error, login} = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(username, password);
  } 


  return (

    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>

      <h3>If you do not have an account, please register <Link to="/register">here</Link></h3>

      {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default Login;