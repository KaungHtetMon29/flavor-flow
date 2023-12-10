import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLogIn } from '../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [newUser, setNewUser] = useState({
    user: {
      email: '',
      password: '',
    }
  })

  const handleChange = (name, value) => {
    setNewUser((prev) => ({
      user:{
        ...prev.user,
        [name]: value
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogIn(newUser)).then((res) => {
      if(res.payload) {
        setErrorMessage('')
        navigate('/home')
      } else {
        setErrorMessage('Log In Failed Please Try Again !!!  ')
        setNewUser((prev) => ({
          user: {
            ...prev.user,
            email: '',
            password: ''
          }
        }))
      }
    })
  }

  
  return (
    <div>
      <h1>This is login page</h1>
      <form action="">
      <input type="email" name='email' placeholder='email' className='border' value={newUser.user.email} onChange={(e) => handleChange('email', e.target.value)} />
      <br></br>
      <input type="password" name='password' placeholder='password'  value={newUser.user.password} className='border' onChange={(e) => handleChange('password', e.target.value)} />
      <br />
      <small>{errorMessage}</small>      <br />
      <button type='submit' onClick={handleSubmit} className='border px-3 py-1 bg-blue-500 text-white'>Login</button>

      </form>
    </div>
  )
}

export default Login
