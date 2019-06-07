import React, { Component } from "react"
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import './login.css'
import { Link } from 'react-router-dom'
const firebaseConfig = {
    apiKey: "AIzaSyCPnHmv_CWAGvI7Q9RJo4RvrbvXiuqbAFs",
    authDomain: "login-project-35ad4.firebaseapp.com",
    databaseURL: "https://login-project-35ad4.firebaseio.com",
    projectId: "login-project-35ad4",
    storageBucket: "login-project-35ad4.appspot.com",
    messagingSenderId: "362042762356",
    appId: "1:362042762356:web:54659aec3747c11c"
};
firebase.initializeApp(firebaseConfig);

class Login extends Component {
    constructor() {
        super()
        this.state = {};
    }

    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google , Facebook , Etc as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
            //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccess: () => false
        }
    };


    render() {
        return (
            <div className="body">
                <br />
                <h1 style={{textAlign:"center"}}>Create Account</h1>
                <br/>
                <div className="form-login" >
                    <div className="columns">
                        <div className="column">
                            <h3>Username</h3>
                            <input className="input is-rounded" type="text" placeholder="password" />
                        </div>
                        <div className="column">
                            <h3>Password</h3>
                            <input className="input is-rounded" type="password" placeholder="password" />
                        </div>
                    </div>
                    <h1 style={{ textAlign: "center" }}>OR</h1>
                    <div>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                    <br />
                    <br />
                    <div>
                        <Link to="/register">
                            <h6 style={{ textAlign: "right" }}>register</h6>
                        </Link>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Login