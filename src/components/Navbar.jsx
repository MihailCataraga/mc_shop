import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
import { FaOpencart, FaHome, FaApple } from "react-icons/fa";
import { IoPhonePortraitOutline, IoGameController } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    // All about menu and submenu 
    const [menu, setMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
    const [apple, setApple] = useState(false)
    const [samsung, setSamsung] = useState(false)
    const [gamers, setGamers] = useState(false)
    const [audio, setAudio] = useState(false)

    return (
        <div className='navbar' onMouseLeave={() => setMenu(false)}>
            <NavLink to={'/'}><h1>MC<FaOpencart className='iconLogo' /></h1></NavLink>
            <nav>
                <NavLink to={'/'}><FaHome className='icon' />Home</NavLink>
                <div className={menu ? 'menu activeMenu' : 'menu'} onClick={() => setMenu(!menu)} onMouseLeave={() => setSubMenu(false)}>
                    <FiMenu className='icon' />
                    <p>All categories</p>
                    {menu && <div className={subMenu ? 'menuList menuListActive' : 'menuList'} onMouseLeave={() => setMenu(false)}>
                        <nav onMouseEnter={() => setSubMenu(true)}>
                            <NavLink to={'/apple'} onMouseEnter={() => { setApple(true); setSamsung(false); setGamers(false); setAudio(false) }}><FaApple className='logo' />Apple</NavLink>
                            <NavLink to={'/samsung'} onMouseEnter={() => { setApple(false); setSamsung(true); setGamers(false); setAudio(false) }}><IoPhonePortraitOutline className='logo' />Samsung</NavLink>
                            <NavLink to={'/gamers'} onMouseEnter={() => { setApple(false); setSamsung(false); setGamers(true); setAudio(false) }}><IoGameController className='logo' />For Gamers</NavLink>
                            <NavLink to={'/audio'} onMouseEnter={() => { setApple(false); setSamsung(false); setGamers(false); setAudio(true) }}><FaHeadphones className='logo' />Audio</NavLink>
                        </nav>
                        {subMenu && <div className='subMenuList'>
                            {apple && <div className='apple'>
                                <div className='iphone'>
                                    <NavLink to={'/apple/iphone'} className='main'>iPhone</NavLink>
                                    <NavLink to={'/apple/iphone/iphone-15'}>iPhone 15</NavLink>
                                    <NavLink to={'/apple/iphone/iphone-15-pro'}>iPhone 15 Pro</NavLink>
                                    <NavLink to={'/apple/iphone/iphone-15-pro-max'}>iPhone 15 Pro Max</NavLink>
                                </div>
                                <div className='macbook'>
                                    <NavLink to={'/apple/macbook'} className='main'>MacBook</NavLink>
                                    <NavLink to={'/apple/macbook/macbook-air-15-2023'}>MacBook Air 15 2023</NavLink>
                                    <NavLink to={'/apple/macbook/macbook-pro-16-2023'}>MacBook Pro 16 2023</NavLink>
                                    <NavLink to={'/apple/macbook/macbook-pro-14-2023'}>MacBook Pro 14 2023</NavLink>
                                </div>
                                <div className='watch'>
                                    <NavLink to={'/apple/watch'} className='main'>Watch</NavLink>
                                    <NavLink to={'/apple/watch'}>Watch Ultra 2</NavLink>
                                    <NavLink to={'/apple/watch'}>Watch Series 9</NavLink>
                                    <NavLink to={'/apple/watch'}>Watch Ultra</NavLink>
                                </div>
                                <div className='airpods'>
                                    <NavLink to={'/apple/airpods'} className='main'>AirPods</NavLink>
                                    <NavLink to={'/apple/airpods/airpods-pro-2'}>AirPods Pro 2</NavLink>
                                    <NavLink to={'/apple/airpods/airpods-pro'}>AirPods Pro</NavLink>
                                    <NavLink to={'/apple/airpods/airpods-3'}>AirPods 3</NavLink>
                                </div>
                            </div>}
                            {samsung && <div className='samsung'>
                                <div className='phone'>
                                    <NavLink to={'/samsung/phone'} className='main'>Phone</NavLink>
                                    <NavLink to={'/samsung/phone/galaxy-s23'}>Galaxy S23</NavLink>
                                    <NavLink to={'/samsung/phone/galaxy-fold3'}>Galaxy Fold 3</NavLink>
                                    <NavLink to={'/samsung/phone/galaxy-flip4'}>Galaxy Flip 4</NavLink>
                                </div>
                                <div className='tablet'>
                                    <NavLink to={'/samsung/tablet'} className='main'>Tablet</NavLink>
                                    <NavLink to={'/samsung/tablet/galaxy-tab-s8'}>Galaxy Tab S8</NavLink>
                                    <NavLink to={'/samsung/tablet/galaxy-tab-s8+'}>Galaxy Tab S8+</NavLink>
                                    <NavLink to={'/samsung/tablet/galaxy-tab-s8ultra'}>Galaxy Tab S8 Ultra</NavLink>
                                </div>
                                <div className='watch'>
                                    <NavLink to={'/samsung/watch'} className='main'>Watch</NavLink>
                                    <NavLink to={'/samsung/watch/galay-watch-6'}>Galaxy Watch 6</NavLink>
                                    <NavLink to={'/samsung/watch/galay-watch-5'}>Galaxy Watch 5</NavLink>
                                    <NavLink to={'/samsung/watch/galay-watch-4'}>Galaxy Watch 4</NavLink>
                                </div>
                                <div className='buds'>
                                    <NavLink to={'/samsung/buds'} className='main'>Buds</NavLink>
                                    <NavLink to={'/samsung/buds/galaxy-buds-2-pro'}>Galaxy Buds 2 Pro</NavLink>
                                    <NavLink to={'/samsung/buds/galaxy-buds-2'}>Galaxy Buds 2</NavLink>
                                    <NavLink to={'/samsung/buds/galaxy-buds-pro'}>Galaxy Buds Pro</NavLink>
                                </div>
                            </div>}
                            {gamers && <div className='gamers'>
                                <div className='pc'>
                                    <NavLink to={'/gamers/pc'} className='main'>Pc</NavLink>
                                    <NavLink to={'/gamers/pc/apple'}>Apple</NavLink>
                                    <NavLink to={'/gamers/pc/mini-pc'}>Mini PC</NavLink>
                                    <NavLink to={'/gamers/pc/navigator'}>Navigator</NavLink>
                                </div>
                                <div className='laptop'>
                                    <NavLink to={'/gamers/laptop'} className='main'>Laptop</NavLink>
                                    <NavLink to={'/gamers/laptop/asus-rog'}>Asus ROG</NavLink>
                                    <NavLink to={'/gamers/laptop/lenovo-loq'}>Lenovo LOQ</NavLink>
                                    <NavLink to={'/gamers/laptop/acer-predator'}>Acer Predator</NavLink>
                                </div>
                                <div className='mouse'>
                                    <NavLink to={'/gamers/mouse'} className='main'>Mouse</NavLink>
                                    <NavLink to={'/gamers/mouse/mouse-logitech'}>Mouse Logitech</NavLink>
                                    <NavLink to={'/gamers/mouse/mouse-razer'}>Mouse Razer</NavLink>
                                    <NavLink to={'/gamers/mouse/mouse-hyperx'}>Mouse HyperX</NavLink>
                                </div>
                                <div className='keyboard'>
                                    <NavLink to={'/gamers/keyboard'} className='main'>Keyboard</NavLink>
                                    <NavLink to={'/gamers/keyboard/keyboard-logitech'}>Keyboard Logitech</NavLink>
                                    <NavLink to={'/gamers/keyboard/keyboard-hyperx'}>Keyboard HyperX</NavLink>
                                    <NavLink to={'/gamers/keyboard/keyboard-sven'}>Keyboard Sven</NavLink>
                                </div>
                            </div>}
                            {audio && <div className='audio'>
                                <div className='headphones'>
                                    <NavLink to={'/audio/headphones'} className='main'>Headphones</NavLink>
                                    <NavLink to={'/audio/headphones/headphones-apple'}>Headphones Apple</NavLink>
                                    <NavLink to={'/audio/headphones/headphones-sven'}>Headphones Sven</NavLink>
                                    <NavLink to={'/audio/headphones/headphones-hyperx'}>Headphones HyperX</NavLink>
                                </div>
                                <div className='speakers'>
                                    <NavLink to={'/audio/speakers'} className='main'>Speakers</NavLink>
                                    <NavLink to={'/audio/speakers/speakers-sven'}>Speakers Sven</NavLink>
                                    <NavLink to={'/audio/speakers/speakers-jbl'}>Speakers JBL</NavLink>
                                    <NavLink to={'/audio/speakers/speakers-hoco'}>Speakers Hoco</NavLink>
                                </div>
                                <div className='soundbar'>
                                    <NavLink to={'/audio/soundbar'} className='main'>Soundbar</NavLink>
                                    <NavLink to={'/audio/soundbar/soundbar-jbl'}>Soundbar JBL</NavLink>
                                    <NavLink to={'/audio/soundbar/soundbar-samsung'}>Soundbar Samsung</NavLink>
                                    <NavLink to={'/audio/soundbar/soundbar-xiaomi'}>Soundbar Xiaomi</NavLink>
                                </div>
                                <div className='microphone'>
                                    <NavLink to={'/audio/microphone'} className='main'>Microphone</NavLink>
                                    <NavLink to={'/audio/microphone/microphone-logitech'}>Microphone JBL</NavLink>
                                    <NavLink to={'/audio/microphone/microphone-boya'}>Microphone Boya</NavLink>
                                    <NavLink to={'/audio/microphone/microphone-sven'}>Microphone Sven</NavLink>
                                </div>
                            </div>}
                        </div>}
                    </div>}
                </div>
                <NavLink to={'/promotions'}>Promotions</NavLink>
                <div>
                    <input type='text' placeholder='Search your product' />{
                    /* logo cautare */}
                </div>
                <NavLink to={'/account'}>
                    {/* logo account */}
                </NavLink>
                <NavLink to={'/compare'}>
                    {/* logo comparare */}
                </NavLink>
                <NavLink to={'/favorite'}>
                    {/* logo favorite */}
                </NavLink>
                <NavLink to={'/cart'}>
                    {/* logo cart */}
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
