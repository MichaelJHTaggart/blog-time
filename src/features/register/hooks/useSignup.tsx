import {useState} from 'react';
import {auth} from '../../../firebase/config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

import {useNavigate} from 'react-router-dom';

export const useSignup = () => {
 const [error, setError] = useState(null);
 const navigate = useNavigate();

 const signUp = (email: string, password: string) => {
  setError(null);
  createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    console.log(res.user);
    navigate('/home');
       //TODO: signUp needs to dispatch an action to the store to update the global state
    //TODO: add username, blogName, UID to firebase
  })
  .catch((err) => {
    console.log(err);
    setError(err.message);
  });
 }
 return {error, signUp};
}
 