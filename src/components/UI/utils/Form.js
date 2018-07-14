import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';

import './Form.css';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.formContext = props.formContext;
        this.createElement = this.createElement.bind(this);
    }

    handleInputChange(e) {
        let values = {...this.formContext.state.values}
        const value = e.target.value;
        const field = e.target.name;
        Object.defineProperty(values, field, {value: value, enumerable: true});
        this.formContext.setState({values: values}, (e) => this.incomingOnInputChange(e));
    }

    incomingOnInputChange(e) {
        // call the particular form's onInputChange if it's available
        if(this.props.onInputChange)
            this.props.onInputChange(e);
    }

    render() {
        let formElements = this.props.loadElements()
            .map(this.createElement)

        const form = this.withMessages(
            <article className="form_container">
                <form
                    onSubmit={ this.props.onSubmit }
                    className={ this.props.className }
                    id={ this.props.id }>
                        { formElements }
                </form>
            </article>
        );

        return form
    }

    createElement(elem) {
        switch (elem.elementType) {
            case 'fieldset':
                let fiedsetChildren = elem.children.map(this.createElement);
                return (
                    <fieldset key={elem.key}>
                        { fiedsetChildren }
                    </fieldset>
                );

            case 'legend':
                const val = elem.children;
                return <legend key={ val }>{ val }</legend>;

            case 'select':
                let selectChildren = elem.children.map(this.createElement);
                return (
                    <select
                        onChange={ this.handleInputChange.bind(this) }
                        { ...elem.attributes}>
                        <option value="" disabled selected hidden>
                            { 'Select Gender...' }
                        </option>
                        { selectChildren }
                    </select>
                );

            case 'option':
                return (
                    <option { ...elem.attributes }>{ elem.children }</option>
                )

            case 'input':
                return (<input
                        onBlur={ this.props.onInputBlur }
                        onChange={ this.handleInputChange.bind(this) }
                        { ...elem.attributes }
                        key={ elem.attributes.name }/>)
            default:
                break;

        }
    }

    withMessages(form) {
        if (this.props.formContext.state.successful)
            form = this.resetWithMessage(form, this.formContext.state.success_message, 'success');

        if(this.props.formContext.state.failed)
            form = this.resetWithMessage(form, this.formContext.state.error_message, 'error');

        if (this.props.formContext.state.submitting)
            form = (<Message type={'info'}>
                        { 'Processing. Please wait.' }
                    </Message>);

        return form
    }

    resetWithMessage(form, message, messageType){
        form = (<Message type={messageType}>
                    { message }
                </Message>);
        this.resetForm();
        return form;
    }

    resetForm() {
        // reset the form after 1.5 seconds
        setTimeout(() => {
            this.props.formContext.setState({
                submitting: false,
                successful: false,
                failed: false,
            })}, 1500);
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loadElements: PropTypes.func.isRequired,
    formContext: PropTypes.object.isRequired
}

export function formProcessComplete(msg) {
    // return a function for functional setState
    return (state, props) => (
        {
            successful: true,
            success_message: msg,
            submitting: false
        }
    );
};

export function formProcessFailed(msg) {
    // return a function for functional setState
    return (state, props) => (
        {
            failed: true,
            error_message: msg,
            submitting: false
        }
    )
}

export function formInput(type, name, value, placeholder) {
    return (
        {
            elementType: 'input',
            attributes: {
                type: type,
                name: name,
                value: value,
                placeholder: placeholder
            }
        }
    );
}


export default Form;
