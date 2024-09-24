import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://tutorials.codebetter.in:7084/auth/login", form);
            console.log(response.data);
            if (response.data.status === true) {
                localStorage.setItem("authToken", response.data.token); 
                navigate("/"); 
            }
        } catch (error) {
            console.log("data not found", error);
        }
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", height: "80vh", alignItems: "center" }}>
                <div style={{ border: "3px solid black", padding: "20px", margin: "auto", height: "fit-content" }}>
                    <div>
                        <h1>Login Here!</h1><br/>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email*</label>
                                <input type="email" placeholder="Enter Email" className="form-control" name="email" value={form.email} onChange={handleInput} required />
                            </div>
                            <div className="form-group">
                                <label>Password*</label>
                                <input type="password" placeholder="Enter Password" className="form-control" name="password" value={form.password} onChange={handleInput} required />
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary form-control">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
