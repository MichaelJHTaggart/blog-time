import {useState} from 'react';
import { useSignup } from './hooks/useSignup';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [blogName, setBlogName] = useState('');
  const {error, signUp} = useSignup();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signUp(email, password);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="blogName">Blog Name</label>
        <input type="text" placeholder="blog name" value={blogName} onChange={(e) => setBlogName(e.target.value)} />
        <button onSubmit={handleSubmit}>Submit</button>
        <h3>If you already have an account, please login <Link to="/">here</Link></h3>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default Register;