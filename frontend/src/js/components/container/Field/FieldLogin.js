import React from "react"
import Input from "../../presentational/Input"

export default class FieldLogin extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(this.props.id, event.target.value);
    }

    render() {

        return (
            <div>
                <Input
                    text={this.props.text}
                    type={this.props.type}
                    label={this.props.id}
                    id={this.props.id}
                    value={this.props.value}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }

}

