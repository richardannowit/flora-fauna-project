import React, { Component } from 'react';
import CategoryItem from './Category-Item/Category-Item';
import './Category.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: []
        }
    }

    static getDerivedStateFromProps(nextProps) {
        //Set all data
        if (nextProps.Categories) {
            return {
                Categories: nextProps.Categories
            }
        }
        return { undefined };
    }

    render() {
        return (
            <section className="categories">
                <div className="container">
                    <h2 className="text-center">Categories</h2>
                    <div className="category-reposive">
                        {this.state.Categories.map((element, index) => {
                            //render category items
                            return <CategoryItem
                                key={index}
                                Information={element}
                                ClickCategoryItem={this.props.ClickCategoryItem}
                            ></CategoryItem>
                        })}
                    </div>
                    <div className="clearfix" />
                </div>
            </section>
        );
    }
}

export default Category;