import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItemData } from '../store/itemData';
import Navbar from '../components/Navbar';
import { FaCartPlus } from 'react-icons/fa';

export default function ItemMacbook() {
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
                            <p>Storage: {product.storage}</p>
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
                        <p>Storage: {product.storage}</p>
                        <p>Display Size: {product.display.size}</p>
                        <p>Display Resolution: {product.display.resolution}</p>
                        <p>Display Panel Type: {product.display.panel_type}</p>
                        <p>Display Refersh Rate: {product.display.refresh_rate}</p>
                        <p>Procesor Chipset: {product.processor.chipset}</p>
                        <p>Procesor Cores: {product.processor.cores}</p>
                        <p>Procesor GPU: {product.processor.gpu}</p>
                        <p>Memory Type: {product.memory.type}</p>
                        <p>Memory Capacity: {product.memory.capacity}</p>
                        <p>Storage Type: {product.storagetype.type}</p>
                        <p>Storage Capacity: {product.storagetype.capacity}</p>
                        <p>USB C: {product.ports.usb_c}</p>
                        <p>Thunderbolt: {product.ports.thunderbolt}</p>
                        <p>HDMI: {product.ports.hdmi}</p>
                        <p>Headphone Jack: {product.ports.headphone_jack}</p>
                        <p>Battery Capacity: {product.battery.capacity}</p>
                        <p>Battery Life: {product.battery.battery_life}</p>
                        <p>Operating Sistem: {product.operating_system}</p>
                        <p>Weight: {product.weight}</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
