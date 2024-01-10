import React, { useState } from "react";
import Cookie from "universal-cookie";
import axios from "axios";

import signInImage from "../assets/signup.jpg";

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleChange = () => {}

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignUp ? "Sign Up" : "Sign In"}</p>
                    <form onSubmit={() => {}}>
                        {isSignUp && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="useName">User Name</label>
                            <input
                                name="useName"
                                type="text"
                                placeholder="User Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;
