import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './audio.scss'
import Headphones from '../assets/img/audio/headphone.jpg'
import Speakers from '../assets/img/audio/speakers.jpg'
import Soundbar from '../assets/img/audio/soundbar.jpg'
import Microphone from '../assets/img/audio/microphone.jpg'

export default function Audio() {
  return (
    <div className='audio'>
        <Navbar />
        <main className='audioMain'>
            <Link to={'/audio/headphones'}><CategoryCard img={Headphones} title={products.audio.headphones.title} /></Link>
            <Link to={'/audio/speakers'}><CategoryCard img={Speakers} title={products.audio.speakers.title} /></Link>
            <Link to={'/audio/soundbar'}><CategoryCard img={Soundbar} title={products.audio.soundbar.title} /></Link>
            <Link to={'/audio/microphone'}><CategoryCard img={Microphone} title={products.audio.microphone.title} /></Link>
        </main>
    </div>
  )
}
