import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div>
        <Header/>

      <div className='row'>
        <Sidebar/>

        <div className='col-6'>
            <h1>Login and Registration Section</h1>
        </div>
      </div>
    
    </div>
  )
}

export default Home