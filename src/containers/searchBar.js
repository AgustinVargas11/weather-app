import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'

class SearchBar extends Component {

    state = {
        term: ''
    };

    onInputChange(e) {
        this.setState({
            term: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text"
                       value={this.state.term}
                       onChange={this.onInputChange.bind(this)}
                       className="form-control"
                       placeholder="Get five day forecast"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);