import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormRouter from './container/FormRouter'
import Header from "./container/Header"

export default class App extends React.Component {
    constructor() {
        super();
        this.url = 'http://127.0.0.1:3000';
    }
    render() {
        return (
            <Router>
                <div>
                    <div id="header" className="mt-2 col-md-3">
                        <Header url={this.url} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 offset-md-4 form-box">
                            <div id="create-article-form" className="justify-content-center align-items-center">
                                <FormRouter url={this.url} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;