import React from 'react';
import Aux from '../../../../../hoc/Aux';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../../../components/UI/utils/Form';

class AddReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                heading: '',
                body: ''
            }
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.values)
            .then(res => {
                const msg = res.msg;
                this.setState(formProcessComplete(msg));
                this.props.invokeUpdateReviews();
            })
            .catch(err => {
                const msg = err.msg
                this.setState(formProcessFailed(msg));
            })
    }

    render() {
        return (
            <Aux>
                <Form
                    formContext={ this }
                    loadElements={this.loadElements.bind(this)}
                    onSubmit={this.onSubmit.bind(this)}
                    id={'ReviewForm'}/>
            </Aux>
        )
    }

    loadElements () {
        return [
            formInput('text', 'heading', this.state.values.heading, 'Heading'),
            formInput('text', 'body', this.state.values.body, 'Review body'),
            formInput('submit', 'submit', 'Post', undefined)
        ]
    }
}

export default AddReviewForm;
