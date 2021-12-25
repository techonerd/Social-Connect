import logo from './logo.svg';
// import './App.css';
// import './chat.css';
// import {FontAwesomeIcon} from '@fontawesome/react-fontawesome';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { faCoffee } from '@fotawesome/free-solid-svg-icons';
import axios from 'axios';
import Login from './components/login';
import React from 'react';
class App extends React.Component {
    render() {
        return ( 
            <Login />
        );
    }
}
export default App;