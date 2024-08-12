import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOption, setSortOption] = useState('Sort by');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (option) => {
    setSortOption(option === 'low-to-high' ? 'Low to High' : 'High to Low');
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredProducts = all_product.filter(item => props.category === item.category);
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'Low to High') {
      return a.new_price - b.new_price;
    } else if (sortOption === 'High to Low') {
      return b.new_price - a.new_price;
    } else {
      return 0;
    }
  });

  const productCount = sortedProducts.length;

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{productCount}</span> out of {productCount} products
        </p>
        <div className="shopcategory-sort">
          <button onClick={toggleDropdown} className="sort-button">
            {sortOption} <img src={dropdown_icon} alt="" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-options">
              <div onClick={() => handleSortChange('low-to-high')}>Low to High</div>
              <div onClick={() => handleSortChange('high-to-low')}>High to Low</div>
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
