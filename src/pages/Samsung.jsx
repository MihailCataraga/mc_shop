import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { products } from '../data/products'
import Phone from '../assets/img/samsung/phone.jpg'
import Tablet from '../assets/img/samsung/tablet.jpg'
import Watch from '../assets/img/samsung/watch.jpg'
import Buds from '../assets/img/samsung/buds.jpg'
import './samsung.scss'

export default function Samsung() {
  return (
    <div className='samsung'>
        <Navbar />
        <main className='samsungMain'>
            <Link to={'/samsung/phone'}><CategoryCard img={Phone} title={products.samsung.phone.title} /></Link>
            <Link to={'/samsung/tablet'}><CategoryCard img={Tablet} title={products.samsung.tablet.title} /></Link>
            <Link to={'/samsung/watch'}><CategoryCard img={Watch} title={products.samsung.watch.title} /></Link>
            <Link to={'/samsung/buts'}><CategoryCard img={Buds} title={products.samsung.buds.title} /></Link>
        </main>
    </div>
  )
}
