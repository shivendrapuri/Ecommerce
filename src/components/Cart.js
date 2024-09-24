import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../redux/Slice";

const Cart = () => {
    const productsData = useSelector((state) => state.productDetails.value);
    const dispatch = useDispatch();

    return (
        <>
            <div className="container" style={{ paddingTop: "70px" }}>
                <h1 style={{ textAlign: "center" }}>Cart Product's</h1>
                
                {productsData.length === 0 ? (
                    <div className="text-center">
                        <h2>Your Cart is Empty</h2>
                        <p>Add products to your cart to see them here.</p>
                    </div>
                ) : (
                    <div className="row">
                        {
                            productsData.map((value) => (
                                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={value.id}>
                                    <div className="card h-100">
                                        <img 
                                            src={value.thumbnail} 
                                            alt="image not found" 
                                            className="card-img-top" 
                                            style={{ height: "200px", objectFit: "cover" }} 
                                        />
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title"><b>Brand: </b>{value.title.slice(0, 15)}</h5>
                                            <p className="card-text"><b>Price: </b>{value.price}</p>
                                            <p className="card-text"><b>Total: </b>{value.price * value.qty}</p>
                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <div className="btn-group" role="group" aria-label="Quantity controls">
                                                    <button 
                                                        className="btn btn-outline-primary" 
                                                        onClick={() => dispatch(decrementQty(value.id))}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-3"><b>Qty: {value.qty}</b></span>
                                                    <button 
                                                        className="btn btn-outline-primary" 
                                                        onClick={() => dispatch(incrementQty(value.id))}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button 
                                                    className="btn btn-danger" 
                                                    onClick={() => dispatch(removeItem(value.id))}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
