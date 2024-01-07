import React from 'react'
import Navbar from '../components/Navbar'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './iphone.scss'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setItemData } from '../store/itemData'

export default function Iphone() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    // Get filer by category 
    const colors = searchParams.getAll('colors');
    const storage = searchParams.getAll('storage');
    const model = searchParams.getAll('model');

    // Filter logic
    const handleFilterChange = (event, filterType) => {
        const { name, checked } = event.target;
        const currentFilters = searchParams.getAll(filterType);
    
        let updatedFilters = [];
        if (checked) {
            updatedFilters = [...currentFilters, name];
        } else {
            updatedFilters = currentFilters.filter(filter => filter !== name);
        }
    
        setSearchParams((prevParams) => {
            const updatedParams = { ...Object.fromEntries(prevParams.entries()) };
            // Update only the specific filter type
            updatedParams[filterType] = updatedFilters;
    
            // Retain other filter types
            const otherFilterTypes = ['colors', 'storage', 'model'].filter(type => type !== filterType);
            otherFilterTypes.forEach(type => {
                updatedParams[type] = searchParams.getAll(type);
            });
    
            return updatedParams;
        });
    };

    // Clear all filters function
    const handleResetFilters = () => {
        setSearchParams({});
    };

    // Filter products by useSearchParams value and return filtered products
    const filteredProductsIPhone15 = products.apple.iphone.iphone15.filter(product => {
        const hasSelectedColor = colors.length === 0 || colors.includes(product.color);
        const hasSelectedStorage = storage.length === 0 || storage.includes(product.storage);
        const hasSelectedModel = model.length === 0 || model.includes(product.name);

        return hasSelectedColor && hasSelectedStorage && hasSelectedModel;
    });
    const filteredProductsIPhone15Pro = products.apple.iphone.iphone15pro.filter(product => {
        const hasSelectedColor = colors.length === 0 || colors.includes(product.color);
        const hasSelectedStorage = storage.length === 0 || storage.includes(product.storage);
        const hasSelectedModel = model.length === 0 || model.includes(product.name);

        return hasSelectedColor && hasSelectedStorage && hasSelectedModel;
    });
    const filteredProductsIPhone15ProMax = products.apple.iphone.iphone15promax.filter(product => {
        const hasSelectedColor = colors.length === 0 || colors.includes(product.color);
        const hasSelectedStorage = storage.length === 0 || storage.includes(product.storage);
        const hasSelectedModel = model.length === 0 || model.includes(product.name);

        return hasSelectedColor && hasSelectedStorage && hasSelectedModel;
    });

    return (
        <div className='iphonePage'>
            <Navbar />
            <main className='iphoneMain'>
                <div className='filter'>
                    <div className='resetFilter'>
                        <button onClick={handleResetFilters}>Reset Filters</button>
                    </div>
                    <h2>Color:</h2>
                    <div className='options'>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorBlack'
                                name="Black"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Black')} />
                            <label htmlFor='colorBlack'>Black</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorRed'
                                name="Red"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Red')} />
                            <label htmlFor='colorRed'>Red</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorBlue'
                                name="Blue"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Blue')} />
                            <label htmlFor='colorBlue'>Blue</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorWhite'
                                name="White"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('White')} />
                            <label htmlFor='colorWhite'>White</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorSilver'
                                name="Silver"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Silver')} />
                            <label htmlFor='colorSilver'>Silver</label>
                        </div>
                    </div>

                    {/* Storege */}
                    <h2>Storage: </h2>
                    <div className='options'>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='storage128GB'
                                name="128GB"
                                onChange={(e) => handleFilterChange(e, 'storage')}
                                checked={searchParams.getAll('storage').includes('128GB')} />
                            <label htmlFor='storage128GB'>128GB</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='storage256GB'
                                name="256GB"
                                onChange={(e) => handleFilterChange(e, 'storage')}
                                checked={searchParams.getAll('storage').includes('256GB')} />
                            <label htmlFor='storage256GB'>256GB</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='storage512GB'
                                name="512GB"
                                onChange={(e) => handleFilterChange(e, 'storage')}
                                checked={searchParams.getAll('storage').includes('512GB')} />
                            <label htmlFor='storage512GB'>512GB</label>
                        </div>
                    </div>

                    {/* Model */}
                    <h2>Model: </h2>
                    <div className='options'>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='iphone15'
                                name="iPhone 15"
                                onChange={(e) => handleFilterChange(e, 'model')}
                                checked={searchParams.getAll('model').includes('iPhone 15')} />
                            <label htmlFor='iphone15'>iPhone 15</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='iphone15pro'
                                name="iPhone 15 Pro"
                                onChange={(e) => handleFilterChange(e, 'model')}
                                checked={searchParams.getAll('model').includes('iPhone 15 Pro')} />
                            <label htmlFor='iphone15pro'>iPhone 15 Pro</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='iphone15promax'
                                name="iPhone 15 Pro Max"
                                onChange={(e) => handleFilterChange(e, 'model')}
                                checked={searchParams.getAll('model').includes('iPhone 15 Pro Max')} />
                            <label htmlFor='iphone15promax'>iPhone 15 Pro Max</label>
                        </div>
                    </div>
                </div>
                <div className='products'>
                    {
                        filteredProductsIPhone15.map((product) => {
                            return (
                                <Link key={product.id} to={`/apple/iphone/${product.name + '+' + product.color + '+' + product.storage}`} onClick={() => dispatch(setItemData(product))}>
                                    <div>
                                        <ProductCard name={product.name} storage={product.storage} color={product.color} img={product.img} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                    {
                        filteredProductsIPhone15Pro.map((product) => {
                            return (
                                <Link key={product.id} to={`/apple/iphone/${product.name + '+' + product.color + '+' + product.storage}`} onClick={() => dispatch(setItemData(product))}>
                                    <div>
                                        <ProductCard name={product.name} storage={product.storage} color={product.color} img={product.img} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                    {
                        filteredProductsIPhone15ProMax.map((product) => {
                            return (
                                <Link key={product.id} to={`/apple/iphone/${product.name + '+' + product.color + '+' + product.storage}`} onClick={() => dispatch(setItemData(product))}>
                                    <div>
                                        <ProductCard name={product.name} storage={product.storage} color={product.color} img={product.img} />
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </main>
        </div>
    )
}
