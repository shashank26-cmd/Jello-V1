import { auth, provider } from '../firebase-config.js'
import { signInWithPopup } from 'firebase/auth'
import '../styles/Auth.css'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Auth = (props) => {
  const { setIsAuth } = props

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      cookies.set('auth-token', result.user.refreshToken)
      setIsAuth(true)
    } catch (err) {
      console.log(err)
    }
  }
    return (
    <div className='auth'>
      {/* <img className='bg-img' src="https://iili.io/JJlHVWP.jpg"/> */}
      <div className="auth-box-wrap">
        <div className='auth-box'>
          
          <h1>Welcome to <span>Jello Chat</span></h1>
          <p>Connecting Jellies Worldwide!</p>
          <button onClick={signInWithGoogle}> Sign In with Google <img src="https://iili.io/JJ1JZ8u.png"/></button>
        
        </div>
      </div>
    </div>
  )
}

export default Auth