import React from "react"
import ReactDOM from "react-dom"
import Button from "../presentational/Button"

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.headerButtons = [
            {
                id: "login-button",
                text: "Login",
                className: "btn btn-success mx-1 my-1",
                href: "/login"
            },
            {
                id: "create-account-button",
                text: "Create Account",
                className: "btn btn-primary mx-1 my-1",
                href: "/create_account"
            }
        ]
    }

    render() {
        const Buttons = this.headerButtons.map(headerButton => (
            <Button
                key={headerButton.id}
                id={headerButton.id}
                text={headerButton.text}
                href={headerButton.href}
                className={headerButton.className}
            />
        ))
        return (
            <div>
                {Buttons}
            </div>
        );
    };
};

export default Header;

const wrapper = document.getElementById("header");
wrapper ? ReactDOM.render(<Header />, wrapper) : false;