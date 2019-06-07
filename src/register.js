import React, { Component } from "react"
import './register.css'
import { Link } from "react-router-dom"
class Register extends Component {
    // constructor() {
    // super()
    // this.state = {};
    // }

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <div className="form">
                    <div className="columns">
                        <div className="column">
                            <h3>Name</h3>
                            <input className="input is-rounded" type="text" placeholder="username" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <h3>Password</h3>
                            <input className="input is-rounded" type="password" placeholder="password" />
                        </div>
                        <div className="column">
                            <h3>Confirm password</h3>
                            <input className="input is-rounded" type="password" placeholder="password" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <h3>Email</h3>
                            <input className="input is-rounded" type="email" placeholder="email" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="form">
                    <a className="button is-info is-outlined">Register</a>
                </div>
                <div className="form">
                    <Link to="/">
                        <a className="button is-info is-outlined">Back</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Register