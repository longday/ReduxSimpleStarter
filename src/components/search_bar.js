import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '11' };
    }

    onInputChange (e) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})} />
            </div>
        )
    }
}
