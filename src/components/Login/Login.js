import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div className='login'>
            <Link to='/'>
                <img 
                className='login_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-In</h1>
                
                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className='login_signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Bazaar's Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Advertisements
                    Notice.
                </p>

                <button
                className='login_registerButton'>
                Create your Amazon Account</button>

            </div>

        </div>
    )
}