import React, { Component } from 'react';
import CategoryItem from './Category-Item/Category-Item';
import './Category.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
            position: 0
        }
    }

    static getDerivedStateFromProps(nextProps) {
        //Set all data
        if (nextProps.Categories) {
            //get position
            const position = nextProps.Categories.length;
            console.log(position);
            return {
                Categories: nextProps.Categories,
                position: position
            }
        }
        return { undefined };
    }

    LoadMoreCategories = async () => {
        //function load more product
        // const limit = 6;
        // const position = this.state.position;
        // //const list_products = await getProducts(limit, position);

        // //let new_list_categories = this.state.Products;
        // new_list_categories.push(...list_products.data);

        // this.setState({
        //     Products: new_list_categories,
        //     position: position
        // });
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
                    <p className="text-center">
                        <span className="pink pointer" onClick={this.LoadMoreProduct}>See All Foods</span>
                    </p>
                </div>
            </section>
        );
    }
}

export default Category;