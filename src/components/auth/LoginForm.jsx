import { useState } from 'react';
import './LoginForm.css'
import GoogleLogo from '../../assets/images/google.webp';
import PhonoLogo from '../../assets/images/mobile.png';
import FacebookLogo from '../../assets/images/facebook.webp';

const LoginForm = ({ onLogin, toggleForm }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin({ email, password })
    }

    return (
        <>

            <form className="loginform" onSubmit={handleSubmit}>
                <h2 className='text-login'>Login</h2>
                <div className="form-group">
                    <label className='login-label'>Email</label>
                    <input
                        className="login-input"
                        type="email"
                        value={email}
                        placeholder='Enter Email Address'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='login-label'>Password</label>
                    <input
                        className="login-input"
                        type="password"
                        value={password}
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>

                <div>
                    <div className='other-login-text'>------ Other login method ------</div>
                </div>

                <div className="auth-buttons">
                    <button className="auth-btn-mobile">
                        <img src={GoogleLogo} alt="Mobile" />
                    </button>
                    <button className="auth-btn-google">
                        <img src={PhonoLogo} alt="Mobile" />
                    </button>
                    <button className="auth-btn-apple">
                        <img src={FacebookLogo} alt="Mobile" />
                    </button>
                </div>

                <div className="login-register-toggle">
                    <p>
                        Don't have an account?{' '}
                        <span onClick={toggleForm}>Register</span>
                    </p>
                </div>
            </form>

        </>
    )
}

export default LoginForm