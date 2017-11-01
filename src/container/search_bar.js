import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term : ''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onFormSubmit(event) {
        event.preventDefault();

    }
    onInputChange(event) {
        this.setState({term : event.target.value })
    }
    render() {
        return(
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input type="text"
                    className="form-control" value={this.state.term}
                    placeholder="Get forecast of your city"
                    onChange = {this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;