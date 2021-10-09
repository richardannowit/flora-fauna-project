import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Search.scss";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Content: ""
        }
    }

    handleChange = (e) => {
        //handle text when change input search
        this.setState({
            Content: e.target.value
        });
    }

    HandleSubmit = (e) => {
        //send content search to search-products page
        const Content = this.state.Content;
        if (Content.trim() === "") {
            e.preventDefault();
        }
        this.props.HandleSearch(Content);
    }

    componentDidMount() {
        if (this.props.ContentSearch !== undefined) {
            //run when render search-products component
            const Content = this.props.ContentSearch;
            this.setState({
                Content: Content
            });
        } else {
            //order
            this.setState({
                Content: ""
            });
        }
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
                                onChange={e => this.handleChange(e)}
                                placeholder="Search for Food.."
                                required />
                            <Link
                                to="/search"
                                onClick={e => this.HandleSubmit(e)}
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