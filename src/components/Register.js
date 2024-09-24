import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        gender: ""
    });
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://tutorials.codebetter.in:7084/auth/save", form);
            console.log(response.data);
            if (response.data.status === true) {
                navigate("/login");
            }
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", height: "90vh", alignItems: "center" ,padding:"80px" }}>
                <div style={{ border: "3px solid black", padding: "30px", margin: "auto", height: "fit-content" }}>
                    <div>
                        <h1>Register Here!</h1><br />
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name*</label>
                                <input type="text" placeholder="Enter Name" className="form-control" name="name" value={form.name} onChange={handleInput} required />
                            </div>
                            <div className="form-group">
                                <label>Phone*</label>
                                <input type="number" placeholder="Enter Mobile NO." className="form-control" name="mobile" value={form.mobile} onChange={handleInput} required />
                            </div>
                            <div className="form-group">
                                <label>Email*</label>
                                <input type="email" placeholder="Enter Email" className="form-control" name="email" value={form.email} onChange={handleInput} required />
                            </div>
                            <div className="form-group">
                                <label>Password*</label>
                                <input type="password" placeholder="Enter Password" className="form-control" name="password" value={form.password} onChange={handleInput} required />
                            </div>
                            <div className="form-group">
                                <label>Gender*</label>
                                <select name="gender" className="form-select" onChange={handleInput} value={form.gender} required>
                                    <option value="" disabled>Select your gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary form-control">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
