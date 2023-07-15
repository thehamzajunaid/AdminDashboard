import { useState } from 'react'
import './login.scss'

function Login() {

  const [error, serError] = useState(false)

  return (
    <div className='login'>
      <form>
        <input type="email" placeholder='email' />
        <input type="password"/>
        <button type='submit'> Login </button>
        {/* {error && <span>Wrong email or password!</span>} */}
        
      </form>
    </div>
  )
}

export default Login