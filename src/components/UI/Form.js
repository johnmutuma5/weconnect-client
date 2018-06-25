import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component {
    constructor(props) {
        super();
        this.createElement = this.createElement.bind(this);
        this.handleInputChange = this.handleInputChange.bind(props.formContext)
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
                const val = elem.value;
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

    handleInputChange(e) {
        let state = {}
        const value = e.target.value;
        const field = e.target.name;
        Object.defineProperty(state, field, {value: value, enumerable: true});
        this.setState(state);
    }

    render() {
        let formElements = this.props.loadElements()
            .map(this.createElement)
        // this.createElement();
        return (
            <form
                onSubmit={ this.props.onSubmit }
                className={ this.props.className }>
                    { formElements }
            </form>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loadElements: PropTypes.func.isRequired,
    formContext: PropTypes.object.isRequired
}


export default Form;
