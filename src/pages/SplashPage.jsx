import React from 'react'
import { Link } from 'react-router-dom'
const SplashPage = () => {
  return (
    <div>
      <h1>This is splash page</h1>
      <Link to='/signup'>Sign up</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default SplashPage
