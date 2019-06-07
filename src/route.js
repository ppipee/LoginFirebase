import React, { Component } from "react"
import { BrowserRouter, Route} from 'react-router-dom'
import Login from './login'
import Register from './register'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    {/* <Route path="/main" component={Main}/> */}
                </div>
            </BrowserRouter>
                )
            }
        }
        
export default Router