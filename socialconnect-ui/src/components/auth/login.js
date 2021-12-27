import signup from './images/signup.jpg';
// // import './App.css';
// import DjangoCSRFToken from 'django-react-csrftoken';
import login from './images/login.jpg';
import './login.css';
// import {FontAwesomeIcon} from '@fontawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'icomoon/style.css';
import { Cookie } from 'react-cookie';
// import 'react-iconmoon/icon.css';
import Popper from "popper.js";
// import { faCoffee } from '@fotawesome/free-solid-svg-icons';
import axios from 'axios';

import React from 'react';
class Signup extends React.Component {
    state = {
        credentials: {username:'', password:''},
    }

    inputChanged = (event) => {
        const credentials = this.state.credentials;
        credentials[event.target.name] = event.target.value;
        this.setState({credentials});
    }

    login = (event) => {
        console.log(this.state.credentials);
    }

    // $(function() {
    //     'use strict';
    
        
    // //   $('.form-control').on('input', function() {
    // //       var $field = $(this).closest('.form-group');
    // //       if (this.value) {
    // //         $field.addClass('field--not-empty');
    // //       } else {
    // //         $field.removeClass('field--not-empty');
    // //       }
    // //     });
    
    // // });

    render() {
        return ( 
            
            <div className="main">

            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={signup} alt="sing up image"/></figure>
                            <a href="#" className="signup-image-link">I am already member</a>
                        </div>
                    </div>
                </div>
            </section>
    
           
    
        </div>);

    }
}
// export default Signup;



class Login extends React.Component {
    state = {
        credentials: {username:'', password:''},
    }

    inputChanged = (event) => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({cred});
    }

    login = (event) => {
        console.log(this.state.credentials);
    }

    // $(function() {
    //     'use strict';
    
        
    //   $('.form-control').on('input', function() {
    //       var $field = $(this).closest('.form-group');
    //       if (this.value) {
    //         $field.addClass('field--not-empty');
    //       } else {
    //         $field.removeClass('field--not-empty');
    //       }
    //     });
    
    // });

    render() {
        return ( 


            <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={login} alt="sing up image"/></figure>
                        <a href="#" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Welcome back</h2>
                        <form method="#" className="register-form" id="login-form">
                            
                        {/* <input type="hidden" name="_csrf" value={Cookie.load('XSRF-TOKEN')}/> */}
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="your_name" placeholder="Your Name" value={this.state.credentials.username} onChange={this.inputChanged}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" placeholder="Password" value={this.state.credentials.password} onChange={this.inputChanged}/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="login"  className="form-submit" value="Log in" onClick={this.login}/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        
            );
        }}
export default Login;