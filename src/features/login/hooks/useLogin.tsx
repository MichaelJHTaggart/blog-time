import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { auth } from '../../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
 const [error, setError] = useState(null);
 const navigate = useNavigate();
 const location = useLocation();

 let from = location.state?.from?.pathname || '/home';

 const login = (email: string, password: string) => {
  setError(null)
  signInWithEmailAndPassword(auth, email, password)
   .then((res) => {
    console.log(res.user)

    navigate(from, { replace: true });
    //TODO: signUp needs to dispatch an action to the store to update the global state
    //TODO: add username, blogName, UID to firebase
   })
   .catch((err) => {
    setError(err.message);
   });
 }

 return { error, login };
}