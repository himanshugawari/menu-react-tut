import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        const { id, name, image, label, price, description } = item;
        return (
          <article key={id} className='menu-item'>
            <img src={image} alt={name} className='photo' />
            <div className='iyem-info'>
              <header>
                <h4>{name}</h4>
                <h4>{label}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
