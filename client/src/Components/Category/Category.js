import React, { Component } from 'react';
import CategoryItem from './Category-Item/Category-Item';
import './Category.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //create sample data
            sample_data: [
                {
                    PathImage: "/Images/Categories/burger.jpg",
                    NameCategory: "Burger"
                },
                {
                    PathImage: "/Images/Categories/momo.jpg",
                    NameCategory: "Momo"
                },
                {
                    PathImage: "/Images/Categories/pizza.jpg",
                    NameCategory: "Pizza"
                }
            ]
        }
    }

    render() {
        return (
            <section className="categories">
                <div className="container">
                    <h2 className="text-center">Categorys</h2>
                    {this.state.sample_data.map((element,index) => {
                        //render category items
                        return <CategoryItem
                            key={index}
                            Information={element}
                            ></CategoryItem>
                    })}
                    <div className="clearfix" />
                </div>
            </section>
        );
    }
}

export default Category;