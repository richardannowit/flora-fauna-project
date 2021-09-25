import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Search.scss";

class Search extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            Content: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        //handle text when change input search
        this.setState({
            Content: e.target.value
        });
    }

    HandleSubmit = () => {
        const Content = this.state.Content;

        this.props.HandleSearch(Content);
    }

    static getDerivedStateFromProps(nextProps) {
        if(nextProps.ContentSearch) {
            return {
                Content: nextProps.ContentSearch
            };
        }
        return {undefined};
    }

    render() {
        return (
            <div>
                <section className="product-search text-center">
                    <div className="container">
                        <form>
                            <input
                                type="search"
                                name="search"
                                value={this.state.Content}
                                onChange={this.handleChange}
                                placeholder="Search for Food.."
                                required />
                            <Link
                                to="/search"
                                onClick={this.HandleSubmit}
                                className="btn btn-primary">Search</Link>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

Search.propTypes = {

};

export default Search;