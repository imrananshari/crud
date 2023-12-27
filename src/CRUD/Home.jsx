import React from 'react'
import { Link } from 'react-router-dom'
import style from "./createuser.module.css"

const Home = () => {
  return (
    <div>
        <section id={style.nav}>
        <Link to="/">CREATE-USER</Link>
        <Link to="/users">USERS</Link>  
        </section>
    </div>
  )
}

export default Home