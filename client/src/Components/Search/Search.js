import React, { Component } from 'react';
import "./Search.scss";

class Search extends Component {

    render() {
        return (
            <div>
                <section className="product-search text-center">
                    <div className="container">
                        <form action="true" method="POST">
                            <input type="search" name="search" placeholder="Search for Food.." required />
                            <input type="submit" name="submit" defaultValue="Search" className="btn btn-primary" />
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