import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message/Message';


class Form extends React.Component {
    constructor(props) {
        super();
        this.createElement = this.createElement.bind(this);
        this.handleInputChange = this.handleInputChange.bind(props.formContext)
    }

    handleInputChange(e) {
        let values = {...this.state.values}
        const value = e.target.value;
        const field = e.target.name;
        Object.defineProperty(values, field, {value: value, enumerable: true});
        this.setState({values: values});
    }

    render() {
        let formElements = this.props.loadElements()
            .map(this.createElement)

        const form = this.withMessages(
            <form
                onSubmit={ this.props.onSubmit }
                className={ this.props.className }>
                    { formElements }
            </form>
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

            case 'input':
                return (<input
                        { ...elem.attributes }
                        onChange={ this.handleInputChange }
                        key={ elem.attributes.name }/>)
            default:
                break;

        }
    }

    withMessages(form) {
        if (this.props.formContext.state.successful)
            form = (<Message type={'success'}>
                        { this.props.formContext.state.success_message }
                    </Message>);

        if(this.props.formContext.state.failed){
            form = (<Message type={'error'}>
                        { this.props.formContext.state.error_message }
                    </Message>);
            this.resetForm();
        }

        if (this.props.formContext.state.submitting)
            form = (<Message type={'info'}>
                        { 'Processing. Please wait.' }
                    </Message>);

        return form
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


export default Form;
