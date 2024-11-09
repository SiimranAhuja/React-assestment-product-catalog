import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
    const location = useLocation(); 
    const navigate = useNavigate();

    const cart = location.state?.cart || [];

    const goBackToListing = () => {
        navigate('/');
    };

    return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-4">
      <h2 className="text-center flex-grow-1">Shopping Cart</h2>
        <button 
          onClick={goBackToListing} 
          className="btn btn-secondary mt-3"
          style={{ position: 'absolute', right: '20px', top: '20px' }}
        >
          Back to Products
        </button>
      </div>
    
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <div className="d-flex flex-wrap justify-content-center" style={{ gap: '20px', marginTop: '20px' }}>
            {cart.map((item) => (
              <div key={item.id} className="col-sm-6 col-md-4 mb-3 mb-md-0 mt-2" style={{ width: '300px' }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <strong>Total: </strong>
            ₹{cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)} {/* Convert price to number */}
          </div>
        </div>
      )}
    </div>
    );
};

export default Cart;
