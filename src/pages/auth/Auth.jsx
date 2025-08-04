import { useState } from 'react'
import './Auth.css'
import loginImage_1 from '../../assets/images/login_1.png';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (credentials) => {
        console.log('Login with:', credentials)
        // Add your login logic here
    }

    const handleRegister = (userData) => {
        console.log('Register with:', userData)
        // Add your registration logic here
    }


    return (
        <div className='auth-contener'>

            <div className='auth-content-contener'>

                <img
                    src={loginImage_1}
                    alt="Description"
                    className="login-image"
                />
                <div className='login-text'>
                    Login to access your course and materials
                </div >
                <div className='login-subtext'>
                    Create account and access our course with interactive live classes
                </div>

            </div>

            <div className='auth-form-contener'>
                {isLogin ? (
                    <LoginForm
                        onLogin={handleLogin}
                        toggleForm={() => setIsLogin(false)}
                    />
                ) : (
                    <RegisterForm
                        onRegister={handleRegister}
                        toggleForm={() => setIsLogin(true)}
                    />
                )}
            </div>
        </div>
    )
}

export default Auth