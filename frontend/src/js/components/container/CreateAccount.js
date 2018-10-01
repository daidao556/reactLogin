import React, { Component } from "react";
import ReactDOM from "react-dom"
import SubmitButton from "../presentational/SubmitButton"
import FieldEditor from "./Field/FieldEditor"

import isInvalid from "../../utils/Validator";
import hashPassword from "../../utils/HashPassword"
import objectFunc from "../../utils/DoWithObject"
import myServices from "../../utils/services_api"


const saltLength = 32;

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFieldBlur = this.handleFieldBlur.bind(this);
    this.handleWhenSubmit = this.handleWhenSubmit.bind(this);
    this.fields = [
      {
        text: "Username",
        id: "username",
        type: "text",
        invalidMessage: "Invalid username",
        constraint: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
      },
      {
        text: "Password",
        id: "password",
        type: "password",
        invalidMessage: "Invalid password",
        constraint: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
      },
      {
        text: "Email",
        id: "email",
        type: "email",
        invalidMessage: "Invalid email",
        constraint: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
    ];
  }

  handleWhenSubmit() {
    const keys = ["username", "password", "email"];
    let data = objectFunc.cloneObjectTopLevelWithKeys(this.state, keys);
    if (!objectFunc.isEmpty(data)) {
      hashPassword(data, saltLength);
      myServices.sendDataWithAPI(this.props.url + '/create_account', data);
    }
  }

  handleFieldChange(fieldID, value) {
    this.setState({ [fieldID]: value });
  }

  handleFieldBlur(fieldID, value, constraint) {
    this.setState({ ['isValid' + fieldID]: isInvalid(value, constraint) })
  }

  render() {
    const fields = this.fields.map(field => (
      <FieldEditor
        key={field.id}
        id={field.id}
        text={field.text}
        type={field.type}
        invalidMessage={field.invalidMessage}
        constraint={field.constraint}
        isDisplayInvalidMessage={(this.state['isValid' + field.id] || false)}

        onChange={this.handleFieldChange}
        onBlur={this.handleFieldBlur}
        value={this.state[field.id] || ""}
      />
    )
    )
    let count = 0;
    let isAllValid = false;
    this.fields.forEach(field => {
      if (this.state['isValid' + field.id] === undefined) {
        count++;
      }
      else if (this.state['isValid' + field.id]) {
        count++;
      }
    })
    if (count == 0) isAllValid = true;

    return (
      <form id="article-form" className="form-horizontal">
        {fields}

        <SubmitButton
          text="Create Account"
          id="submit-button"
          disabled={!isAllValid}
          handleSubmit={this.handleWhenSubmit}
        />
      </form>
    );
  }
}
export default FormContainer;




