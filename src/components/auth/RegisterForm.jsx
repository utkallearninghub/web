import { useState } from 'react';
import './RegisterForm.css'

const RegisterForm = ({ onRegister, toggleForm }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return
        }
        onRegister({ name, email, number, password })
    }

    return (
        <>

            <form className='register-form' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="form-group">
                    <label className='register-label'>Full Name</label>
                    <input
                        className="register-input"
                        type="text"
                        value={name}
                        placeholder='Enter Your Name'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='register-label'>Email</label>
                    <input
                        className="register-input"
                        type="email"
                        value={email}
                        placeholder='abc@gmail.com'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                  <div className="form-group">
                    <label className='register-label'>Number</label>
                    <input
                        className="register-input"
                        type="number"
                        value={number}
                        placeholder='00000 00000'
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='register-label'>Password</label>
                    <input
                        className="register-input"
                        type="password"
                        value={password}
                        placeholder='Enter your passwors'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label className='register-label'>Confirm Password</label>
                    <input
                        className="register-input"
                        type="password"
                        value={confirmPassword}
                        placeholder='Confirm your password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        minLength="6"
                    />
                </div>
                <button type="submit" className="auth-button">
                    Register
                </button>
                <div className="auth-toggle">
                    <p>
                        Already have an account?{' '}
                        <span onClick={toggleForm}>Login</span>
                    </p>
                </div>
            </form>

        </>
    )
}

export default RegisterForm