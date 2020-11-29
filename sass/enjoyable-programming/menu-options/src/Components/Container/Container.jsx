import React, { Component } from 'react';
import './Container.scss';

class ContainerComponent extends Component {
  state = {
    categories: [
      {
        name: 'Beer',
        img: beer,
        options: ['IPA', 'Brown Ale', 'Porter', 'Stout'],
      },
      {
        name: 'Burger',
        img: burger,
        options: ['Cheese', 'Tex-Mex', 'Aloha', 'Portobello'],
      },
      {
        name: 'Cereal',
        img: cereal,
        options: ['Oats', 'Wheet', 'Rice', 'Malze'],
      },
      {
        name: 'Eggs',
        img: eggs,
        options: ['Boiled', 'Scrambled', 'Omlette', 'Over'],
      },
      {
        name: 'Hotdog',
        img: hotdog,
        options: ['Chicago', 'Corney', 'Polish', 'Italian'],
      },
      {
        name: 'Meat',
        img: meat,
        options: ['Duck', 'Rabbit', 'Goose', 'Turkey'],
      },
      {
        name: 'Pizza',
        img: pizza,
        options: ['Sicillian', 'Neapolitan', 'Greek', 'California'],
      },
      {
        name: 'Sandwich',
        img: sandwich,
        options: ['French', 'Cheese', 'Croque', 'Club'],
      },
    ],
  };

  render() {
    return (
      <section className="menu-container">
        <div className="bars"></div>
        <section className="top">Categories</section>
        <section className="bottom">
          {this.state.categories.map((category) => {
            return <div> </div>;
          })}
        </section>
      </section>
    );
  }
}

export default ContainerComponent;
