import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/Filter';
import Listing from '../Listing/Listing';

const Home = () => {
    const [priceFilter, setPriceFilter] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState(null);

    const handlePriceChange = (price) => {
        setPriceFilter(price);
    };

    const handleCategoryChange = (category) => {
        setCategoryFilter(category);
    };

    return (
        <div>
            <Navbar />
            <Filter onPriceChange={handlePriceChange} onCategoryChange={handleCategoryChange} />
            <Listing priceFilter={priceFilter} categoryFilter={categoryFilter} />
        </div>
    );
}

export default Home