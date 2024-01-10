import React, { useState} from 'react'
import Cookie from 'universal-cookie';
import axios from 'axios';

import signInImage from '../assets/signup.jpg';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </p>
            </div>
        </div>

    </div>
  )
}

export default Auth