import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Search.scss";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Content: "",
            result_content: ""
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
        } else {
            this.props.HandleSearch(Content);
        }
    }

    componentDidMount() {
        if (this.props.ContentSearch !== undefined) {
            //run when render search-products component
            const Content = this.props.ContentSearch;
            this.setState({
                Content: Content,
                result_content: `Result for "${Content}"`
            });
        } else {
            //order
            this.setState({
                Content: "",
                result_content: ""
            });
        }
    }

    componentDidUpdate(prevProps) {
        //run when use function search in search-products page
        const Content = this.props.ContentSearch;
        if (prevProps.ContentSearch !== Content) {
            this.setState({
                Content: Content,
                result_content: `Result for "${Content}"`
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
                                onKeyDown={e => {
                                    //delete event press enter
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                    }
                                }}
                                placeholder="Search for Food.."
                                required />
                            <Link
                                to="/search"
                                onClick={e => this.HandleSubmit(e)}
                                className="btn btn-primary">Search</Link>
                        </form>
                        <br></br>
                        <h1 className="text-white">{this.state.result_content}</h1>
                    </div>
                </section>
            </div>
        );
    }
}

Search.propTypes = {

};

export default Search;