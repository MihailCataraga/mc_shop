import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItemData } from '../store/itemData';
import Navbar from '../components/Navbar';
import './item.scss'
import { FaCartPlus } from 'react-icons/fa';

export default function ItemWatch
() {
    // Take product from Redux store
    const dispatch = useDispatch();
    const product = useSelector((state) => state.itemData);

    // Set product to localStorage
    useEffect(() => {
        if (!product) {
            const storedProduct = localStorage.getItem('product');
            if (storedProduct) {
                dispatch(setItemData(JSON.parse(storedProduct)));
            }
        } else {
            localStorage.setItem('product', JSON.stringify(product));
        }
    }, [dispatch, product]);
    return (
        <div className='itemPage'>
            <Navbar />
            <main className='item'>
                <h1>{product.name}</h1>
                <div className='presentation'>
                    <img src={product.img} alt='Item img' />
                    <div className='right'>
                        <div className='miniSpecifications'>
                            <p>Color: {product.color}</p>
                            <p>Size: {product.size}</p>
                            <p>Display Size: {product.display.size}</p>
                            <p>Battery Capacity: {product.battery.capacity}</p>
                        </div>
                        <div className='buy'>
                            <p className='price'>Price: {product.price}</p>
                            <button>Add to cart <FaCartPlus className='logo' /></button>
                        </div>
                    </div>
                </div>
                <div className='specifications'>
                    <h2>Specification: </h2>
                    <div>
                        <p>Color: {product.color}</p>
                        <p>Display Size: {product.display.size}</p>
                        <p>Display Type: {product.display.type}</p>
                        <p>Display Resolution: {product.display.resolution}</p>
                        <p>Display Touchscreen: {product.display.touchscreen}</p>
                        <p>Sensors: {product.features.sensors.map((i) => i + ', ')}</p>
                        <p>Connectivity: {product.features.connectivity.map((i) => i + ', ')}</p>
                        <p>Waterproof: {product.features.waterproof}</p>
                        <p>Cellular: {product.features.cellular}</p>
                        <p>Battery Capacity: {product.battery.capacity}</p>
                        <p>Battery Charging: {product.battery.charging}</p>
                        <p>Battery Life: {product.battery.batteryLife}</p>
                        <p>Compatible With: {product.compatibility.compatibleWith.map((i) => i + ', ')}</p>
                        <p>Companion App: {product.compatibility.companionApp}</p>
                        <p>Materials: {product.design.materials.map((i) => i + ', ')}</p>
                        <p>Colors Available: {product.design.colorsAvailable.map((i) => i + ', ')}</p>
                        <p>Straps: {product.design.straps.map((i) => i + ', ')}</p>
                        <p>Weight: {product.design.weight}</p>
                        <p>Thickness: {product.design.thickness}</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
