import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { setItemData } from '../store/itemData';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { products } from '../data/products';
import './macbook-pro-14.scss';

export default function MacbookPro14() {

    // Take product from Redux store
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    // Get filer by category 
    const colors = searchParams.getAll('colors');
    const storage = searchParams.getAll('storage');

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
            const otherFilterTypes = ['colors', 'storage'].filter(type => type !== filterType);
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
    const filteredProductsMacbookPro14 = products.apple.macbook.macbookPro14.filter(product => {
        const hasSelectedColor = colors.length === 0 || colors.includes(product.color);
        const hasSelectedStorage = storage.length === 0 || storage.includes(product.storage);

        return hasSelectedColor && hasSelectedStorage;
    });

    return (
        <div className='macbookPro14'>
            <Navbar />
            <main>
                <div className='filter'>
                    {/* Color */}
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
                                id='colorSilver'
                                name="Silver"
                                onChange={(e) => handleFilterChange(e, 'colors')}
                                checked={searchParams.getAll('colors').includes('Silver')} />
                            <label htmlFor='colorSilver'>Silver</label>
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
                    </div>

                    {/* Storege */}
                    <h2>Storage: </h2>
                    <div className='options'>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='storage512GB'
                                name="512GB"
                                onChange={(e) => handleFilterChange(e, 'storage')}
                                checked={searchParams.getAll('storage').includes('512GB')} />
                            <label htmlFor='storage512GB'>512GB</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='storage1TB'
                                name="1TB"
                                onChange={(e) => handleFilterChange(e, 'storage')}
                                checked={searchParams.getAll('storage').includes('1TB')} />
                            <label htmlFor='storage1TB'>1TB</label>
                        </div>
                        <div className='option'>
                            <input
                                type='checkbox'
                                id='storage2TB'
                                name="2TB"
                                onChange={(e) => handleFilterChange(e, 'storage')}
                                checked={searchParams.getAll('storage').includes('2TB')} />
                            <label htmlFor='storage2TB'>2TB</label>
                        </div>
                    </div>
                </div>  
                <div className='products'>
                        {
                            filteredProductsMacbookPro14.map((product) => {
                                return (
                                    <Link key={product.id} to={`/apple/macbook/${product.name + '+' + product.color + '+' + product.storage}`} onClick={() => dispatch(setItemData(product))}>
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
