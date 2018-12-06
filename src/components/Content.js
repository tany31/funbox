import React from 'react';
import Card from './Card';
import cards from '../cards'


function Content() {
    return (
      <div className="content">
        <Card card={cards[0]} />
        <Card card={cards[1]} />
        <Card card={cards[2]} />
      </div>
    );

}

export default Content;