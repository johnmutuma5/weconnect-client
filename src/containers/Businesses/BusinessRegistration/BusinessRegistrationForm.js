import React from 'react';
import { withRouter } from 'react-router-dom';
import Form, {formProcessComplete, formProcessFailed} from '../../../components/UI/Form';

import './BusinessRegistrationForm.css';

class BusinessRegistrationForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            values: {
                name: '',
                location: '',
                mobile: '',
                category:''
            }
        }
    }

    render() {
        // define classes form styling the form with css
        let classes = ['BusinessRegistrationForm']
        classes = this.props.active ?
                    classes.concat('active') :
                  classes.concat('inactive');

        // create the form to present to client
        // use withMessage to replace the form with an API message container
        // messages are loaded onSubmit
        const form = <Form
                        loadElements={ this.loadFormElements.bind(this) }
                        formContext = { this }
                        onSubmit={ this.onSubmit.bind(this) }/>;

        return (
            <div className={ classes.join(' ') }>
                <article className="form_container">
                    <div className='form_header'>
                      <p>{ 'Register your business' }</p>
                    </div>
                    { form }
                </article>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({submitting: true});
        this.props.onSubmit(this.state.values)
            .then((response) => {
                // construct a path to the new business's profile page
                const business_id = response.id;
                const path = this.props.match.path + '/'+ business_id;
                const msg = response.msg;
                // update form state and redirect the user to the path above
                this.setState(formProcessComplete(msg), this.redirect(path));
            })
            .catch((error) => {
                const msg = error.msg;
                this.setState(formProcessFailed(msg))
            })
    }

    redirect(path) {
        return () => {
            setTimeout(() => this.props.history.push(path), 1500)
        }
    }

    loadFormElements() {
        // the form construct requires a function that returns an array of
        // form element as JavaScript Objects. It uses this Array to generate a
        // HTML form
        return [
            {
                elementType: 'fieldset',
                key: 1,
                children: [
                    {
                        elementType: 'legend',
                        children: 'Basic Business Details'
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: 'text',
                            name: 'name',
                            value: this.state.values.name,
                            placeholder: 'Enter business name'
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: 'text',
                            name: 'location',
                            value: this.state.values.location,
                            placeholder: 'Enter business location'
                        }
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: 'text',
                            name: 'category',
                            value: this.state.values.category,
                            placeholder: 'Enter business category'
                        }
                    }
                ]
            },
            {
                elementType: 'fieldset',
                key: 2,
                children: [
                    {
                        elementType: 'legend',
                        children: 'Business Contact Details'
                    },
                    {
                        elementType: 'input',
                        attributes: {
                            type: "text",
                            name: "mobile",
                            value: this.state.values.mobile,
                            placeholder: "Enter mobile number"
                        }
                    }
                ]
            },
            {
                elementType: 'fieldset',
                key: 3,
                children: [
                    {
                        elementType: 'input',
                        attributes: {
                            type: "submit",
                            name: "submit",
                            value: "Register business"
                        }
                    }
                ]
            }
        ]
    }
}


export default withRouter(BusinessRegistrationForm);
