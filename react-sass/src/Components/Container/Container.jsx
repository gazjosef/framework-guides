import React, { Component } from 'react';
import './Container.scss';

import { CardComponent } from '../Card/Card'

import beer from '../../Assets/Icons/Beer.png';
import burger from '../../Assets/Icons/Burger.png';
import cereal from '../../Assets/Icons/Cereal.png';
import eggs from '../../Assets/Icons/Eggs.png';
import hotdog from '../../Assets/Icons/Hotdog.png';
import meat from '../../Assets/Icons/Meat.png';
import pizza from '../../Assets/Icons/Pizza.png';
import sandwich from '../../Assets/Icons/Sandwich.png';

class ContainerComponent extends Component {

    state = {
        categories: [
            {
                name: "Beer",
                img: beer,
                options: ["IPA", "Brown Ale", "Porter", "Stout"]
            },
            {
                name: "Burger",
                img: burger,
                options: ["Cheese", "Tex-Mex", "Aloha", "Portobello"]
            },
            {
                name: "Cereal",
                img: cereal,
                options: ["IPA", "Brown Ale", "Porter", "Stout"]
            },
            {
                name: "Eggs",
                img: eggs,
                options: ["Boiled", "Scrambled", "Omelet", "Over"]
            },
            {
                name: "Hot Dog",
                img: hotdog,
                options: ["Chicago", "Corney", "Polish", "Italian"]
            },
            {
                name: "Meat",
                img: meat,
                options: ["Duck", "Rabbit", "Goose", "Turkey"]
            },
            {
                name: "Pizza",
                img: pizza,
                options: ["IPA", "Brown Ale", "Porter", "Stout"]
            },
            {
                name: "Sandwich",
                img: sandwich,
                options: ["French", "Cheese", "Croque", "Club"]
            },
        ]
    }

    render() {
        return(
            <section className="menu-container">
                <div className="bars">
                </div>
                <section className="top">
                    Categories
                </section>
                <section className="bottom">
                    {
                        this.state.categories.map((category, key) => {
                            return <CardComponent category={category} key={key}></CardComponent>
                        })
                    }
                </section>
            </section>
        )
    }
}

export default ContainerComponent;