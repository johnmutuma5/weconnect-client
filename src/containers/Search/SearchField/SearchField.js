import React from 'react';
import { withRouter } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
import Form, {formProcessComplete, formProcessFailed, formInput} from '../../../components/UI/utils/Form';

import './SearchField.css';


class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                searchValue: ''
            },
            searchVisible: false,
        }
    }

    render() {
        let searchClasses = ['Search'];
        searchClasses = this.state.searchVisible ?
                            searchClasses.concat(['visible']) :
                            searchClasses.concat(['hidden']);

        return (
            <div className={searchClasses.join(' ')}>
                <div onClick={ this.toggleInputBar } className='SearchIcon'>icon</div>
                <Form
                    formContext={ this }
                    loadElements={ this.loadElements.bind(this) }
                    onInputBlur={ this.onInputBlur }
                    onSubmit={ this.onSubmit.bind(this) }/>
            </div>
        )
    }

    loadElements() {
        return [
            formInput('text', 'searchValue', this.state.values.searchValue,
                'Search weConnect')
        ]
    }


    onSubmit(e) {
        e.preventDefault();
        this.toggleInputBar();
        this.props.onSubmit(this.state.values);
    }

    toggleInputBar = () => {
        this.setState({searchVisible: !this.state.searchVisible});
    }

    onInputBlur = () => {
        this.toggleInputBar();
    }
}


export default withRouter(SearchField);
