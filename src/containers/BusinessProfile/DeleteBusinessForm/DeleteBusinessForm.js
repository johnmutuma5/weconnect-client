import React from 'react';
import { withRouter } from 'react-router-dom';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';
import Modal from '../../../components/UI/Modal/Modal';


class EditBusinessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {

        }
    }

    render() {
        const modalTitle = 'Proceed to Delete business?';
        const form = <Form
                        id={'delete'}
                        loadElements={ this.loadFormElements.bind(this) }
                        formContext = { this }
                        onSubmit={ this.onSubmit.bind(this) }/>;

        return (
            <Modal title={ modalTitle } isVisible={ this.props.visible } >
                { form }
            </Modal>
        )

    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit()
            .then(response => {
                const msg = response.msg;
                this.setState(formProcessComplete(msg), this.redirect());
            })
            .catch(err => {
                const msg = err.msg;
                this.setState(formProcessFailed(msg))
            })
    }

    redirect(timeout=1000) {
        return () => setTimeout(() => this.props.history.push('/businesses'), timeout)
    }

    loadFormElements() {
        return [
            formInput('submit', 'submit', 'Yes', undefined)
        ]
    }
}


export default withRouter(EditBusinessForm);
