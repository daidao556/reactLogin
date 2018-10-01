import React from "react"
import FieldLogin from "./Field/FieldLogin";
import RememberMe from "../presentational/RememberMeCheckBox"
import SubmitButton from "../presentational/SubmitButton"
import MyServices from "../../utils/services_api"
import objectFunc from "../../utils/DoWithObject"

class Login extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.fields = [
            {
                text: "Username",
                id: "username",
                type: "text",
            },
            {
                text: "Password",
                id: "password",
                type: "password",
            }
        ]

    }

    handleFieldChange(FieldID, value) {
        this.setState({ [FieldID]: value });
    }

    handleCheckBoxChange(event) {
        this.setState({ isRememberMe: event.targer.checked });
    }

    handleSubmit() {

        const data = objectFunc.cloneObjectTopLevelWithKeys(this.state, ['username', 'password', 'isReamemerMe']);
        const isAuthorized = MyServices.sendDataWithAPI(this.props.url + "/check_authorized", data);
        if (isAuthorized) {
            if (this.state.isRememberMe) {

            }
            else {

            }
        }
    }

    render() {
        const fields = this.fields.map(field => (
            <FieldLogin
                key={field.id}
                id={field.id}
                text={field.text}
                type={field.type}
                onChange={this.handleFieldChange}
                value={this.state[field.id] || ""}
            />
        ))
        return (
            <form id="login-form" className="form-horizontal">
                {fields}
                <RememberMe
                    checked={this.state.isRememberMe || false}
                    handleChange={this.handleCheckBoxChange}
                    id="remember-checkbox"
                />

                <SubmitButton
                    text="Login"
                    id="login-button"
                    handleSubmit={this.handleSubmit}
                    disabled={false}
                />
            </form>
        );
    };
};


export default Login;