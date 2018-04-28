import React, {Component } from 'react'
import check  from '../../media/check.svg'
import './navbar.css'

class NavbarComponent extends Component {
    constructor(){
        super()
    }

    render(){
        return <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-android">
            <img className="logo" src={check} width="50" height="50" alt=""/>
            <a class="navbar-brand" href="#"> WeConnect</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Businesses <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register a business</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button class="btn btn-light"><a class="nav-link" href="#">Logout</a></button>
                    </li>
                </ul>
            </div>
        </nav>
    }
}

export default NavbarComponent