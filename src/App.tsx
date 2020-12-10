import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import Counter from './components/Counter/Counter'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Counter Icon={FaTwitter} category='Twitter Followers' target={12000} />
      <Counter Icon={FaYoutube} category='Youtube Subscribers' target={5000} />
      <Counter Icon={FaFacebookF} category='Facebook Likes' target={7500} />
    </div>
  )
}

export default App
