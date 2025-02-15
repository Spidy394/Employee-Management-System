import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <div>
        <form>
            <h3>Task Title</h3>
            <input type="text" placeholder='' />
            <h3>Descriptions</h3>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
