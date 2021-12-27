import React, { Component } from 'react';
import {MenuItems} from './Menuitems'; 

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand">Social Connect</h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>{item.title}</a>
                            </li>
                        ) 
                    }, 
                </ul>
            </nav>
        )
    }
}

export default Navbar;