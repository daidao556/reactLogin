import React from 'react'
import Input from '../../presentational/Input'
import InvalidMessage from '../../presentational/InvalidMessage';

export default class FieldEditor extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleChange(event) {
        this.props.onChange(this.props.id, event.target.value);
    }

    handleOnBlur(event) {
        this.props.onBlur(this.props.id, event.target.value, this.props.constraint)
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
                    handleOnBlur={this.handleOnBlur}
                />
                <InvalidMessage
                    text={this.props.invalidMessage}
                    isDisplay={this.props.isDisplayInvalidMessage || false}
                    id={this.props.id + 'Message'}
                />
            </div>
        )
    }
}