import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { products } from '../data/products'
import Pc from '../assets/img/gamers/pc.jpg'
import Laptop from '../assets/img/gamers/laptop.jpg'
import Mouse from '../assets/img/gamers/mouse.jpg'
import Keyboard from '../assets/img/gamers/keyboard.jpg'
import './gamers.scss'

export default function Gamers() {
  return (
    <div className='gamers'>
        <Navbar />
        <main className='gamersMain'>
            <Link to={'/gamers/pc'}><CategoryCard img={Pc} title={products.gamers.pc.title} /></Link>
            <Link to={'/gamers/laptop'}><CategoryCard img={Laptop} title={products.gamers.laptop.title} /></Link>
            <Link to={'/gamers/mouse'}><CategoryCard img={Mouse} title={products.gamers.mouse.title} /></Link>
            <Link to={'/gamers/keyboard'}><CategoryCard img={Keyboard} title={products.gamers.keyboard.title} /></Link>
        </main>
    </div>
  )
}
