import React, { Component } from 'react';
import { getCategories } from '../API/Connect-API';
import CategoryItem from './Category-Item/Category-Item';
import './Category.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
            position: 0,
            status_load_element: "hide"
        }
    }

    LoadMoreCategories = async () => {
        //unction load more product
        const limit = 6;
        const position = this.state.position;
        const list_categories = await getCategories(limit);

        let new_list_categories = this.state.Categories;
        new_list_categories.push(...list_categories.data);

        this.setState({
            Products: new_list_categories,
            position: position + limit
        });
    }

    static getDerivedStateFromProps(nextProps) {
        //Set all data
        if (nextProps.Categories) {
            const status_load_element = (nextProps.status_load_element) ? nextProps.status_load_element : "hide";
            //get position
            const position = nextProps.Categories.length;
            return {
                Categories: nextProps.Categories,
                position: position,
                status_load_element: status_load_element
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
                    <p className={`text-center ${this.state.status_load_element}`}>
                        <span className='pink pointer' onClick={this.LoadMoreProduct}>See More Categories</span>
                    </p>
                </div>
            </section>
        );
    }
}

export default Category;