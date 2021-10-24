import React from 'react';
import Card from './Card';

export default{
    title: 'components/Card',
    component: Card,
    argTypes: {
        cardColor: {control: 'color'},
        textColor: {control: 'color'},
        cardText: {control: 'text'},
        cardClass: {control: {type: 'radio', options: ['small-card','medium-card','large-card']}}
    }
};

const Template = args => <Card {...args} />;

export const CardInstance = Template.bind({});

CardInstance.args = {
    cardClass: 'medium-card',
    cardColor: 'black',
    textColor: 'orange',
    cardText: 'This is a card !!'
}