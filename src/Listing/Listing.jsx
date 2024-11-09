import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Listing.css'

const Listing = ({ priceFilter, categoryFilter }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3030/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const filterProducts = () => {
        let filteredProducts = [...products];

        if (priceFilter) {
            const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
            filteredProducts = filteredProducts.filter(
                (product) => product.price >= minPrice && product.price <= maxPrice
            );
        }

        if (categoryFilter) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category.toLowerCase() === categoryFilter.toLowerCase()
            );
        }

        return filteredProducts;
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex((item) => item.id === product.id);

            if (productIndex === -1) {
                return [...prevCart, product];
            } else {
                return prevCart;
            }
        });
    };

    const goToCart = () => {
        navigate('/cart', { state: { cart } });
    };

    return (
        <div>
            <button onClick={goToCart} className="btn btn-info">View Cart ({cart.length})</button>
            <div className="d-flex flex-wrap justify-content-start" style={{ gap: '20px', marginLeft: '5rem', marginTop: '2rem' }}>
                {filterProducts().map((product) => (
                    <div key={product.id} className="card" style={{ width: '30%' }}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">Price: ₹{product.price}</p>
                                <button className="btn btn-primary" onClick={() => addToCart(product)} >Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Listing