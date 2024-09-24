import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WebService from "../services/WebService";
import WebAPI from "../services/WebAPI";
import { addProductData } from "../redux/Slice";
import { useDispatch } from "react-redux";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Home = () => {
    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("authToken");
        if (!isAuthenticated) {
            navigate("/login"); 
        } else {
            loadProductData();
        }
    }, []);
    
    const loadProductData = async () => {
        var response = await WebService.getProductAPI(WebAPI.productAPI);
        console.log("response is" + response);
        var resp = response.data;
        setProductData(resp.products);
    };
    
    return (
        <div className="container" style={{ paddingTop: "70px" }}>
            <div className="row justify-content-center">
                <div className="container-fluid">
                    <h1 className="mt-4 text-center heading">Product's of Ekart</h1>
                </div>
                <div className="row">
                    {
                        productData.map((obj) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-4" key={obj.id}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <img src={obj.thumbnail} height={200} width={200} alt="image not found" className="img-fluid rounded" />
                                        </div>
                                        <h5 className="card-title mt-3">{obj.title}</h5>
                                        <p className="card-text"><b>Brand:</b> {obj.brand}</p>
                                        <p className="card-text"><b>Category:</b> {obj.category}</p>
                                        <div className="d-flex justify-content-between">
                                            <p className="card-text"><b>Price:</b> <CurrencyRupeeIcon />{obj.price}</p>
                                            <p className="card-text"><b>Discount:</b> {obj.discountPercentage}%</p>
                                        </div>
                                        <p className="card-text"><b>Rating:</b> {obj.rating}</p>
                                        <button className="btn btn-primary w-100 mt-3" onClick={() => dispatch(addProductData(obj))}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
