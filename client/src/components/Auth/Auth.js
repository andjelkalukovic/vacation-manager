import React, { useState } from 'react'
import Input from './Input'

const initialState = { firstName: '', lastName: '', email: '', password: '' }

const Auth = () => {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSwitch = () => {
        setIsSignedUp(!isSignedUp)
    }

    return (
        <div>
            <h3>{isSignedUp ? 'Sign Up' : 'Sign In'}</h3>
            
            <form onSubmit={handleSubmit}>

                {isSignedUp && (
                    <>
                        <Input name='firstName' placeholder='First Name' type='text' handleChange={handleChange} />
                        <Input name='lastName' placeholder='Last Name' type='text' handleChange={handleChange} />
                    </>
                )}

                <Input name='email' placeholder='Email' type='email' handleChange={handleChange} />
                <Input name='password' placeholder='Password' type='password' handleChange={handleChange} />

                {isSignedUp && <Input name='confirmPassword' placeholder='Confirm Password' type='password' handleChange={handleChange} />}

                <button type='submit'>{isSignedUp ? 'Sign Up' : 'Sign In'}</button>
                <button onClick={handleSwitch}>{isSignedUp ? 'Already have an account?' : "Don't have an account?"}</button>

            </form>
        </div>
    )
}

export default Auth;