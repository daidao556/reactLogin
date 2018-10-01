import React from "react"
import { Route, Switch } from 'react-router-dom'
import CreateAccount from "./CreateAccount"
import Login from "./Login"

export default class FormRouter extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={(props) => <Login {...props} url={this.props.url} />} />
                <Route exact path="/create_account" render={(props) => <CreateAccount {...props} url={this.props.url} />} />
                <Route path="/login" render={(props) => <Login {...props} url={this.props.url} />} />
            </Switch>
        )
    }
}

