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
        const Content = this.props.ContentSearch;
        if (Content !== undefined) {
            //run when render search-products component
            const content = Content === "" ? "" : `Result for "${Content}"`;
            this.setState({
                Content: Content,
                result_content: content
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
            const content = Content === "" ? "" : `Result for "${Content}"`;
            this.setState({
                Content: Content,
                result_content: content
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
                                to="/products"
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