import bg from './bg.svg';
// // import './App.css';
import './login.css';
// import {FontAwesomeIcon} from '@fontawesome/react-fontawesome';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { faCoffee } from '@fotawesome/free-solid-svg-icons';
import axios from 'axios';

import React from 'react';
class Login extends React.Component {
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

    render() {
        return ( 

            <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-md-2">
                        <img src={bg} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 contents" align="center">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3>Sign In to <strong>SocialConnect</strong></h3>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                </div>
                                <form action="#" method="#">
                                    {/* {% csrf_token %} */}
                                    <div className="form-group first">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" value={this.state.credentials.username} onChange={this.inputChanged}/>

                                    </div>
                                    <div className="form-group last mb-4">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" value={this.state.credentials.password} onChange={this.inputChanged}/>

                                    </div>

                                    <div className="d-flex mb-5 align-items-center">
                                        <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                    <input type="checkbox"/>
                    <div className="control__indicator"></div>
                    </label>
                                        <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                                    </div>

                                    <input type="submit" value="Log In" className="btn text-white btn-block btn-primary" onClick={this.login}/>

                                    <span className="d-block text-left my-4 text-muted"> or sign in with</span>

                                    <div className="social-login">
                                        <a href="#" className="facebook">
                                            <span className="icon-facebook mr-3"></span>
                                        </a>
                                        <a href="#" className="twitter">
                                            <span className="icon-twitter mr-3"></span>
                                        </a>
                                        <a href="#" className="google">
                                            <span className="icon-google mr-3"></span>
                                        </a>
                                    </div>
                                </form>
                                {/* {% if user.is_authenticated %} Welcome {{user.username}} {% else %} */}

                                {/* <h3>Your are not authenticated</h3> */}

                                {/* {% endif %} */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>);

    }
}
export default Login;