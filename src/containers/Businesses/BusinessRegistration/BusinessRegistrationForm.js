import React from 'react';
import { withRouter } from 'react-router-dom';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';

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
        let businessFormCssClass = ['BusinessRegistrationForm']
        businessFormCssClass = this.props.active ?
                    businessFormCssClass.concat('active') :
                  businessFormCssClass.concat('inactive');

        // create the form to present to client
        // use withMessage to replace the form with an API message container
        // messages are loaded onSubmit
        const form = <Form
                        loadElements={ this.loadFormElements.bind(this) }
                        formContext = { this }
                        onSubmit={ this.onSubmit.bind(this) }/>;

        return (
            <div className={ businessFormCssClass.join(' ') }>
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
                key: 'busreg1',
                children: [
                    {
                        elementType: 'legend',
                        children: 'Basic Business Details'
                    },
                    formInput('text', 'name', this.state.values.name, 'Business Name'),
                    formInput('text', 'location', this.state.values.location, 'Business Location'),
                    formInput('text', 'category', this.state.values.category, 'Business Category')
                ]
            },
            {
                elementType: 'fieldset',
                key: 'busreg2',
                children: [
                    {
                        elementType: 'legend',
                        children: 'Business Contact Details'
                    },
                    formInput('text', 'name', this.state.values.mobile, 'Mobile No.')
                ]
            },
            {
                elementType: 'fieldset',
                key: 3,
                children: [
                    formInput('submit', 'submit', 'Register Business', undefined)
                ]
            }
        ]
    }
}

export default withRouter(BusinessRegistrationForm);
