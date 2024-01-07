import React from 'react'
import CategoryCard from '../components/CategoryCard';
import './apple.scss'
import {products} from '../data/products';
import iPhone from '../assets/img/apple/iPhone.jpg'
import MacBook from '../assets/img/apple/macbook.jpg'
import Watch from '../assets/img/apple/apple-watch.jpg'
import AirPods from '../assets/img/apple/airpods.jpg'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Apple() {
  return (
    <div className='apple'>
        <Navbar />
        <main className='appleMain'>
            <Link to={'/apple/iphone'}><CategoryCard img={iPhone} title={products.apple.iphone.title} /></Link>
            <Link to={'/apple/macbook'}><CategoryCard img={MacBook} title={products.apple.macbook.title} /></Link>
            <Link to={'/apple/watch'}><CategoryCard img={Watch} title={products.apple.watch.title} /></Link>
            <Link to={'/apple/airpods'}><CategoryCard img={AirPods} title={products.apple.airpods.title} /></Link>
        </main>
        
    </div>
    
  )
}
