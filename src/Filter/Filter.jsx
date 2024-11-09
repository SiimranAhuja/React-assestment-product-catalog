import React from 'react';

const Filter = ({ onPriceChange, onCategoryChange }) => {
  return (
    <div className="btn-group" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', marginRight: '1rem' }}>
      
      {/* Price Filter */}
      <div>
        <label htmlFor="priceFilter" className="form-label">Price</label>
        <select
          id="priceFilter"
          className="form-select"
          onChange={(e) => onPriceChange(e.target.value)}
        >
          <option value="">Select Price Range</option>
          <option value="100-10000">100-10000</option>
          <option value="10000-50000">10000-50000</option>
          <option value="50000-100000">50000-100000</option>
        </select>
      </div>

      {/* Category Filter */}
      <div style={{ marginLeft: '2rem' }}>
        <label htmlFor="categoryFilter" className="form-label">Category</label>
        <select
          id="categoryFilter"
          className="form-select"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="gadgets">Gadgets</option>
          <option value="food">Food</option>
          <option value="accessories">Accessories</option>
          <option value="kitchen appliances">Kitchen Appliances</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>
      
    </div>
  );
}

export default Filter;
