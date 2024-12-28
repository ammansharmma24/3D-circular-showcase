import React from 'react'

const NavBar = () => {
  return (
    <nav className='text-white flex items-center justify-between py-2 px-5'>
        <div className="logo text-2xl">Logo</div>
        <div className="options flex items-center justify-center gap-5 text-xl">
            <h3 className='cursor-pointer'>Home</h3>
            <h3 className='cursor-pointer'>About</h3>
            <h3 className='cursor-pointer'>Account</h3>
        </div>
    </nav>
  )
}

export default NavBar