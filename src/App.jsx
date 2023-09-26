import React, { useState, useRef } from 'react'
import './App.css'
import Auth from './components/Auth'
import Chat from './components/Chat'
import { auth } from './firebase-config'
import { signOut } from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()


const App = () => {
  
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null)

  const signUserOut = async() => {
    await signOut(auth)
    cookies.remove('auth-token')
    setIsAuth(false)
    setRoom(null)
  }

  if (!isAuth) {
    return (
      <div>
          <Auth setIsAuth={setIsAuth} />
      </div>
    )
  }

  return (
    <> {
      room ? (
        <Chat room={room} signUserOut={signUserOut} />
      ) : (
        <div className='room'>
          <div>
            <label>Enter <span>Room</span> Name:</label>
            <input ref={roomInputRef} />
            <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
          </div>
        </div>
      )}
      {/* <div className="sign-out">
        <button onClick={signUserOut}> Sign Out</button>
      </div> */}
    </>
  )
}

export default App