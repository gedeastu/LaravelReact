import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
    <header>
    <nav>
    <NavLink to={`/`}>
    Shop
    </NavLink>
    <NavLink to={`/Explore`}>
    Explore
    </NavLink>
    </nav>
    </header>
    <main>
    <Outlet/>
    </main>
    <footer></footer>
    </>
  )
}

export default RootLayout