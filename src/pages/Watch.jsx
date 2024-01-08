import React from 'react'
import Navbar from '../components/Navbar'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './watch.scss'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setItemData } from '../store/itemData'

export default function Watch() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    // Get filer by category 
    const colors = searchParams.getAll('colors');
    const size = searchParams.getAll('size');
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
            const otherFilterTypes = ['colors', 'size', 'model'].filter(type => type !== filterType);
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
    const filteredProductsWhatchUltra2 = products.apple.watch.watchUltra2.filter(product => {
        const hasSelectedColor = colors.length === 0 || colors.includes(product.color);
        const hasSelectedSize = size.length === 0 || size.includes(product.size);
        const hasSelectedModel = model.length === 0 || model.includes(product.name);

        return hasSelectedColor && hasSelectedSize && hasSelectedModel;
    });
    const filteredProductsWhatchSeries9 = products.apple.watch.watchSeries9.filter(product => {
        const hasSelectedColor = colors.length === 0 || colors.includes(product.color);
        const hasSelectedSize = size.length === 0 || size.includes(product.size);
        const hasSelectedModel = model.length === 0 || model.includes(product.name);

        return hasSelectedColor && hasSelectedSize && hasSelectedModel;
    });
    const filteredProductsWhatchUltra = products.apple.watch.watchUltra.filter(product => {
        const hasSelectedColor = colors.length === 0 || colors.includes(product.color);
        const hasSelectedSize = size.length === 0 || size.includes(product.size);
        const hasSelectedModel = model.length === 0 || model.includes(product.name);

        return hasSelectedColor && hasSelectedSize && hasSelectedModel;
    });

    return (
        <div className='watchPage'>
            <Navbar />
            <main className='watchMain'>
                <div className='filter'>
                    <div className='resetFilter'>
                        <button onClick={handleResetFilters}>Reset Filters</button>
                    </div>
                    <h2>Color:</h2>
                    <div className='options'>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorGray'
                                name="Gray"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Gray')} />
                            <label htmlFor='colorGray'>Gray</label>
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
                                id='colorMidnight'
                                name="Midnight"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Midnight')} />
                            <label htmlFor='colorMidnight'>Midnight</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorBeige'
                                name="Beige"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Beige')} />
                            <label htmlFor='colorBeige'>Beige</label>
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
                                id='colorPink'
                                name="Pink"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Pink')} />
                            <label htmlFor='colorPink'>Pink</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorOrange'
                                name="Orange"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Orange')} />
                            <label htmlFor='colorOrange'>Orange</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorYellow'
                                name="Yellow"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Yellow')} />
                            <label htmlFor='colorYellow'>Yellow</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='colorGreen'
                                name="Green"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Green')} />
                            <label htmlFor='colorGreen'>Green</label>
                        </div>
                    </div>

                    {/* Size */}
                    <h2>Size: </h2>
                    <div className='options'>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='size45mmm'
                                name="49mm"
                                onChange={(e) => handleFilterChange(e, 'size')}
                                checked={searchParams.getAll('size').includes('49mm')} />
                            <label htmlFor='size45mmm'>49mm</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='size45mm'
                                name="45mm"
                                onChange={(e) => handleFilterChange(e, 'size')}
                                checked={searchParams.getAll('size').includes('45mm')} />
                            <label htmlFor='size45mm'>45mm</label>
                        </div>
                    </div>

                    {/* Model */}
                    <h2>Model: </h2>
                    <div className='options'>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='watchUltra2'
                                name="Watch Ultra 2"
                                onChange={(e) => handleFilterChange(e, 'model')}
                                checked={searchParams.getAll('model').includes('Watch Ultra 2')} />
                            <label htmlFor='watchUltra2'>Watch Ultra 2</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='watchSeries9'
                                name="Watch Series 9"
                                onChange={(e) => handleFilterChange(e, 'model')}
                                checked={searchParams.getAll('model').includes('Watch Series 9')} />
                            <label htmlFor='watchSeries9'>Watch Series 9</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='watchUltra'
                                name="Watch Ultra"
                                onChange={(e) => handleFilterChange(e, 'model')}
                                checked={searchParams.getAll('model').includes('Watch Ultra')} />
                            <label htmlFor='watchUltra'>Watch Ultra</label>
                        </div>
                    </div>
                </div>
                <div className='products'>
                    {
                        filteredProductsWhatchUltra2.map((product) => {
                            return (
                                <Link key={product.id} to={`/apple/watch/${product.name + '+' + product.color + '+' + product.size}`} onClick={() => dispatch(setItemData(product))}>
                                    <div>
                                        <ProductCard name={product.name} storage={product.storage} color={product.color} img={product.img} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                    {
                        filteredProductsWhatchSeries9.map((product) => {
                            return (
                                <Link key={product.id} to={`/apple/watch/${product.name + '+' + product.color + '+' + product.size}`} onClick={() => dispatch(setItemData(product))}>
                                    <div>
                                        <ProductCard name={product.name} storage={product.storage} color={product.color} img={product.img} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                    {
                        filteredProductsWhatchUltra.map((product) => {
                            return (
                                <Link key={product.id} to={`/apple/watch/${product.name + '+' + product.color + '+' + product.size}`} onClick={() => dispatch(setItemData(product))}>
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
