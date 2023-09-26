import React, { useState, useEffect } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy,Timestamp } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
import '../styles/Chat.css'

const Chat = (props) => {
    const {room, signUserOut} = props
    const [newMessage, setNewMessage] = useState('')
    const messagesRef = collection(db, 'messages')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const queryMessages = query(messagesRef, where('room', '==', room),
        orderBy('createdAt'))
        const unsubscribe = onSnapshot(queryMessages, (snapshot)=>{
            let messageList = []
            snapshot.forEach((doc) => {
                messageList.push({...doc.data(), id: doc.id})
            })
            setMessages(messageList)
        })

        return () => unsubscribe()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newMessage === '') return

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            pic: auth.currentUser.photoURL,
            room
        })

        setNewMessage('')
    }

    const handleName = (e) => {
        // console.log(e.target.parentNode.querySelector('h6'));
        e.target.parentNode.parentNode.querySelector('h6').style.display = 'block'
        setTimeout(() => {
            e.target.parentNode.parentNode.querySelector('h6').style.display = 'none'
        }, 2000);
    }

    // const handleDate = (ts) => {
    //     if (ts && ts.seconds && ts.nanoseconds) {
    //         const newTime = new Date((ts.seconds * 1000 + ts.nanoseconds) / 1000000)
    //         const localTime = newTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    //         return localTime
    //     } else {
    //         return ''
    //     }
    // } 

    const handleCopy = () => {
        navigator.clipboard.writeText(room)
    }

  return (
    <div className='chat-app'>
        <div className="header">
            <div onClick={handleCopy}>
                <p> Welcome to </p>
                <div>{room} <span className="material-symbols-outlined">content_copy</span></div>
            </div>
            <span className="material-symbols-outlined"
            onClick={signUserOut}>logout</span>
        </div>

        <div className='messages'>
            {messages.map((msg) => 
                <div className="message" key={msg.id}>
                    <div className="msg-up">
                        <img src={msg.pic} onClick={handleName} />
                        <p>{msg.text}</p>
                    </div>
                    <h6>{msg.user}</h6>
                    {/* <span className='date'>{
                        handleDate(msg.createdAt)
                    }</span> */}
                </div>
            )}
        </div>

        <form onSubmit={handleSubmit} className='new-message-form'>
            <input type='text'
            className='new-message-input'
            placeholder=' Chat here...'
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage} />
            <button type='submit' className='send-button'>
                <span className="material-symbols-outlined">send</span>
            </button>
        </form>
    </div>
  )
}

export default Chat