import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <span className="badge rounded-pill bg-success mx-3" onClick={props.handleTheme}>Success</span>
                    <span className="badge rounded-pill bg-info text-dark mx-3" onClick={props.handleTheme}>Info</span>
                    <span className="badge rounded-pill bg-danger mx-3" onClick={props.handleTheme}>Danger</span>
                    {/* If we want to call a function with parameters then */}
                    <span className="badge rounded-pill bg-warning mx-3" onClick={() => {props.handleParamTheme('warning')}}>Warning with params</span>

                    <div className={`d-flex form-check form-switch my-3 text-${props.mode === 'light'? 'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.prototype= {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Default title',
    about: 'Default About'
}
